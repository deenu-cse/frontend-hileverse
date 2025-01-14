import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Nav.css";

const Navbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [instructions, setInstructions] = useState("");
  const [hasPatientId, setHasPatientId] = useState(false); // State to track if patientId exists
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "hospital_manager@xyz.com" && password === "Password@2025") {
      navigate("/managment-system");
    } else if (email === "hospital_delivery@xyz.com" && password === "Password@2025") {
      navigate("/deliveryboy");
    } else {
      alert("Invalid email or password!");
    }
    setShowLoginPopup(false);
  };

  const handleAnimation = () => {
    const tabsNewAnim = document.getElementById("navbarSupportedContent");
    const activeItemNewAnim = tabsNewAnim.querySelector(".active");
    const horiSelector = document.querySelector(".hori-selector");

    if (activeItemNewAnim && horiSelector) {
      const activeWidthNewAnimHeight = activeItemNewAnim.offsetHeight;
      const activeWidthNewAnimWidth = activeItemNewAnim.offsetWidth;
      const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
      const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;

      horiSelector.style.top = `${itemPosNewAnimTop}px`;
      horiSelector.style.left = `${itemPosNewAnimLeft}px`;
      horiSelector.style.height = `${activeWidthNewAnimHeight}px`;
      horiSelector.style.width = `${activeWidthNewAnimWidth}px`;
    }
  };

  useEffect(() => {
    handleAnimation();
    window.addEventListener("resize", handleAnimation);

    const navbar = document.getElementById("navbarSupportedContent");
    navbar.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navbar.querySelectorAll("li").forEach((li) => li.classList.remove("active"));
        e.target.parentElement.classList.add("active");
        handleAnimation();
      }
    });

    // Check if patientId exists in localStorage
    const storedPatientId = localStorage.getItem("patientId");
    setHasPatientId(!!storedPatientId);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleAnimation);
    };
  }, []);

  const showManagementInstructions = () => {
    setInstructions(
      "Welcome to the Hospital Management Dashboard. You can manage food reservations, check delivery status, and monitor the overall system performance."
    );
    setShowLoginPopup(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <div className="navbar-brand navbar-logo">MediMeal</div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item active">
              {hasPatientId ? (
                <NavLink className="nav-link" to="/your-dashboard">
                  <i className="fas fa-columns"></i>Dashboard
                </NavLink>
              ) : (
                <NavLink className="nav-link" to="/food-reservation">
                  <i className="fas fa-utensils"></i>Book Your Food
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                onClick={() => {
                  showManagementInstructions();
                }}
              >
                <i className="fas fa-tasks"></i>Management
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {showLoginPopup && (
        <div className="login-container">
          <div className="popup-content">
            <button
              className="close-btn"
              onClick={() => setShowLoginPopup(false)}
            >
              &times;
            </button>
            <h2 className="text-center mb-4">Hospital System Login</h2>
            {instructions && <p className="instructions">{instructions}</p>}
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <h4>Email:</h4>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter management or delivery Email"
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
        </div>
      )}
    </>
  );
};

export default Navbar;
