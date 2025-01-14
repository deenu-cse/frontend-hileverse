import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DeliveryDashboard.css";

const DeliveryDashboard = () => {
    const [email, setEmail] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch tasks on component mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchTasks(token);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post("https://hilverse-backend.vercel.app/deliverylogin", { email });
            const { token, assignedTasks } = response.data;

            if (token) {
                localStorage.setItem("token", token);
                setTasks(assignedTasks);
                setLoggedIn(true);
            } else {
                setError("Invalid email.");
            }
        } catch (err) {
            setError("Failed to log in. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const fetchTasks = async (token) => {
        try {
            const response = await axios.get("https://hilverse-backend.vercel.app/deliverylogin", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTasks(response.data.assignedTasks);
            setLoggedIn(true);
        } catch (err) {
            setError("Failed to fetch tasks. Please log in again.");
            localStorage.removeItem("token");
        }
    };

    const handleUpdateStatus = async (id, status) => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(
                `https://hilverse-backend.vercel.app/tasks/${id}`,
                { deliveryStatus: status },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task._id === id ? { ...task, deliveryStatus: status } : task
                )
            );
        } catch (err) {
            alert("Failed to update delivery status. Please try again.");
        }
    };

    return (
        <div className="dashboard-container">
            {!loggedIn ? (
                <div className="login-container">
                    <h4>Delivery Boy Login</h4>
                    <div className="form-group">
                        <form onSubmit={handleLogin} className="login-form">
                            <h4>Email:</h4>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" disabled={loading} className="btn btn-primary btn-block">
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>
                    </div>
                    {error && <p className="error">{error}</p>}
                </div>
            ) : (
                <div className="task-tracker-container dashname">
                    <h1>Assigned Tasks</h1>
                    {tasks.length === 0 ? (
                        <p>No tasks assigned to you.</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Room Name</th>
                                    <th>Bed Number</th>
                                    <th>Meal Type</th>
                                    <th>Patient ID</th>
                                    <th>Delivery Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task._id}>
                                        <td>{task.patientName}</td>
                                        <td>{task.roomName}</td>
                                        <td>{task.bedNumber}</td>
                                        <td>{task.mealType}</td>
                                        <td>{task.patientId}</td>
                                        <td>
                                            <button
                                                className={`markas ${task.deliveryStatus === "Delivered"
                                                    ? "delivered"
                                                    : task.deliveryStatus === "Failed"
                                                        ? "failed"
                                                        : "not-delivered"
                                                    }`}
                                                onClick={() => handleUpdateStatus(task._id, "Delivered")}
                                                disabled={task.deliveryStatus === "Delivered" || task.deliveryStatus === "Failed"}
                                            >
                                                {task.deliveryStatus === "Delivered"
                                                    ? "Delivered"
                                                    : task.deliveryStatus === "Failed"
                                                        ? "Failed"
                                                        : "Mark as Delivered"}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
};

export default DeliveryDashboard;
