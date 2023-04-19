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
    }, 700);
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
            <Nav.Link href="/" className='nav_font home_one'>Home</Nav.Link>
            <NavDropdown title="Submit a Ticket's" id="collasible-nav-dropdown" className='nav_font dropmain'>
              <NavDropdown.Item href="/form" className='drophover'>System Issue</NavDropdown.Item>
              <NavDropdown.Item href="/formTimeChamp" className='drophover'>TimeChamp Issue</NavDropdown.Item>
              <NavDropdown.Item href="/formHr" className='drophover'>HR Issue</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
