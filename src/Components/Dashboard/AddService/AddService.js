import React from 'react';
import SideBar from '../SideBar/SideBar';
import '../Dashboard.css';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [file, setFile] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const history = useHistory();
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('service', data.service);
        formData.append('summary', data.summary);

        fetch('https://nameless-shelf-03440.herokuapp.com/allService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        alert("Service Added Successfully");
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
            <header className="dashboard-header d-flex justify-content-between">
                <h2>Add Service</h2>
    <h2>{loggedInUser.displayName}</h2>
            </header>
            <div className="dashboard-content">
                <div className="container-fluid">
                    <div className="add-section">
                    <form onSubmit={handleSubmit(onSubmit)} >
                
               <div className="row">
               <div className="col-6">
                    <div className="form-group">
                    <label className="font-weight-bold">Service Title</label><br/>
                <input name="service" className="form-control contact-input" ref={register({ required: true })} placeholder="Enter title" />
                {errors.service && <span className="error">Service Title is required</span>}
                    </div>
                </div>

               <div className="col-6">
                   <div className="form-group">
                   <label className="font-weight-bold">Icon</label><br/>
                <input onChange={handleFileChange} type="file" name="file" className="form-control contact-input" ref={register({ required: true })} placeholder="Upload Image" />
                {errors.file && <span className="error">Service Title is required</span>}
                
                   </div>
               </div>
               </div>

               <div className="col-12 col-md-6">
               <div className="form-group">
                <label className="font-weight-bold mt-2">Description</label>
                <textarea name="summary" type="text" rows="3" className="form-control" style={{height: '120px'}} ref={register({ required: true })} placeholder="Project Details" ></textarea>
                {errors.summary && <span className="error">Project Details is required</span>}
                </div>
               </div>

                <div className="d-flex justify-content-end">
                <button className="btn btn-success pl-5 pr-5 mt-5 d-block" type="submit">Send</button>
                </div>
            </form>
                    </div>
                   
                </div>
            </div>
        </section>
               </div>
           </div>
       </div>
    );
};

export default AddService;