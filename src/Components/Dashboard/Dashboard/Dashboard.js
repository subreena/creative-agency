import React, { createContext, useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import SideBar from '../SideBar/SideBar';
import ServiceList from '../ServiceList/ServiceList';
import '../Dashboard.css';

const Dashboard = () => {
    return (
        <>
           <div className="container-fluid">
           <div className="row">
           <div className="col-md-2">
           <SideBar></SideBar>
           </div>
                <div className="col-md-10">          
                <ServiceList></ServiceList>
                </div>
           </div>
            <Footer></Footer>
           </div>
        </>
    );
};

export default Dashboard;