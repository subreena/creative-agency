import React from 'react';
import '../../../App.css'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const NavBar = () => {
  return (
    <Navbar bg="none" expand="lg" className="blue-text">
      <div className="container">
        <Link to="/"><Navbar.Brand href="/">

          <img src={logo} alt="" className="img-fluid" style={{ width: "150px", height: "47px" }} />

        </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex align-items-center blue-text">
            <Nav.Link href="/" className="mr-2 font-weight-bold blue-text" >Home</Nav.Link>
            <Nav.Link href="#portfolio" className="mr-2 font-weight-bold blue-text" >Our Portfolio</Nav.Link>
            <Nav.Link href="#team" className="mr-2 font-weight-bold blue-text" >Our Team</Nav.Link>
            <Nav.Link href="#contact" className="mr-2 font-weight-bold blue-text" >Contact Us</Nav.Link>
           <Link to="/dashboard/service-list">
           <Nav.Link href="/dashboard/service-list" className="mr-2 font-weight-bold blue-text" >Dashboard</Nav.Link>
           </Link>
            <Link to="/login"><Nav.Link href="#login" className="mr-2 font-weight-bold blue-text">
              <button className="blueBtn">
                Login
                </button>
            </Nav.Link> </Link>
          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
  );
};

export default NavBar;