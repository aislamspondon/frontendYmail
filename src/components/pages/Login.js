import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchUserLogin from "../../redux/thunk/fetchLogin";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchUserLogin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate, userInfo]);
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Username / Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username Or Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Button disabled={loading} type="submit" variant="primary">
              Sign In
            </Button>
          </Form>
          {error && <div>There have some error in your account</div>}
        </Col>
      </Row>
    </Container>
  );
}
