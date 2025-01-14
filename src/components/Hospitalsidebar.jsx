// HosSidebar.jsx
import React, { useState } from 'react';
import '../styles/PatientDashSidbar.css';

export default function HosSidebar({ onNavigation }) {
    const [active, setActive] = useState('add-staff');

    const handleNavigation = (section) => {
        setActive(section);
        onNavigation(section);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Hospital Dashboard</h2>
            </div>
            <ul className="sidebar-menu">
                <li
                    className={`sidebar-item ${active === 'add-staff' ? 'active' : ''}`}
                    onClick={() => handleNavigation('add-staff')}
                >
                    Add Staff
                </li>
                <li
                    className={`sidebar-item ${active === 'assign-task' ? 'active' : ''}`}
                    onClick={() => handleNavigation('assign-task')}
                >
                    Assign Task
                </li>
                <li
                    className={`sidebar-item ${active === 'food-status' ? 'active' : ''}`}
                    onClick={() => handleNavigation('food-status')}
                >
                    Food Status
                </li>
                <li
                    className={`sidebar-item ${active === 'user-table' ? 'active' : ''}`}
                    onClick={() => handleNavigation('user-table')}
                >
                    User Table
                </li>
            </ul>
        </div>
    );
}
