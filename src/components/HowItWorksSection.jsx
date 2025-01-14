import React, { useEffect, useState } from "react";
import "../styles/HowItWorksSection.css";

const HowItWorksSection = () => {
  const [visibleRows, setVisibleRows] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const rows = document.querySelectorAll('.timeline-row');
      const newVisibleRows = [];

      rows.forEach((row, index) => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          newVisibleRows.push(index);
        }
      });

      setVisibleRows(newVisibleRows);
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="how-it-works-timeline">
      <div className="timeline-row">
        <div className="progressbar-wrapper">
          <div className="dot-wrapper">
            <div className="dot"></div>
          </div>
          <div className="progress-bar">
            <div
              className="fill"
              style={{ height: visibleRows.includes(0) ? '100%' : '0%' }}
            ></div>
          </div>
        </div>
        <div
          className="timeline-content"
          style={{
            opacity: visibleRows.includes(0) ? '1' : '0',
            transform: visibleRows.includes(0) ? 'translateY(0)' : 'translateY(50px)',
          }}
        >
          <div className="step-title">Step 1</div>
          <h2>Fill Out Your Details</h2>
          <p>When you join the platform, fill out a simple form with your disease and allergy details. This helps us create a customized food chart just for you.</p>
        </div>
      </div>
      <div className="timeline-row">
        <div className="progressbar-wrapper">
          <div className="dot-wrapper">
            <div className="dot"></div>
          </div>
          <div className="progress-bar">
            <div
              className="fill"
              style={{ height: visibleRows.includes(1) ? '100%' : '0%' }}
            ></div>
          </div>
        </div>
        <div
          className="timeline-content"
          style={{
            opacity: visibleRows.includes(1) ? '1' : '0',
            transform: visibleRows.includes(1) ? 'translateY(0)' : 'translateY(50px)',
          }}
        >
          <div className="step-title">Step 2</div>
          <h2>Get Your Customized Food Chart</h2>
          <p>Based on your provided disease and allergy information, our system will generate a food chart for your morning, evening, and night meals. This ensures that your meals are healthy and tailored to your needs.</p>
        </div>
      </div>
      <div className="timeline-row">
        <div className="progressbar-wrapper">
          <div className="dot-wrapper">
            <div className="dot"></div>
          </div>
          <div className="progress-bar">
            <div
              className="fill"
              style={{ height: visibleRows.includes(2) ? '100%' : '0%' }}
            ></div>
          </div>
        </div>
        <div
          className="timeline-content"
          style={{
            opacity: visibleRows.includes(2) ? '1' : '0',
            transform: visibleRows.includes(2) ? 'translateY(0)' : 'translateY(50px)',
          }}
        >
          <div className="step-title">Step 3</div>
          <h2>Access Your Dashboard</h2>
          <p>Once you’ve provided your details, you’ll be directed to your personal dashboard. Here you can view and update your profile, including your personal information, disease details, and more.</p>
        </div>
      </div>
      <div className="timeline-row">
        <div className="progressbar-wrapper">
          <div className="dot-wrapper">
            <div className="dot"></div>
          </div>
          <div className="progress-bar">
            <div
              className="fill"
              style={{ height: visibleRows.includes(3) ? '100%' : '0%' }}
            ></div>
          </div>
        </div>
        <div
          className="timeline-content"
          style={{
            opacity: visibleRows.includes(3) ? '1' : '0',
            transform: visibleRows.includes(3) ? 'translateY(0)' : 'translateY(50px)',
          }}
        >
          <div className="step-title">Step 4</div>
          <h2>View and Edit Your Profile</h2>
          <p>In your dashboard, you’ll be able to see your full profile, which you can easily edit to update any changes in your condition or other important information.</p>
        </div>
      </div>
      <div className="timeline-row">
        <div className="progressbar-wrapper">
          <div className="dot-wrapper">
            <div className="dot"></div>
          </div>
          <div className="progress-bar">
            <div
              className="fill"
              style={{ height: visibleRows.includes(4) ? '100%' : '0%' }}
            ></div>
          </div>
        </div>
        <div
          className="timeline-content"
          style={{
            opacity: visibleRows.includes(4) ? '1' : '0',
            transform: visibleRows.includes(4) ? 'translateY(0)' : 'translateY(50px)',
          }}
        >
          <div className="step-title">Step 5</div>
          <h2>Check Your Meal Plans</h2>
          <p>In your dashboard, you can view your meal plans for the day, including the morning, evening, and night meals. You’ll also be able to check the preparation status of each meal.</p>
        </div>
      </div>
      <div className="timeline-row">
        <div className="progressbar-wrapper">
          <div className="dot-wrapper">
            <div className="dot"></div>
          </div>
          <div className="progress-bar">
            <div
              className="fill"
              style={{ height: visibleRows.includes(5) ? '100%' : '0%' }}
            ></div>
          </div>
        </div>
        <div
          className="timeline-content"
          style={{
            opacity: visibleRows.includes(5) ? '1' : '0',
            transform: visibleRows.includes(5) ? 'translateY(0)' : 'translateY(50px)',
          }}
        >
          <div className="step-title">Step 6</div>
          <h2>Track Meal Preparation and Delivery</h2>
          <p>Track the status of your meals in real-time. You can see when the meals are prepared and when they are delivered to your room, giving you a seamless and reliable experience.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
