import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ClientServiceList = () => {
    const { email } = useParams();
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        fetch(`https://nameless-shelf-03440.herokuapp.com/userAddedService/` + email)
            .then(response => response.json())
            .then(data => {
                setServicesList(data);
            })
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        servicesList.map(service =>
                            <div className="col-md-6" key={service._id}>
                                <div style={{ borderRadius: 20 }} className="p-3 bg-white m-2">
                                    <div className="d-flex">
                                        <div>
                                            {service.image !== undefined ?
                                                <img src={`data:image/png;base64,${service.image.img}`} className="w-25 img-fluid rounded-circle" alt="" />
                                                : <img src={service.icon} className="w-25 img-fluid rounded-circle" alt="" />
                                            }
                                        </div>
                                        <button className={service.status === "Pending" ? "btn btn-danger ml-auto" : service.status === "On going" ? "btn btn-warning ml-auto" : "btn btn-success ml-auto"}>{service.status}</button>
                                    </div>
                                    <div className="mt-3">
                                        <h5>{service.service}</h5>
                                        <p className="text-muted">{service.summary}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
          
        </>

    );
};

export default ClientServiceList;