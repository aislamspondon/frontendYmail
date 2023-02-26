import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchCreatePreview from "../../redux/thunk/fetchCreatePreview";
import Error from "../Error";
import Loading from "../Loading";
import Success from "../Success";

export default function CreateCustomerPreview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [order, setOrder] = useState("");
  const [transaction, setTransaction] = useState("");
  const [initialAmount, setInitialAmount] = useState("");
  const [totalCharges, setTotalCharges] = useState("");
  const [paymentReference, setPaymentReference] = useState("");

  const previewCreate = useSelector((state) => state.previewCreate);
  const { loading, isError, success } = previewCreate;
  const reset = () => {
    setOrder("");
    setTransaction("");
    setInitialAmount("");
    setTotalCharges("");
    setPaymentReference("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      fetchCreatePreview(
        order,
        transaction,
        initialAmount,
        totalCharges,
        paymentReference
      )
    );
    navigate("/preview");
    reset();
  };
  let content = "";
  if (loading) content = <Loading />;
  if (!loading && isError) content = <Error message="There is an Error " />;
  if (!loading && !isError && success)
    content = <Success message="Create Order Successfully" />;
  return (
    <div>
      <h2>Consumer Order Preview</h2>
      {content}
      <Row>
        <Col sm={12} md={12} lg={12} xl={12}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="order">
              <Form.Label>Order</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Order ID"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="transaction">
              <Form.Label>Transaction</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Transaction"
                value={transaction}
                onChange={(e) => setTransaction(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="initial_amount">
              <Form.Label>Initial Amount</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Initial Amount"
                value={initialAmount}
                onChange={(e) => setInitialAmount(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="total_charges">
              <Form.Label>Total Charges</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Total Charges"
                value={totalCharges}
                onChange={(e) => setTotalCharges(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="payment_reference">
              <Form.Label>Payment Reference</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Payment Reference"
                value={paymentReference}
                onChange={(e) => setPaymentReference(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <br />
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
