import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Obj_logo from "../images/LOGO_OBJ.svg";
import React, { useState, useEffect } from 'react';

function CollapsibleExample() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-dots">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
      // </div>

    );
  }
  return (
    <Navbar collapseOnSelect expand="lg" className='nav_bg' variant="dark">
      <Container>
        <Navbar.Brand href="/" >
          <div className='d-flex brand_logo'>
            <img className='Obw_logo' src={Obj_logo} alt="BigCo Inc. logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/" className='nav_font home_one drophover'><strong>Home</strong></Nav.Link>
            <NavDropdown title="Dashboard" id="collasible-nav-dropdown" className='nav_font dropmain drophover'>
              <NavDropdown.Item href="/login" className='drophover'><strong>IT Admin Login</strong></NavDropdown.Item>
              <NavDropdown.Item href="/loginTC" className='drophover'><strong>Facility Admin Login</strong></NavDropdown.Item>
              <NavDropdown.Item href="/loginHR" className='drophover '><strong>HR Admin Login</strong></NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
