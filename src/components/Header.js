import React, { useEffect, useState } from "react";
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import logo from "../assets/logo.png";
import { logout } from "../redux/user/actions";

export default function Header() {
  const [navAvatar, setNavAvatar] = useState(false);

  const login = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const { userInfo } = login || {};
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      setNavAvatar(true);
    }
  }, [setNavAvatar, userInfo]);
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout);
    navigate("/login");
    setNavAvatar(false);
  };
  return (
    <div
      style={{
        display: navAvatar ? "flex" : "",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="bg-slate-100 shadow-md"
        style={{
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
          <Link to="/">
            <Image
              className="h-10"
              src={logo}
              alt="cloud msg"
              style={{ width: "200px", height: "150px" }}
            />
          </Link>
        </div>
      </div>
      {navAvatar && (
        <div style={{ paddingRight: "25px" }}>
          <Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" style={{ marginRight: "20px" }}>
                  Home
                </Nav.Link>
                <Nav.Link href="/automessage" style={{ marginRight: "20px" }}>
                  Message Sent
                </Nav.Link>
                <Nav.Link href="/preview" style={{ marginRight: "20px" }}>
                  Customer Note
                </Nav.Link>
                <Nav.Link href="/users" style={{ marginRight: "20px" }}>
                  Users
                </Nav.Link>
                <Nav.Link href="/consumer" style={{ marginRight: "20px" }}>
                  Consumer Site Preview
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <NavDropdown
              title={
                <div className="mx-3">
                  <img
                    className="thumbnail-image"
                    src={avatar}
                    alt="user pic"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  Admin
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                <i className="fa fa-sign-out"></i> Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar>
        </div>
      )}
    </div>
  );
}
