import React from "react";
import coinlogo from "../../assets/coinbase.png";
import classes from "../../Styles/CustomerPage.module.css";
import AllCoinButton from "../AllCoinButton";
import PortfolioBalance from "../PortfolioBalance";
import Result from "../Result";
import SideHeader from "../SideHeader";

export default function CustomerPage() {
  return (
    <div>
      <div
        style={{
          background: "#F7F9FD",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={classes.logo}>
          <img
            src={coinlogo}
            alt="logo"
            style={{ height: "30px", width: "30px" }}
          />
        </div>
        <SideHeader />
      </div>
      <div
        style={{
          background: "#F7F9FD",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={classes.sideNav}>
          <AllCoinButton />
        </div>
        <div className={classes.sideBody}>
          <div className={classes.mainBody}>
            <PortfolioBalance />
            <div className={classes.myAssets}>
              <h4>My Activity</h4>
              <hr />
              <Result />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
