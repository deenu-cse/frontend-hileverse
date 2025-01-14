import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';
import '../styles/MealShow.css';

const FoodChartForm = () => {
    const [patientId, setPatientId] = useState('');
    const [foodChart, setFoodChart] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Get patientId from localStorage when the component mounts
        const storedPatientId = localStorage.getItem('patientId');
        if (storedPatientId) {
            setPatientId(storedPatientId);
            handleGenerateFoodChart(storedPatientId); // Automatically generate the food chart
        }
    }, []);

    const handleGenerateFoodChart = async (id) => {
        setLoading(true);
        try {
            const response = await axios.post(`http://localhost:3000/food-chart/${id}`);
            console.log(response)
            setFoodChart(response.data.data);
        } catch (error) {
            console.error('Error generating food chart:', error);
        } finally {
            setLoading(false);
        }
    };

    // Animation for meal sections
    const mealAnimation = useSpring({
        opacity: foodChart ? 1 : 0,
        transform: foodChart ? 'translateY(0)' : 'translateY(20px)',
        config: { tension: 200, friction: 25 }
    });

    console.log(foodChart)

    return (
        <div className="food-chart-container">
            {foodChart && (
                <animated.div style={mealAnimation} className="food-chart-details">
                    <div className="meal-section">
                        <h3>Morning Meal</h3>
                        <p><strong>Ingredients:</strong> {foodChart.morningMeal.ingredients.join(', ')}</p>
                        <p><strong>Instructions:</strong> {foodChart.morningMeal.instructions}</p>
                        <p><strong>Calories:</strong> {foodChart.morningMeal.calories} kcal</p>
                    </div>

                    <div className="meal-section">
                        <h3>Evening Meal</h3>
                        <p><strong>Ingredients:</strong> {foodChart.eveningMeal.ingredients.join(', ')}</p>
                        <p><strong>Instructions:</strong> {foodChart.eveningMeal.instructions}</p>
                        <p><strong>Calories:</strong> {foodChart.eveningMeal.calories} kcal</p>
                    </div>

                    <div className="meal-section">
                        <h3>Night Meal</h3>
                        <p><strong>Ingredients:</strong> {foodChart.nightMeal.ingredients.join(', ')}</p>
                        <p><strong>Instructions:</strong> {foodChart.nightMeal.instructions}</p>
                        <p><strong>Calories:</strong> {foodChart.nightMeal.calories} kcal</p>
                    </div>
                </animated.div>
            )}
        </div>
    );
};

export default FoodChartForm;
