import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import fetchPreviewList from "../../redux/thunk/fetchPreviewList";
import Error from "../Error";
import Loading from "../Loading";
import PreviewList from "../PreviewList";
import Success from "../Success";

export default function CustomerPreview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteId, setDeleteId] = useState(0);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const listPreview = useSelector((state) => state.listPreview);
  const { loading, isError, preview, success } = listPreview;
  let content = null;
  const handleChildClick = (id) => {
    setDeleteId(id);
  };
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    dispatch(fetchPreviewList);
  }, [navigate, userInfo, dispatch]);
  if (loading) content = <Loading />;
  if (!loading && isError) content = <Error message="There is an error" />;
  if (!loading && !isError && success && preview?.length === 0)
    content = <Success message="No Data" />;
  if (!loading && !isError && success && preview?.length > 0) {
    let previews = preview?.filter((item) => item.id !== deleteId);
    content = previews?.map((e) => (
      <PreviewList key={e.id} preview={e} onChildClick={handleChildClick} />
    ));
  }
  return (
    <div>
      <Row
        style={{
          direction: "flex",
          alignItems: "center",
        }}
      >
        <Col sm={12} md={6} lg={6} xl={6}>
          <h1>Customer Preview List</h1>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6}>
          <Link to="/createpreview" style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "22px",
                width: "170px",
                height: "60px",
                borderRadius: "12px",
                background: "#1561bf",
                color: "white",
                justifyContent: "center",
              }}
            >
              <i class="fa-solid fa-plus"></i>
              <p style={{ margin: "5px 3px" }}>Add Order</p>
            </div>
          </Link>
        </Col>
      </Row>

      <br />
      <br />
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
