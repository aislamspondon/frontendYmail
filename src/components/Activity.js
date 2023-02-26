import React from "react";

export default function Activity({ color, time, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "20px 0px" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: color,
        }}
      ></div>
      <div style={{ margin: "0px 30px" }}>
        <p style={{ fontSize: "12px", lineHeight: "16px" }}>{time}</p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
