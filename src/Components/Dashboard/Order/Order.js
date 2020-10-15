import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';
const Order = () => {
    const { service } = useParams();
    const history = useHistory();
    const[loggedInUser , setLoggedInUser] = useContext(UserContext)
    const [allService , setAllService] = useState([]);
    const { register, handleSubmit, watch, errors } = useForm();
    const [price, setprice] = useState({ price: '' , status: 'pending'})
    const handleBlur = (e) =>{
        const newPrice = { ...price };
        newPrice[e.target.name] = e.target.value;
        setprice(newPrice);
    }

  useEffect(() => {
    fetch('https://nameless-shelf-03440.herokuapp.com/allService' , {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
        setAllService(data);
      
    })
  },[])
//   gettingServiceName
const addedService = allService.find(all => service === all.service );

  //   getting project description

    

  
//   ORDER SUBMIT
const onSubmit = (e) => {  
    const data ={...addedService , ...loggedInUser , ...price}
    console.log(data);
    fetch('https://nameless-shelf-03440.herokuapp.com/userAddedService' , {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
    })
    
    history.push(`/dashboard/service-list/${loggedInUser.email}`)

}
    return (
     <div className="container-fluid">
         <div className="row">
         <div className="col-md-2">
             <SideBar></SideBar>
         </div>
         <div className="col-md-10">
         <section>
            <header className="dashboard-header">
                <h2>Orders</h2>
            </header>
            <div className="dashboard-content">
                <div className="col-md-6">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group" >
                           {
                               loggedInUser.email ?
                               <input type="text" placeholder={`${loggedInUser.email}`} className="contact-input form-control" />
                               :
                               <input type="text" placeholder="Your email adress" className="contact-input form-control" />
                           }

                        </div>
                        <div className="form-group">
                            {
                                loggedInUser.displayName ?
                                <input type="text" placeholder={`${loggedInUser.displayName}`} className="contact-input form-control" />
                               :
                               <input type="text" placeholder="Your name/ Company's name" className="contact-input form-control" />
                            }
                        </div>
                        <div className="form-group">
                            {
                                service ?
                                <input type="text" placeholder={`${service}`} className="contact-input form-control" />
                                :
                                <input type="text" placeholder="Service" className="contact-input form-control" />
                            }
                        </div>
                        <div className="form-group">
                           {
                               addedService !== undefined ?
                               <textarea type="text" placeholder={`${addedService.summary}`} style={{height: '100px'}} className=" form-control"></textarea>
                               :
                               <input type="text" placeholder="Project Details" className="contact-input form-control" />
                           }
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <input type="text" onBlur={handleBlur} name="price" placeholder="Price" className="contact-input form-control" />
                                </div>
                            </div>
                            <div className="col-6">
                                <button className="dashboard-btn w-100">
                                    <i class="fa fa-upload" aria-hidden="true"></i> Upload Project File
                                    </button>
                            </div>
                        </div>
                        <button className="blueBtn" >Send</button>
                    </form>
                    
                </div>
            </div>
        

        </section>
         </div>
     </div>
     </div>
    );
};

export default Order;