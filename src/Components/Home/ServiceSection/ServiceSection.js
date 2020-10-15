import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import './ServiceSection.css'

const ServiceSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://nameless-shelf-03440.herokuapp.com/allService')
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    

        return (
            <section className="container service-section">
                <h2 className="service-heading my-5">
                    Provide Awesome <span className="green-text">Services</span>
                </h2>
                <div className="row mt-5">
                    {
                        services.map((service) => <div className="col-6 col-md-4" >
                            <Link to={`/dashboard/order/${service.service}`}  class="no-underline">
                                <div className="service-card">
                                    <div className="d-flex justify-content-center">


                                        {service.image !== undefined?
                                            <img src={`data:image/png;base64,${service.image.img}`} className="w-25 img-fluid rounded-circle" alt="" />
                                            : <img src={service.icon} className="w-25 img-fluid rounded-circle" alt="" />
                                        }

                                    </div>
                                    <h4 className="service-card-title my-3">
                                        {service.service} 
                                    </h4>
                                    <p className="service-card-text text-center">
                                        {service.summary}  
                                    </p>
                                </div>
                            </Link>
                        </div>)
                    }
                </div>
            </section>
        );
    };

    export default ServiceSection;