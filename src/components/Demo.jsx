import React from 'react';
import { motion } from 'framer-motion'; 
import '../styles/Demo.css';

export default function Demo() {
    return (
        <>
            <div className="twosection">
                <div className="leftone">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Personalized Food Menu with Nutritional and Dietary Management
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        MediMeal enables patients to easily select meals based on their dietary needs and preferences. With detailed meal descriptions and nutritional info, patients can make informed choices, while the data is sent directly to hospital catering software, reducing meal order lead times by 1-2 hours and improving operational efficiency."
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Request a Demo
                    </motion.button>
                </div>
                <div className="rightone">
                    <motion.img
                        src="https://i.pinimg.com/736x/5b/dd/6c/5bdd6ce3b496272cfb343f64241893cd.jpg"
                        alt="Food Menu"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />
                </div>
            </div>
        </>
    );
}
