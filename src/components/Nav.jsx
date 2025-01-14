import React from "react";
import '../styles/Nav.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hospital FoodCare</div>
      <NavLink to={'/food-reservation'}>
        <button className="book-food-btn">Book Your Food</button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
