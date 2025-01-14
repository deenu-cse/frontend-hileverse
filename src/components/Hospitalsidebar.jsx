import React, { useState } from 'react';
// import '../styles/PatientDashboard.css';

export default function HosSidebar({ onNavigation }) {
    const [active, setActive] = useState('add-staff');
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
            {/* Sidebar container */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h2>Hospital Dashboard</h2>
                    {/* Close button when sidebar is open */}
                    <button className="sidebar-close" onClick={toggleSidebar}>
                        &times;
                    </button>
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
            {/* Sidebar open button when closed */}
            {!isSidebarOpen && (
                <button className="sidebar-open" onClick={toggleSidebar}>
                    &#9776;
                </button>
            )}
        </div>
    );
}
