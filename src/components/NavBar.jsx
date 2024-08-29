import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">TheWhiskey</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#products">Productos</Nav.Link>
        <Nav.Link href="#contact">Contacto</Nav.Link>
        <Nav.Link href="#cart">Carrito</Nav.Link>
      </Nav>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;