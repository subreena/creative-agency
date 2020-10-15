import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import '../Dashboard.css';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({email: ''});

    const handleBlur = e => {
        const newAdmin = { ...admin }
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }
    const handleSubmit = e => {
        const addAdmin = {...admin}
        fetch('https://nameless-shelf-03440.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addAdmin)
        })
        alert('admin added')
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
                            <h2>Add Admin</h2>
                        </header>
                        <div className="dashboard-content">
                            <div className="container-fluid">
                                <div className="add-section">
                                    <form action="" className="form-inline" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label for="email" class="sr-only" >Email</label>
                                            <input type="email" class="form-control mr-3" name="email" id="email" placeholder="test@test.com" onBlur={handleBlur} />
                                        </div>
                                        <button type="submit" className="btn btn-success">Submit</button>
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

export default AddAdmin;