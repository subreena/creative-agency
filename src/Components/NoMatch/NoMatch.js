import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';

const NoMatch = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="d-flex align-items-center justify-content-center text-danger" style={{ height: '80vh' }}>
                <h3>
                    Page not found.
                <Link to="/">Return to home?</Link>
                </h3>
            </div>
            <Footer></Footer>
        </>
    );
};

export default NoMatch;