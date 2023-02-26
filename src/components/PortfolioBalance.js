import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchAddConsumer from "../redux/thunk/fetchAddConsumer";
import classes from "../Styles/CustomerPage.module.css";

export default function PortfolioBalance() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const reset = () => {
    setName("");
    setAddress("");
    setPhone("");
    setEmail("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAddConsumer(name, phone, email, address));
    reset();
  };
  return (
    <div className={classes.portfolioBalance}>
      <h4>Portfolio Balance</h4>
      <h4>$0.00</h4>
      <div
        style={{
          width: "100%",
          border: "1px dotted black",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ margin: "0px 2px", fontWeight: "bold" }}>
              Get started with Bitcoin
            </p>
            <i class="fab fa-bitcoin" style={{ fontSize: "20px" }}></i>
          </div>
          <p style={{ fontSize: "12px", color: "blue" }}>Learn more</p>
          <div className={classes.inputsection}>
            <div
              style={{
                padding: "2px 15px",
                width: "50%",
                borderRight: "1px dotted black",
              }}
              className={classes.inputform}
            >
              <label style={{ marginBottom: "10px" }}>
                <i class="fas fa-signature"></i>
                <input
                  required
                  style={{
                    margin: "0px 10px",
                    padding: "6px 10px",
                    borderRadius: "12px",
                    border: "none",
                    background: "#F7F9FD",
                    outline: "none",
                  }}
                  type="text"
                  value={name}
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <br />
              <label style={{ marginBottom: "10px" }}>
                <i class="fas fa-envelope"></i>
                <input
                  required
                  style={{
                    margin: "0px 10px",
                    padding: "6px 10px",
                    borderRadius: "12px",
                    border: "none",
                    background: "#F7F9FD",
                    outline: "none",
                  }}
                  type="email"
                  value={email}
                  placeholder="Enter Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <br />
              <label style={{ marginBottom: "10px" }}>
                <i class="fas fa-phone-volume"></i>
                <input
                  required
                  style={{
                    margin: "0px 10px",
                    padding: "6px 10px",
                    borderRadius: "12px",
                    border: "none",
                    background: "#F7F9FD",
                    outline: "none",
                  }}
                  type="text"
                  value={phone}
                  placeholder="Enter Your Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <br />
              <label>
                <i class="fas fa-map-marker-alt"></i>
                <input
                  required
                  style={{
                    margin: "0px 10px",
                    padding: "6px 10px",
                    borderRadius: "12px",
                    border: "none",
                    background: "#F7F9FD",
                    outline: "none",
                  }}
                  type="text"
                  value={address}
                  placeholder="Enter Your Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
              <br />
            </div>
            <div
              style={{
                padding: "2px 15px",
                width: "50%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  margin: "10px auto",
                  textAlign: "center",
                  padding: "10px 0px",
                  border: "1px dotted black",
                  borderRadius: "12px",
                }}
                className={classes.inlineBlock}
              >
                <i class="fas fa-user"></i>
                <p>
                  <span style={{ color: "blue" }}>3,953+</span> Customers bought
                  Bitcoin today
                </p>
              </div>
              <button className={classes.buttonSubmit} onClick={onSubmit}>
                Buy Bitcoin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
