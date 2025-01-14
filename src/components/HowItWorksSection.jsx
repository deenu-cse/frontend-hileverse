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
            <h2>Register as an Admin</h2>
            <p>Sign up as an admin to gain full control of your event management platform.</p>
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
            <h2>Choose Your Plan</h2>
            <p>Pick a plan that suits your needs and unlock all features to manage your events effectively.</p>
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
            <h2>Add a Theme</h2>
            <p>Customize the look and feel of your admin dashboard with your preferred theme for a personalized experience.</p>
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
            <h2>Get Full Control</h2>
            <p>Once you’re set up, gain full control of your events and start managing them easily from your personalized dashboard.</p>
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
            <h2>Manage Your Events</h2>
            <p>Start creating, editing, and managing your events seamlessly using your new admin dashboard. You’re in full control!</p>
          </div>
        </div>
      </section>
    );
};

export default HowItWorksSection;
