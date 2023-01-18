import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <div>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Useful Links</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="resource-list">Resources</Nav.Link>
            <Nav.Link href="add-resource">Add new resources</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
  )
}

export default Navigation