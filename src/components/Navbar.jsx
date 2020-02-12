import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from '../images/pawmate_logo.svg'

const NavigationBar = () => {

  return (
    <Navbar
      bg="light bg-transparent"
      className="d-flex justify-content-around"
      expand="lg"
    >
      <Navbar.Brand href="/">
        <img src={logo} style={{ width: 200 }} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/about">About</Nav.Link>
          {/* <Nav.Link href="/animals">Find a Friend</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
