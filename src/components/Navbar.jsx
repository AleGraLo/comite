import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <LinkContainer to="/">
        <Navbar.Brand>Comite Bidafarma Málaga</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/noticias">
            <Nav.Link>Noticias</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/documentacion">
            <Nav.Link>Documentación</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/sobre-nosotros">
            <Nav.Link>Sobre Nosotros</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

