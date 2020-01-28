import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const navbar = () => {
  return (
    <Navbar bg="light bg-transparent" expand="lg">
      <Navbar.Brand href="/">Pawmate</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Pawmate</Nav.Link>
          {/* <Nav.Link href="/animals">Find a Friend</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;