import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { TrendingUp } from 'lucide-react';

const NavigationBar = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <TrendingUp className="me-2" size={28} color="#387ed1" />
          <span className="fw-bold fs-4" style={{ color: '#387ed1' }}>Zerodha</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="https://zerodhadashboard-afgd.onrender.com" className="me-3 fw-medium">DashBoard</Nav.Link>
            <Nav.Link href="#about" className="me-3 fw-medium">About</Nav.Link>
            <Nav.Link href="#products" className="me-3 fw-medium">Products</Nav.Link>
            <Nav.Link href="#pricing" className="me-3 fw-medium">Pricing</Nav.Link>
            <Nav.Link href="#support" className="me-3 fw-medium">Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;