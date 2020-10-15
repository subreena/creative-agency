import React from 'react';
import NavBar from '../NavBar/NavBar';
import headerImg from '../../../images/logos/Frame.png';
import './Header.css';

const Header = () => {
    return (
       <section className="header" id="home">         
           <NavBar></NavBar>
           <div className="container header-content">
               <div className="row">
                   <div className="col-md-6 d-flex align-items-center">
                      <div>
                      <h1 className="header-title">
                       Let’s Grow Your 
                       <br/>
                       Brand To The
                       <br/>
                        Next Level
                       </h1>
                       <p className="blue-text header-text">
                       Lorem ipsum dolor sit amet, consectetur  
                       <br/>
                        adipiscing elit. Purus commodo ipsum duis 
                         <br/>
                         laoreet maecenas. Feugiat
                       </p>
                       <button className="blueBtn">
                           Hire Us
                       </button>
                      </div>
                   </div>
                   <div className="col-md-6">
<div>
    <img src={headerImg} alt="" className="img-fluid w-100"  />
</div>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Header;