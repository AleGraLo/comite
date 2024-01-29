import React, {useState} from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="lg" fixed="top" expanded={expanded}>
      <LinkContainer to="/">
        <Navbar.Brand onClick={() => setExpanded(false)}>Comite Bidafarma Málaga</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/noticias" onClick={() => setExpanded(false)}>
            <Nav.Link>Noticias</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/documentacion" onClick={() => setExpanded(false)}>
            <Nav.Link>Documentación</Nav.Link>
          </LinkContainer>
          {/* Más enlaces aquí */}
          <LinkContainer to="/sobre-nosotros" onClick={() => setExpanded(false)}>
            <Nav.Link>Sobre Nosotros</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent
