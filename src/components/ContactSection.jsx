import React from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
    return (
        <div className="contact-form-container">
            <div className="contact-us">
                <div className="contact-header">
                    <h1>&#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT US</h1>
                </div>
                <div className="social-bar">
                    <ul>
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-dribbble"></i></li>
                    </ul>
                </div>
            </div>

            <div className="header">
                <h1>Let's Get Started</h1>
                <h2>Contact us to start your next project!</h2>
            </div>

            <div className="contact-form">
                <form className="contactform">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea rows="4" placeholder="Tell us about your project..."></textarea>
                    <button type="button">SEND</button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
