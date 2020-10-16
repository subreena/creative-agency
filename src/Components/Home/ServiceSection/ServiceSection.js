import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import {Ripple} from 'react-preloaders'
import './ServiceSection.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ServiceSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://nameless-shelf-03440.herokuapp.com/allService')
            .then(response => response.json())
            .then(data => {
                setServices(data);
            })
    }, [])

  
      const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  
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
                                    
                                
                                <animated.div
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: props.xys.interpolate(trans) }}
                               >
                                    <div                       
                                    className="d-flex justify-content-center"  >


                                        {service.image !== undefined?
                                            <img src={`data:image/png;base64,${service.image.img}`} style={props} className="w-25 img-fluid rounded-circle" alt="" />
                                            : <img src={service.icon}  style={props} className="w-25 img-fluid rounded-circle" alt="" />
                                        }

                                    </div>
                                    <h4 className="service-card-title my-3">
                                        {service.service} 
                                    </h4>
                                    <p className="service-card-text text-center">
                                        {service.summary}  
                                    </p>
                                </animated.div>
                                </div>
                            </Link>
                            
                        </div>)
                    }
                </div>
                
                <Ripple color="#111430" />
            </section>
        );
    };

    export default ServiceSection;