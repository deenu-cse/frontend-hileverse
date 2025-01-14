import React from "react";
import { motion } from "framer-motion";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Compassionate <span>Care</span> <br />
          Through Nutrition
        </h1>
        <p>
          Our hospital food facility ensures the highest quality meals tailored
          to every patient's needs. Healing starts with nourishment.
        </p>
        <button className="cta-btn">Book your Food</button>
      </motion.div>

      <motion.img
        src="https://i.pinimg.com/736x/72/e4/cb/72e4cb0265f0d52311671180617be1e6.jpg"
        alt="Healthy Food"
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      />
    </section>
  );
};

export default HeroSection;
