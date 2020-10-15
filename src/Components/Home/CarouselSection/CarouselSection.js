import React from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components'
import './CarouselSection.css';
import img1 from '../../../images/carousel-1.png';
import img2 from '../../../images/carousel-2.png';
import img3 from '../../../images/carousel-3.png';
import img4 from '../../../images/carousel-4.png';
import img5 from '../../../images/carousel-5.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 3 },
  
  ];
const CarouselSection = () => {
    return (
        <div className="carousel-section">
            <h2 className="carousel-title">
            Here are some of <span className="green-text">our works</span>
            </h2>
            <Carousel breakPoints={breakPoints}>
               <img src={img1} alt="" style={{width: '90%', height: '330px', borderRadius:'10px', marginRight: '15px'}}  />
               <img src={img2} alt="" style={{width: '90%', height: '330px', borderRadius:'10px', marginRight: '15px'}}  />
               <img src={img3} alt="" style={{width: '90%', height: '330px', borderRadius:'10px', marginRight: '15px'}}  />
               <img src={img4} alt="" style={{width: '90%', height: '330px', borderRadius:'10px', marginRight: '15px'}}  />
               <img src={img5} alt="" style={{width: '90%', height: '330px', borderRadius:'10px', marginRight: '15px'}}  />
            </Carousel>
        </div>
    );
};

export default CarouselSection;