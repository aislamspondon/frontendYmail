import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../redux/utils/axios";
import Loading from "../Loading";

export default function AutoMessage() {
  const [api, setApi] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState("");
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("excel_file", file);
    setFormData(formData);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setUploading(true);

    formData.append("api", api);
    formData.append("sender_mail", email);
    formData.append("subject", subject);
    formData.append("content", content);
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post("api/mail/mailsend/", formData, config);
      navigate("/success");
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <div>
      <Row style={{ textAlign: "center" }}>
        <h1>Welcome To Auto Message Dashboard</h1>
      </Row>
      <Row>
        {uploading && <Loading />}
        <Col xs={12} md={12} sm={12}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="api">
              <Form.Label>API KEY</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter API Key"
                value={api}
                onChange={(e) => setApi(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username Or Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Subject Here"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Enter Content Here"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="excelFile">
              <Form.Label>Enter Excel</Form.Label>
              <Form.Control type="file" onChange={uploadFileHandler} />
            </Form.Group>
            <br /> <br />
            <Button type="submit" variant="primary">
              Submit For Action
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
