import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import classes from "../../Styles/Success.module.css";

export default function SuccessPage() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  return (
    <div className={classes.container}>
      <h1>Success! Your All Payment Receipt Send Perfectly.</h1>

      <p>Thank you for For using it.</p>
      <Link
        to="/"
        style={{
          padding: "10px 20px",
          background: "green",
          textDecoration: "none",
          color: "white",
        }}
      >
        Return to Homepage
      </Link>
    </div>
  );
}
