import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/TaskAssignment.css'

const TaskAssignment = () => {
    const [staff, setStaff] = useState([]);
    const [task, setTask] = useState({ staffId: "", patientName: "", mealType: "", roomName: "", bedNumber: "", patientId: "" });

    useEffect(() => {
        fetchStaff();
    }, []);

    const fetchStaff = async () => {
        const response = await axios.get("https://hilverse-backend.vercel.app/pantry-staff");
        setStaff(response.data);
    };

    const assignTask = async () => {
        await axios.post("https://hilverse-backend.vercel.app/meal-tasks", task);
        setTask({ staffId: "", patientName: "", mealType: "", roomName: "", bedNumber: "", patientId: "" });
    };

    return (
        <div className="task-assignment-container">
            <h1 className="title">Assign Meal Tasks</h1>

            <div className="form-group">
                <select
                    className="form-input"
                    onChange={(e) => setTask({ ...task, staffId: e.target.value })}
                    value={task.staffId}
                >
                    <option value="">Select Staff</option>
                    {staff.map((staffMember) => (
                        <option value={staffMember._id} key={staffMember._id}>
                            {staffMember.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className="form-input"
                    placeholder="Patient Name"
                    value={task.patientName}
                    onChange={(e) => setTask({ ...task, patientName: e.target.value })}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className="form-input"
                    placeholder="Room Name"
                    value={task.roomName}
                    onChange={(e) => setTask({ ...task, roomName: e.target.value })}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    className="form-input"
                    placeholder="Bed Number"
                    value={task.bedNumber}
                    onChange={(e) => setTask({ ...task, bedNumber: e.target.value })}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-input"
                    placeholder="patientId"
                    value={task.patientId}
                    onChange={(e) => setTask({ ...task, patientId: e.target.value })}
                />
            </div>

            <div className="form-group">
                <select
                    className="form-input"
                    onChange={(e) => setTask({ ...task, mealType: e.target.value })}
                    value={task.mealType}
                >
                    <option value="">Select Meal Type</option>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                    <option value="Night">Night</option>
                </select>
            </div>

            <button className="submit-button" onClick={assignTask}>
                Assign Task
            </button>
        </div>
    );
};

export default TaskAssignment;
