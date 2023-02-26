import React from "react";
import pay from "../assets/visa.png";

export default function TransactionDetails({
  order,
  transaction,
  initial_amount,
  total_charge,
  payment_ref,
  name,
  email,
  phone,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "20px 0px",
        border: "1px dotted black",
        width: "400px",
        padding: "20px 10px",
        borderRadius: "12px",
      }}
    >
      <div style={{ margin: "0px 30px" }}>
        <div
          style={{
            fontFamily: "sans-serif",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Payment Method
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Credit Card
          </p>
          <div style={{ display: "flex" }}>
            <img
              src={pay}
              alt="Card"
              style={{ width: "30px", height: "30px" }}
            />
            <p>**** **** **** 2457</p>
          </div>
        </div>

        <div
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            justifyContent: "space-between",
            width: "300px",
          }}
        >
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Name</p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {name}
          </p>
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Email</p>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>{email}</p>
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Phone</p>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>{phone}</p>
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Order</p>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>{order}</p>
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Transaction</p>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>{transaction}</p>
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Initial Amount</p>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
            {initial_amount}
          </p>
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Total Charge</p>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>{total_charge}</p>
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>Payment Ref. </p>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>{payment_ref}</p>
        </div>
      </div>
    </div>
  );
}
