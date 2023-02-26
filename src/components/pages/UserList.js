import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchConsumerList from "../../redux/thunk/fetchConsumerList";
import CustomerInfo from "../CustomerInfo";
import Error from "../Error";
import Loading from "../Loading";
import Success from "../Success";

export default function UserList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const consumerList = useSelector((state) => state.consumerList);
  const { loading, consumers, success, isError } = consumerList || {};
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    dispatch(fetchConsumerList);
  }, [userInfo, navigate, dispatch]);
  let content = null;
  if (loading) content = <Loading />;
  if (!loading && isError)
    content = <Error message="There is an Error to get User" />;
  if (!loading && !isError && success && consumers?.length === 0)
    content = <Success message="No Data Found" />;
  if (!loading && !isError && success && consumers?.length > 0) {
    content = consumers?.map((consumer, index) => (
      <CustomerInfo
        key={consumer.client_id}
        consumer={consumer}
        index={index + 1}
      />
    ));
  }
  return (
    <div>
      <h1>Customer List</h1>
      <br />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </Table>
    </div>
  );
}
