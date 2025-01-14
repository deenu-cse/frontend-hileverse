import React, { useState } from 'react'
import PatientDashSidbar from './PatientDashSidbar'
import FoodChartForm from './MealShow'
import Patientprofile from './Patientprofile';
import MyFoodStatus from './MyFoodStatus';
import ProfileUpdate from './ProfileUpdate';

export default function PatientDashboard() {
    const [activeSection, setActiveSection] = useState('my-profile');

    const handleNavigation = (section) => {
        setActiveSection(section);
    };
    return (
        <>
            <div className="dashflex">
                <div className="sideflex">
                    <PatientDashSidbar onNavigation={handleNavigation} />
                </div>
                <div className="mainconflex">
                    {activeSection === 'my-profile' && <Patientprofile />}
                    {activeSection === 'my-meal' && <FoodChartForm />}
                    {activeSection === 'my-medications' && <MyFoodStatus />}
                    {activeSection === 'my-appointments' && <ProfileUpdate />}
                </div>
            </div>
        </>
    )
}
