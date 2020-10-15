import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Dropdown, Table } from 'react-bootstrap';
const AdminService = () => {
    const [adminService, setAdminService] = useState([])
    const [status, setStatus] = useState("Pending");
    const handleStatus = (status, id) => {
      
        setStatus(status);
        fetch(`https://nameless-shelf-03440.herokuapp.com/updateOrders`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status, id})
        })
        .then(res => res.json())
        .then(data => {
            // const selectedOrder = data.find(order => id===order._id);
            // console.log(selectedOrder);
            console.log("updated");
        })
        alert("Status updated successfully.");
       
    }

    useEffect(() => {
        fetch('https://nameless-shelf-03440.herokuapp.com/userAddedService', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(response => response.json())
            .then(data => {
                setAdminService(data);
                // console.log(data);
            })
    }, [])
    return (
        <div style={{ borderRadius: 20 }} className="dashboard-content bg-white">
             <Table responsive size="sm">
                <thead style={{ backgroundColor: "#F4F7FC" }}>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Service</th>
                        <th>Project Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        adminService.map(service => <tr service={service}>
                            <td>{service.displayName}</td>
                            <td>{service.email}</td>
                            <td>{service.service}</td>
                            <td>{service.summary}</td>
                            <td>
                            <Dropdown as={ButtonGroup}>
                                        <Button variant="" className={service.status==="Pending"? "text-danger": service.status==="On going"? "text-warning":"text-success"}>{service.status}</Button>

                                        <Dropdown.Toggle split variant="" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="" onClick={() => {handleStatus("Pending", service._id)}}><span to="/login" className="text-danger">Pending</span></Dropdown.Item>
                                            <Dropdown.Item href=""  onClick={() => {handleStatus("On going", service._id)}}><span to="/login" className="text-warning">On going</span></Dropdown.Item>
                                            <Dropdown.Item href=""  onClick={() => {handleStatus("Done", service._id)}}><span to="/login" className="text-success">Done</span></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                            </td>
                        </tr>)
                    }

                </tbody>
        </Table>
        </div>
    );
};

export default AdminService;