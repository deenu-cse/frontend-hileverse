// HospitalSystem.jsx
import React, { useState, useEffect } from "react";
import PantryStaff from "./PantryStaff";
import TaskAssignment from "./TaskAssignment";
import TaskTracker from "./TaskTracker";
import UserTable from "./UserTable";
import HosSidebar from "./Hospitalsidebar";
import "../styles/HospitalSystem.css";

export default function HospitalSystem() {
  const [activeSection, setActiveSection] = useState("add-staff");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if admin token is present in localStorage
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "hospital_manager@xyz.com" && password === "Password@2025") {
      // Store admin token in localStorage
      localStorage.setItem("adminToken", "your-admin-token");
      setIsAuthenticated(true);
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <h2 className="text-center mb-4">Hospital System Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <h4>Email:</h4>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <h4>Password:</h4>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="dashflex">
      <button
        onClick={handleLogout}
        className="btn btn-danger"
        style={{ position: "absolute", top: 10, right: 10 }}
      >
        Logout
      </button>
      <div className="sideflex"></div>
      <HosSidebar onNavigation={handleNavigation} />
      <div className="mainconflex">
        {activeSection === "add-staff" && <PantryStaff />}
        {activeSection === "assign-task" && <TaskAssignment />}
        {activeSection === "food-status" && <TaskTracker />}
        {activeSection === "user-table" && <UserTable />}
      </div>
    </div>
  );
}
