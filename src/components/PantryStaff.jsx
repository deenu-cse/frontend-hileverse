import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/PantryStaff.css'

const PantryStaff = () => {
    const [staff, setStaff] = useState([]);
    const [newStaff, setNewStaff] = useState({ name: "", contactInfo: "", email: "", location: "" });

    useEffect(() => {
        fetchStaff();
    }, []);

    const fetchStaff = async () => {
        const response = await axios.get("http://localhost:3000/pantry-staff");
        setStaff(response.data);
    };

    const addStaff = async () => {
        await axios.post("http://localhost:3000/pantry-staffadd", newStaff);
        setNewStaff({ name: "", contactInfo: "", location: "", email: "" });
        fetchStaff();
    };

    const deleteStaff = async (id) => {
        await axios.delete(`http://localhost:3000/pantry-staffid/${id}`);
        fetchStaff();
    };

    return (
        <div>
            <div className="pantry-staff-container">
                <h1 className="staff-list-header" >Manage Pantry Staff</h1>
                <input
                    type="text"
                    placeholder="Name"
                    value={newStaff.name}
                    onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Contact Info"
                    value={newStaff.contactInfo}
                    onChange={(e) => setNewStaff({ ...newStaff, contactInfo: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={newStaff.email}
                    onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={newStaff.location}
                    onChange={(e) => setNewStaff({ ...newStaff, location: e.target.value })}
                />
                <button onClick={addStaff}>Add Staff</button>
            </div>

            <div className="staff-list-container">
                <h2 className="staff-list-header">Staff List</h2>
                <ul className="staff-list">
                    {staff.map((staffMember) => (
                        <li className="staff-item" key={staffMember._id}>
                            <div className="staff-details">
                                <span className="staff-name">{staffMember.name}</span>
                                <span className="staff-contact">{staffMember.contactInfo}</span>
                                <span className="staff-contact">{staffMember.email}</span>
                                <span className="staff-location">{staffMember.location}</span>
                            </div>
                            <button className="delete-btn" onClick={() => deleteStaff(staffMember._id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PantryStaff;
