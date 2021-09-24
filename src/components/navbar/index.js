import React from 'react';
import { 
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../navbar/index.css'

const Navigationbar = () => {
    return (
        <Navbar sticky="top" bg="light" expand="lg" >
        <Container>
          <Navbar.Brand href="/">Tokyo Express</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/story">Our Story</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};
export default Navigationbar;