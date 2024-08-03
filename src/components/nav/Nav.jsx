import React, { useContext, useState } from "react";
import "./Nav.css";

import { ToastContainer, toast } from "react-toastify";

import Container from "react-bootstrap/Container";
import Account from "../account/Account";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import { useCookies } from "react-cookie";

function NavBar({ design }) {
  const [modalShow, setModalShow] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logoOut = () => {
    removeCookie("user", { path: "/" });
    dispatch({ type: "logout" });
    toast.info("You have been logged out successfully");
  };

  return (
    <>
      <Account setModalShow={setModalShow} modalShow={modalShow} />
      <Navbar expand={false}>
        <div className="wrapper">
          <div className="item flex">
            <Link className="flex" to="/cart">
              <span>
                سلة
                <br /> المشتريات
              </span>
              <div className="img-wrapper flex">
                <img src="cart.svg" alt="" />
              </div>
            </Link>
          </div>
          <div className="item flex ">
            {!user ? (
              <>
                <span>
                  مرحبا بك <br /> تسجيل دخول
                </span>
                <div
                  className="img-wrapper flex"
                  onClick={() => setModalShow(true)}
                >
                  <img src="user.svg" alt="" />
                </div>
              </>
            ) : (
              <>
                <span>تسجيل خروج</span>
                <div className="img-wrapper flex" onClick={logoOut}>
                  <img src="user.svg" alt="" />
                </div>
              </>
            )}
          </div>
          <div className="item search flex">
            <img src="search.svg" alt="" />
            <input type="text" placeholder="ابحث عما تريد" dir="rtl" />
          </div>
          <div className="item flex">
            <img className="logo" src="logo.png" alt="" />
          </div>
        </div>
        <Container style={{ width: "auto" }}>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            className={design && "design"}
          >
            <Offcanvas.Header closeButton>
              <img className="logo" src="logo.png" alt="" />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="flex" to="/design">
                  Design
                </Link>
                <NavDropdown
                  title="Dropdown"
                  id="offcanvasNavbarDropdown-expand-lg"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4"></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Dropdown"
                  id="offcanvasNavbarDropdown-expand-lg"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4"></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="item search flex" style={{ marginTop: "25px" }}>
                  <img src="search.svg" alt="" />
                  <input
                    type="text"
                    placeholder="Pangitaa ang imong gusto"
                    dir="rtl"
                  />
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
