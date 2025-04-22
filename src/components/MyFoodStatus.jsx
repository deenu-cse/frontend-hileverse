import React, { useEffect, useState } from 'react';
import '../styles/MyFoodStatus.css';
import axios from 'axios';

export default function MyFoodStatus() {
    const [foodStatusData, setFoodStatusData] = useState([]);
    const [dietChartData, setDietChartData] = useState([]);
    const [mergedData, setMergedData] = useState([]);

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
            setFoodStatusData(Array.isArray(response.data) ? response.data : [response.data]);
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
            setDietChartData([]);
        }
    };

    useEffect(() => {
        if (dietChartData.length) {
            // If diet chart data exists, merge with food status data
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
        } else {
            const defaultData = [
                { mealTime: 'Morning Meal', food: 'N/A', preparationStatus: 'N/A', deliveryStatus: 'N/A', roomName: 'N/A', bedNumber: 'N/A' },
                { mealTime: 'Evening Meal', food: 'N/A', preparationStatus: 'N/A', deliveryStatus: 'N/A', roomName: 'N/A', bedNumber: 'N/A' },
                { mealTime: 'Night Meal', food: 'N/A', preparationStatus: 'N/A', deliveryStatus: 'N/A', roomName: 'N/A', bedNumber: 'N/A' },
            ];
            setMergedData(defaultData);
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
                    {mergedData.map((item, index) => (
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
                    ))}
                </tbody>
            </table>
        </div>
    );
}