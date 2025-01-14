import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/TaskTracker.css";

const TaskTracker = () => {
    const [tasks, setTasks] = useState([]); // List of tasks
    const [showDietChart, setShowDietChart] = useState(false); // Show/hide diet chart popup
    const [selectedDietChart, setSelectedDietChart] = useState(null); // Selected diet chart data

    // Fetch tasks when the component mounts
    useEffect(() => {
        fetchTasks();
    }, []);

    // Function to fetch tasks from the server
    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:3000/get-tasks");
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    // Function to fetch diet chart based on patient ID
    const fetchDietChart = async (id) => {
        console.log(id);
        try {
            const response = await axios.post(`http://localhost:3000/food-chart/${id}`);
            console.log(response);

            // Transform the response data into an array for mapping
            const dietChartArray = [
                { mealTime: "Morning Meal", ...response.data.data.morningMeal },
                { mealTime: "Evening Meal", ...response.data.data.eveningMeal },
                { mealTime: "Night Meal", ...response.data.data.nightMeal },
            ];

            setSelectedDietChart(dietChartArray);
            setShowDietChart(true);
        } catch (error) {
            console.error("Error fetching diet chart:", error);
        }
    };

    // Function to close the diet chart popup
    const closeDietChart = () => {
        setShowDietChart(false);
        setSelectedDietChart(null);
    };

    // Function to update a specific field in a task
    const updateTask = async (id, field, value) => {
        try {
            await axios.put(`http://localhost:3000/tasks/${id}`, { [field]: value });
            fetchTasks();
        } catch (err) {
            console.error("Error updating task:", err);
        }
    };

    console.log(showDietChart)

    return (
        <div className="task-tracker-container">
            <h3>Task Tracker</h3>
            <table>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Room Name</th>
                        <th>Bed Number</th>
                        <th>Meal Type</th>
                        <th>Preparation Status</th>
                        <th>Delivery Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task._id}>
                            <td>{task.patientName}</td>
                            <td>{task.roomName}</td>
                            <td>{task.bedNumber}</td>
                            <td>{task.mealType}</td>
                            <td>
                                <select
                                    value={task.preparationStatus}
                                    onChange={(e) => updateTask(task._id, "preparationStatus", e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Prepared">Prepared</option>
                                </select>
                            </td>
                            <td>
                                <select
                                    value={task.deliveryStatus}
                                    onChange={(e) => updateTask(task._id, "deliveryStatus", e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Failed">Failed</option>
                                </select>
                            </td>
                            <td>
                                <button className="dietPopup" onClick={() => fetchDietChart(task.patientId)}>Diet Chart</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showDietChart && (
                <div className="diet-chart-popup">
                    <div className="diet-chart-content">
                        <h2>Diet Chart</h2>
                        {selectedDietChart ? (
                            <ul>
                                {selectedDietChart.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.mealTime}:</strong>
                                        <p><strong>Ingredients:</strong> {item.ingredients.join(', ')}</p>
                                        <p><strong>Instructions:</strong> {item.instructions}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Loading diet chart...</p>
                        )}
                        <button className="close-btn" onClick={closeDietChart}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskTracker;
