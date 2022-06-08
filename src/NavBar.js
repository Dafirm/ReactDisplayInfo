import React from 'react';
import { Navbar,  Nav, Container } from "react-bootstrap"


const NavBar = () => {
  return (
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand className = "nav" href="/">Client Data Network</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className = "nav1" href="/">Home</Nav.Link>
        <Nav.Link className = "nav2" href="/contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavBar;
