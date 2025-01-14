import React, { useState } from 'react';
import '../styles/PatientDashSidbar.css';

export default function PatientDashSidbar({ onNavigation }) {
    const [active, setActive] = useState('my-profile');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleNavigation = (section) => {
        setActive(section);
        onNavigation(section);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h2>Patient Dashboard</h2>
                    <button className="sidebar-close" onClick={toggleSidebar}>
                        &times;
                    </button>
                </div>
                <ul className="sidebar-menu">
                    <li
                        className={`sidebar-item ${active === 'my-profile' ? 'active' : ''}`}
                        onClick={() => handleNavigation('my-profile')}
                    >
                        My Profile
                    </li>
                    <li
                        className={`sidebar-item ${active === 'my-meal' ? 'active' : ''}`}
                        onClick={() => handleNavigation('my-meal')}
                    >
                        My Meal
                    </li>
                    <li
                        className={`sidebar-item ${active === 'my-medications' ? 'active' : ''}`}
                        onClick={() => handleNavigation('my-medications')}
                    >
                        My Food Status
                    </li>
                    <li
                        className={`sidebar-item ${active === 'my-appointments' ? 'active' : ''}`}
                        onClick={() => handleNavigation('my-appointments')}
                    >
                        Update Profile
                    </li>
                    <li
                        className={`sidebar-item ${active === 'settings' ? 'active' : ''}`}
                        onClick={() => handleNavigation('settings')}
                    >
                        Settings
                    </li>
                </ul>
            </div>
            {!isSidebarOpen && (
                <button className="sidebar-open" onClick={toggleSidebar}>
                    &#9776; 
                </button>
            )}
        </div>
    );
}
