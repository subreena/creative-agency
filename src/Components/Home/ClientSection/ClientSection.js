import React, { useEffect, useState } from 'react';
import ClientCard from './ClientCard';
import ClientData from './ClientData';
import './ClientSection.css'
const ClientSection = () => {
    const [clients , setClients] = useState([]);
    useEffect(() => {
        fetch('https://nameless-shelf-03440.herokuapp.com/allReview' , {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}})
        .then(response => response.json())
        .then(data => {
            setClients(data);
        })
    },[])
    return (
        // CSS IN ServiceSection.css
        <section className="container service-section">     
            <h2 className="service-heading my-5">
                Clients <span className="green-text">Feedback</span>
            </h2>
            <div className="row mt-5">
                {
                    clients.map((client) => <ClientCard client={client} key={client.id}></ClientCard>)
                }
            </div>
        </section>
    );
};

export default ClientSection;