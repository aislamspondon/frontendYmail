import React from "react";
import classes from "../Styles/CustomerPage.module.css";

export default function CoinButton({ buttonName, icon }) {
  return (
    <button className={classes.coinbutton}>
      <div style={{ color: "#0A0B0D", fontSize: "20px" }}>{icon}</div>
      <p
        style={{
          fontSize: "20px",
          color: "#0A0B0D",
          lineHeight: "24px",
          fontWeight: "bold",
          margin: "10px",
        }}
      >
        {buttonName}
      </p>
    </button>
  );
}
