import React from 'react';
import googleImg from '../../../images/logos/google.png';
import netflixImg from '../../../images/logos/netflix.png';
import slackImg from '../../../images/logos/slack.png';
import uberImg from '../../../images/logos/uber.png';
import airImg from '../../../images/logos/airbnb.png';
import './BrandImg.css';
const BrandImg = () => {
    return (
        <section className="container brand-img-section">
            <div className="row d-flex justify-content-around align-items-center">
            <div className="col-6 col-sm-4 col-md-2">
                <img src={slackImg} alt="" className="brand-img img-fluid w-100"/>
                </div>
            <div className="col-6 col-sm-4 col-md-2">
            <img src={uberImg} alt="" className="brand-img img-fluid w-100"/>
            </div>
            <div className="col-6 col-sm-4 col-md-2">
            <img src={googleImg} alt="" className="brand-img img-fluid w-100"/>
            </div>
            <div className="col-6 col-sm-4 col-md-2">
            <img src={netflixImg} alt="" className="brand-img img-fluid w-100"/>
            </div>
            <div className="col-6 col-sm-4 col-md-2">
            <img src={airImg} alt="" className="brand-img img-fluid w-100"/>
            </div>
            </div>
        </section>
    );
};

export default BrandImg;