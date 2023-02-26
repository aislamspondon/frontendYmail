import React from "react";
import classes from "../Styles/CustomerPage.module.css";

import avatarpng from "../assets/avatarpreview.png";
export default function SideHeader() {
  return (
    <div className={classes.sideHeader}>
      <p
        style={{
          color: "#0A0B0D",
          fontSize: " 20px",
          fontWeight: "600",
          fontFamily: "'Gloock', serif",
          padding: "20px",
        }}
        className={classes.assets}
      >
        My assets
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        className={classes.headerasset}
      >
        <button
          style={{
            background: "#014CEC",
            color: "#fffff",
            width: "185px",
            height: "42px",
            borderRadius: "25px",
            margin: "0px 20px",
            cursor: "pointer",
          }}
          className={classes.assetsButton}
        >
          Send & Receive
        </button>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#CCCCCC",
            textAlign: "center",
            paddingTop: "6px",
            margin: "0px 20px",
            cursor: "pointer",
          }}
        >
          <i class="fa-regular fa-bell"></i>
        </div>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#CCCCCC",
            textAlign: "center",
            position: "relative",
            padding: "9px 0px 0px 4px",
            margin: "0px 20px",
            cursor: "pointer",
          }}
        >
          <i class="fas fa-braille"></i>
        </div>
        <div
          style={{ width: "2px", height: "40px", background: "#CCCCCC" }}
        ></div>
        <div
          style={{
            width: "40px",
            height: "40px",
            background: "#ffffff",
            borderRadius: "50%",
            textAlign: "center",
            cursor: "pointer",
            margin: "0px 20px",
          }}
        >
          <img
            src={avatarpng}
            alt="people"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>
    </div>
  );
}
