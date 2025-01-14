import React from "react";
import "../styles/HeroSection.css";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      {/* Main Section */}
      <main className="main">
        <section className="sectionh banner banner-section">
          <div className="containerhero banner-column">
            <img
              className="banner-image"
              src="https://i.pinimg.com/736x/e9/2f/79/e92f79a27bdd257a5b98eb40b431d8ec.jpg"
              alt="banner"
            />
            <div className="banner-inner">
              <h1 className="heading-xl">
                Experience Media Like Never Before
              </h1>
              <p className="paragraph">
                Enjoy award-winning stereo beats with wireless listening freedom
                and sleek, streamlined with premium padded and delivering
                first-rate playback.
              </p>
              <div className="nav-item active setbtn">
                <NavLink className="nav-linkxx" to="/food-reservation">
                  <i className="fas fa-utensils"></i>Book Your Food
                </NavLink>
              </div>
            </div>
            <div className="banner-links">
              <a href="#" title="Facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" title="Instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" title="Twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" title="YouTube">
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroSection;
