import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminService from './AdminService';
import ClientServiceList from './ClientServiceList';

const ServiceList = () => {
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
        <section>
            <header className="dashboard-header d-flex justify-content-between">
                <h2>Service List</h2>
                <h4>{loggedInUser.displayName}</h4>
            </header>
            <div className="dashboard-content">
                {
                    admin ?
                        (
                            <>
                                <AdminService></AdminService>
                            </>
                        ) :
                        (
                            <>
                                <ClientServiceList></ClientServiceList>
                            </>
                        )
                }
            </div>
          
        </section>
    );
};

export default ServiceList;