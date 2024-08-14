import React, { useState, useRef } from 'react';
import './Profile.css'; // Ensure to create this file for styling
import profileImage from '../assets/Profile.jpg'; // Import the profile image correctly

const Profile = () => {
  const [showHistory, setShowHistory] = useState(false);
  const historyRef = useRef(null);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
    if (!showHistory && historyRef.current) {
      historyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>Vishal</h1>
          <p className="title">Student</p>
          <p className="email">gvvishal04@gmail.com</p>
        </div>
      </div>
      <div className="profile-details">       
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> 7200271717</p>
        <p><strong>Address:</strong> 12/17 f North Car Street,Perur,Coimbator-10</p>
        <h2>Social Links</h2>
        <div className="social-links">
        
          <a href="https://github.com/gvvishal/App_development.git" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <button className="history-button" onClick={toggleHistory}>
            {showHistory ? 'Hide History' : 'Show History'}
          </button>
        </div>
        {showHistory && (
          <div className="history-section" ref={historyRef}>
            <h2>History</h2>
            <table className="history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Plans</th>
                  <th>Price</th>
                  <th>Validity</th>
                  <th>Mobile Number</th>
                  <th>Calls</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-08-01</td>
                  <td>Data Only</td>
                  <td>₹354</td>
                  <td>2024-08-01</td>
                  <td>9942471717</td>
                  <td>Truly-Unlimited</td>
                </tr>
                <tr>
                  <td>2024-07-15</td>
                  <td>Truly Unlimited</td>
                  <td>₹165</td>
                  <td>2024-07-15</td>
                  <td>9043071717</td>
                  <td>Truly-Unlimited</td>
                </tr>
                <tr>
                  <td>2024-06-20</td>
                  <td>TalkTime</td>
                  <td>₹1568</td>
                  <td>2024-06-20</td>
                  <td>7200271717</td>
                  <td>Truly-Unlimited</td>
                </tr>
                <tr>
                  <td>2024-06-20</td>
                  <td>CricketPlans</td>
                  <td>₹568</td>
                  <td>2024-06-20</td>
                  <td>9842922049</td>
                  <td>Truly-Unlimited</td>
                </tr>
                <tr>
                  <td>2024-06-20</td>
                  <td>Plan Vouchers</td>
                  <td>₹69</td>
                  <td>2024-06-20</td>
                  <td>9626272827</td>
                  <td>Truly-Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
