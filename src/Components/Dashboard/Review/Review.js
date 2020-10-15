import React, { useContext, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import '../Dashboard.css';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Review = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext)
   const { register, handleSubmit, watch, errors } = useForm();
   const history = useHistory();
    const [review , setReview] = useState({
        name: loggedInUser.displayName,
        img: loggedInUser.photoURL,
        description: '',
        message: ''
    })
    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    const onSubmit = () => {
        fetch('https://nameless-shelf-03440.herokuapp.com/allReview' , {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(review)
        })
        console.log(review)
        history.push(`/`);
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
            <h2>Add Review</h2>
        </header>
        <div className="dashboard-content">
                <div className="col-md-6">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                           {
                               loggedInUser.displayName?
                               <input type="text" placeholder={`${loggedInUser.displayName}`} className="contact-input form-control" />
                               :
                               <input type="text" placeholder="Name" className="contact-input form-control" />
                           }
                        </div>
                        <div className="form-group">
                            <input type="text"onBlur={handleBlur} placeholder="Company's name , Designation" name="description" className="contact-input form-control" />
                        </div>
                       <div className="form-group">
                       <textarea onBlur={handleBlur} className="form-control" name="message" placeholder="Enter Description" style={{ height: '150px' }}></textarea>
                       </div>
                        <div className="form-group">
                            <button className="blueBtn">Submit</button>
                        </div>
                    </form>
                  
                </div>
            </div>

                </section>
               </div>
           </div>
       </div>
    );
};

export default Review;