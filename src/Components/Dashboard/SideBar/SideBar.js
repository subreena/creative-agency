import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logos/logo.png';
import './SideBar.css';
import { UserContext } from '../../../App';


const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        fetch('https://nameless-shelf-03440.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => {
                setAdmin(data);
            })
    }, [])
    return (
        <div className="sidebar">

            <Navbar bg="none" expand="lg" className="blue-text">
                <div className="d-lg-flex flex-lg-column flex-sm-row">
                    <Link to="/"><Navbar.Brand href="/">
                        <img src={logo} alt="" className="img-fluid" style={{ width: "150px", height: "47px", marginBottom: '20px' }} />
                    </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-lg-flex flex-lg-column ml-auto">
                            {/* if admin */}
                            {admin ? 
                                (
                                    <>
                                        <Link to="/dashboard/service-list">
                                            <Nav.Link href="/dashboard" className="mr-2 font-weight-bold blue-text sidebar-link" >
                                                <i class="fa fa-shopping-bag mr-1" aria-hidden="true"></i> Service List
                             </Nav.Link>
                                        </Link>
                                        <Link to="/dashboard/add-service">
                                            <Nav.Link href="/dashboard/add-service" className="mr-2 font-weight-bold blue-text sidebar-link" >
                                                <i class="fa fa-plus mr-1" aria-hidden="true"></i> Add Service
                              </Nav.Link>
                                        </Link>
                                        <Link to="/dashboard/add-admin">
                                            <Nav.Link href="/dashboard/add-admin" className="mr-2 font-weight-bold blue-text sidebar-link" >
                                                <i class="fa fa-user-plus mr-1" aria-hidden="true"></i> Add admin
                             </Nav.Link>
                                        </Link>
                                    </>
                                )
                                // if not admin
                                :
                                (
                                    <>
                                        <Link to="/dashboard/service-list">
                                            <Nav.Link href="/dashboard" className="mr-2 font-weight-bold blue-text sidebar-link" >
                                                <i class="fa fa-shopping-bag mr-1" aria-hidden="true"></i> Service List
                        </Nav.Link>
                                        </Link>
                        <Link to="/dashboard/order">
                        <Nav.Link href="/dashboard/order" className="mr-2 font-weight-bold blue-text sidebar-link active" >
                                                <i class="fa fa-cart-plus mr-1 active" aria-hidden="true"></i> Order
                        </Nav.Link>
                        </Link>
                                        <Link to="/dashboard/review">
                                            <Nav.Link href="/dashboard/review" className="mr-2 font-weight-bold blue-text sidebar-link" >
                                                <i class="fa fa-commenting mr-1" aria-hidden="true"></i> Review
                        </Nav.Link>
                                        </Link>
                                    </>

                                )
                            }
                        </Nav>
                    </Navbar.Collapse>

                </div>
            </Navbar>

        </div>

    );
};

export default SideBar;