import React from "react";
import { motion } from "framer-motion";
import "../styles/FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="feature-section img-fluid">
        <div className="containerf">
            <div className="rowuper">
                <div className="col-md-12 text-center heading-main heading-main-white">
                    <h2 className="heading">OUR FEATURES</h2>
                    <div className="separator"><i className="fa fa-home below-line-about-icon"></i></div>
                </div>
            </div>
            <div className="rowflex">
                <div className="col-lg-4 col-md-6 col-sm-12 feature-back">
                    <div className="features-div">
                        <i className="fa fa-user-md"></i> {/* Icon for managing patient details */}
                        <h2 className="features-heading">Patient Management</h2>
                        <p>
                            Manage patient details including medical history, allergies, contact information, and more. Ensure accurate and comprehensive patient records for optimal meal planning.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-back">
                    <div className="features-div">
                        <i className="fa fa-utensils"></i> {/* Icon for meal planning */}
                        <h2 className="features-heading">Meal Planning</h2>
                        <p>
                            Create personalized meal plans for patients with specific dietary needs, including morning, evening, and night meal options. Customize ingredients and meal instructions as needed.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-back">
                    <div className="features-div">
                        <i className="fa fa-cogs"></i> {/* Icon for food preparation tasks */}
                        <h2 className="features-heading">Food Preparation</h2>
                        <p>
                            Assign food preparation tasks to pantry staff, monitor progress, and ensure that meals are prepared according to the specifications in patient meal charts.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-back">
                    <div className="features-div">
                        <i className="fa fa-truck"></i> {/* Icon for delivery tasks */}
                        <h2 className="features-heading">Meal Delivery</h2>
                        <p>
                            Manage the delivery of meals to patient rooms. Track delivery personnel and ensure timely delivery of food to meet patient needs.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-back">
                    <div className="features-div">
                        <i className="fa fa-check-circle"></i> {/* Icon for task completion */}
                        <h2 className="features-heading">Meal Delivery Confirmation</h2>
                        <p>
                            Allow delivery personnel to confirm meal deliveries and update statuses for completed deliveries. Track delivery timestamps and any notes for reference.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-back">
                    <div className="features-div">
                        <i className="fa fa-bell"></i> {/* Icon for alerts/notifications */}
                        <h2 className="features-heading">Real-Time Alerts</h2>
                        <p>
                            Receive alerts and notifications for delayed deliveries, meal preparation status, and other important updates. Stay informed about meal-related tasks and issues in real-time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeaturesSection;
