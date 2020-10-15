import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ServiceData from './ServiceData';

const ServiceCard = (props) => {
    const { service, icon, summary ,title, description,image } = props.services;
    console.log(image);
    const history = useHistory();
    const handleService = () => {
        history.push(`/dashboard/order/${service}`)     
        // fetch('https://nameless-shelf-03440.herokuapp.com/userAddedService' , {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //       },
        //       body: JSON.stringify(props.services)
        // }) 
    }
  
    return (
        <div className="col-6 col-md-4" >
            <Link to={`/dashboard/order/${title}${service}`} onClick={handleService} class="no-underline">
            <div className="service-card">
                <div className="d-flex justify-content-center">
                
                                           
                {image !== undefined ?
                                            <img src={`data:image/png;base64,${image.img}`} className="w-25 img-fluid rounded-circle" alt="" />
                                            :<img src={service.image} className="w-25 img-fluid rounded-circle" alt="" />
                                        }
                                        
                </div>
                <h4 className="service-card-title my-3">
                {service} {title}
                </h4>
                <p className="service-card-text text-center">
                    {summary}  {description}
                </p>
            </div>
            </Link>
        </div>
    );
};

export default ServiceCard;