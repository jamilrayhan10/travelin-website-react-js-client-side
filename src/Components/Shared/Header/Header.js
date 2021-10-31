import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  // user
  const { user, logout } = useAuth();
  // change header state
  const [sticky, setSticky] = useState(false);

  const handleStickyHeader = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // window scroll function
  window.addEventListener("scroll", handleStickyHeader);
  return (
    <>
      <div
        className={
          sticky ? "navBar_sticky navBar_container" : "navBar_container"
        }
      >
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <NavLink className="logo fs-1 text-danger fw-bold" to="/home">
              <span className="text-info">Tra</span>vel.
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto nav_menu">
                <NavLink className="nav_link" to="/home">
                  Home
                </NavLink>
                <NavLink className="nav_link" to="/blogs">
                  Blogs
                </NavLink>
                <NavLink className="nav_link" to="/contact">
                  Contact
                </NavLink>
              </Nav>
              {user.email ? (
                <div className="user_name">
                  <NavLink className="nav_link" to="/addService">
                    Add Service
                  </NavLink>
                  <Link className="text-capitalize   myorders" to="/myorders">
                    My Order
                  </Link>
                  <Link
                    className="text-capitalize   myallorders "
                    to="/myallorders"
                  >
                    Manege All Orders
                  </Link>
                  <span>Hi! {user.displayName} </span>
                  <Link to="/">
                    <button onClick={logout} className="regular_btn">
                      Logout
                    </button>
                  </Link>
                </div>
              ) : (
                <Link to="/login">
                  <button className="regular_btn">Login</button>
                </Link>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
