import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';
const Order = () => {
    const { service } = useParams();
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [allService, setAllService] = useState([]);
    const {register, handleSubmit , errors } = useForm();
    const [details, setDetails] = useState({
        email: loggedInUser.email,
        displayName: loggedInUser.displayName,
        service: service,
        summary: '',
        price: '',
        image: '',
        status: 'pending'
    })
    const handleBlur = (e) => {
        const newDetails = { ...details };
        newDetails[e.target.name] = e.target.value;
        setDetails(newDetails)

    }
    useEffect(() => {
        fetch('https://nameless-shelf-03440.herokuapp.com/allService', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                setAllService(data);

            })
    }, [])
    //   gettingServiceName
    const addedService = allService.find(all => service === all.service);
    if (addedService !== undefined) {
        details.summary = addedService.summary;
        details.image = addedService.image;
    }





    const onSubmit = () => {


        fetch('https://nameless-shelf-03440.herokuapp.com/userAddedService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })

            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        alert("Order Placed Successfully");
        history.push(`/dashboard/service-list/${details.email}`)

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
                                            details.email ?
                                                <input type="text" name="email" placeholder={`${details.email}`}  className="contact-input form-control" readOnly />
                                                :
                                                <input type="text" name="email" onBlur={handleBlur} placeholder="Your email adress" className="contact-input form-control" ref={register({ required: true })} />
                                        }
                                         {errors.email && <span className="error text-danger">Field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        {
                                            details.displayName ?
                                                <input type="text" name="displayName" placeholder={`${details.displayName}`} className="contact-input form-control" />
                                                :
                                                <input type="text" name="displayName" onBlur={handleBlur} placeholder="Your name/ Company's name" className="contact-input form-control" ref={register({ required: true })} />
                                        }
                                        {errors.displayName && <span className="error text-danger">Field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        {
                                            details.service ?
                                                <input type="text" name="service" value={`${details.service}`} placeholder={`${details.service}`} className="contact-input form-control" readOnly />
                                                :
                                                <input type="text" name="service" ref={register({ required: true })} onBlur={handleBlur} placeholder="Service" className="contact-input form-control" />
                                        }
                                         {errors.service && <span className="error text-danger">Field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        {
                                            addedService !== undefined ?
                                                <textarea type="text" name="summary"  value={`${addedService.summary}`} placeholder={`${addedService.summary}`} style={{ height: '100px' }} className=" form-control" readOnly></textarea>
                                                :
                                                <input type="text" name="summary" ref={register({ required: true })} onBlur={handleBlur} placeholder="Project Details" className="contact-input form-control" />
                                        }
                                         {errors.summary && <span className="error text-danger">Field is required</span>}
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="text" onBlur={handleBlur} name="price" ref={register({ required: true })} placeholder="Price" className="contact-input form-control" />
                                                {errors.price && <span className="error text-danger">Field is required</span>}
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <button className="dashboard-btn w-100" >
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