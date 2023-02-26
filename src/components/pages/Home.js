import React, { useEffect } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchConsumerList from "../../redux/thunk/fetchConsumerList";
import fetchLatestPreview from "../../redux/thunk/fetchLatestPreview";
import fetchPreviewList from "../../redux/thunk/fetchPreviewList";
import Error from "../Error";
import Loading from "../Loading";

export default function Home() {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const consumerList = useSelector((state) => state.consumerList);
  const { consumers } = consumerList;
  const listPreview = useSelector((state) => state.listPreview);
  const { preview } = listPreview;
  const previewLatest = useSelector((state) => state.previewLatest);
  const { preview: latestPreview, loading, isError } = previewLatest;
  const dispatch = useDispatch();
  const { userInfo } = userLogin;
  let users = Number(consumers?.length) || [];
  let total_preview = Number(preview?.length) || [];

  function NumberFormatExample(value) {
    const number = value;
    const formattedNumber = number.toLocaleString("en-IN"); // assuming Indian English locale
    return formattedNumber;
  }
  console.log(latestPreview);
  let content = null;
  if (loading) content = <Loading />;
  if (!loading && isError) content = <Error message="There is an error" />;
  if (!loading && !isError && latestPreview === undefined)
    content = <Error message="No Preview Exist" />;

  if (!loading && !isError && latestPreview !== undefined) {
    content = (
      <tr>
        <td>{latestPreview.id}</td>
        <td>{latestPreview.order}</td>
        <td>{latestPreview.transaction}</td>
        <td>{latestPreview.initial_amount}</td>
        <td>{latestPreview.total_charges}</td>
        <td>{latestPreview.payment_reference}</td>
      </tr>
    );
  }

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    dispatch(fetchConsumerList);
    dispatch(fetchPreviewList);
    dispatch(fetchLatestPreview);
  }, [userInfo, navigate, dispatch]);
  return (
    <div>
      <Row>
        <Col sm={12} md={6} lg={6} xl={6}>
          <Card
            style={{
              height: "170px",
              textAlign: "center",
              borderRadius: "12px",
              margin: "10px 0",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  margin: "20px 0",
                }}
              >
                Total Users
              </Card.Title>
              <Card.Text
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  margin: "20px 0px",
                }}
              >
                {NumberFormatExample(users)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <Card
            style={{
              height: "170px",
              textAlign: "center",
              borderRadius: "12px",
              margin: "10px 0",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  margin: "20px 0",
                }}
              >
                Total Preview
              </Card.Title>
              <Card.Text
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                  margin: "20px 0px",
                }}
              >
                {NumberFormatExample(total_preview)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <h2>Latest Preview</h2>
      <hr />

      <Table style={{ padding: "20px" }}>
        <thead>
          <tr>
            <th>id</th>
            <th>Order</th>
            <th>Transaction</th>
            <th>Initial Amount</th>
            <th>Total Charges</th>
            <th>Payment Reference</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </Table>
    </div>
  );
}
