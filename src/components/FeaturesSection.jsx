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
                        <i className="fa fa-university"></i>
                        <h2 className="features-heading">Interior Expertise</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-back">
                    <div className="features-div">
                        <i className="fa fa-bullseye"></i>
                        <h2 className="features-heading">Awards Winning</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-back">
                    <div className="features-div">
                        <i className="fa fa-briefcase"></i>
                        <h2 className="features-heading">Free Consultation</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-back">
                    <div className="features-div">
                        <i className="fa  fa-folder-open"></i>
                        <h2 className="features-heading">Reasonable Price</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-back">
                    <div className="features-div">
                        <i className="fa fa-undo"></i>
                        <h2 className="features-heading">Guaranted Work</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-back">
                    <div className="features-div">
                        <i className="fa fa-envelope"></i>
                        <h2 className="features-heading">24/7 Support</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FeaturesSection;
