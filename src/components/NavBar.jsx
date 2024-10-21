import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';

const NavBar = ({ cartCount }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">TheWhiskey</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
        <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
          Carrito
          <CartWidget cartCount={cartCount} />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;