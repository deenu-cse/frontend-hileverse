import React, { useEffect, useState } from 'react';
import '../styles/MyFoodStatus.css';
import axios from 'axios';

export default function MyFoodStatus() {
    const [foodStatusData, setFoodStatusData] = useState([]); // Data from the food status API
    const [dietChartData, setDietChartData] = useState([]); // Data from the diet chart API
    const [mergedData, setMergedData] = useState([]); // Combined data for the table

    const patientId = localStorage.getItem('patientId');

    useEffect(() => {
        if (patientId) {
            fetchDietChart(patientId);
            fetchFoodStatus(patientId);
        }
    }, [patientId]);

    const fetchFoodStatus = async (id) => {
        try {
            const response = await axios.get(`https://hilverse-backend.vercel.app/get-tasks/${id}`);
            console.log("Food Status Data:", response.data);
            setFoodStatusData(Array.isArray(response.data) ? response.data : [response.data]); // Ensure data is an array
        } catch (error) {
            console.error('Error fetching food status:', error);
        }
    };

    const fetchDietChart = async (id) => {
        try {
            const response = await axios.post(`https://hilverse-backend.vercel.app/food-chart/${id}`);
            const dietChartArray = [
                { mealTime: 'Morning Meal', ...response.data.data.morningMeal },
                { mealTime: 'Evening Meal', ...response.data.data.eveningMeal },
                { mealTime: 'Night Meal', ...response.data.data.nightMeal },
            ];
            setDietChartData(dietChartArray); 
        } catch (error) {
            console.error('Error fetching diet chart:', error);
        }
    };

    useEffect(() => {
        if (foodStatusData.length && dietChartData.length) {
            const combinedData = dietChartData.map((diet) => {
                const statusData = foodStatusData.find(
                    (status) => status.mealType === diet.mealTime.split(' ')[0]
                );
                return {
                    mealTime: diet.mealTime,
                    food: diet.ingredients ? diet.ingredients.join(', ') : 'N/A',
                    preparationStatus: statusData?.preparationStatus || 'N/A',
                    deliveryStatus: statusData?.deliveryStatus || 'N/A',
                    roomName: statusData?.roomName || 'N/A',
                    bedNumber: statusData?.bedNumber || 'N/A',
                };
            });
            setMergedData(combinedData);
        }
    }, [foodStatusData, dietChartData]);

    return (
        <div className="food-status-container">
            <h2>Today's Food and Status</h2>
            <table className="food-status-table">
                <thead>
                    <tr>
                        <th>Meal Time</th>
                        <th>Food Ingredients</th>
                        <th>Room Name</th>
                        <th>Bed Number</th>
                        <th>Preparation Status</th>
                        <th>Delivery Status</th>
                    </tr>
                </thead>
                <tbody>
                    {mergedData.length > 0 ? mergedData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.mealTime}</td>
                            <td>{item.food}</td>
                            <td>{item.roomName}</td>
                            <td>{item.bedNumber}</td>
                            <td className={`status ${item.preparationStatus.toLowerCase()}`}>
                                {item.preparationStatus}
                            </td>
                            <td className={`status ${item.deliveryStatus.toLowerCase()}`}>
                                {item.deliveryStatus}
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="6" className="no-data">
                                No Schedule for today.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
