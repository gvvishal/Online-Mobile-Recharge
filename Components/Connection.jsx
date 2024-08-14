import React from 'react';
import './Connection.css';
import prepaidIcon from '../assets/prepaid-icon.png';
import postpaidIcon from '../assets/postpaid-icon.png';
import dthIcon from '../assets/dth-icon.webp';
import wifiIcon from '../assets/wifi-icon.png'
const Connection = () => {
  return (
    <div className="connection-section">
      <h2>Buy a new connection</h2>
      <div className="connection-options">
        <div className="option">
          <img src={prepaidIcon} alt="Prepaid" />
          <p>Prepaid</p>
        </div>
        <div className="option">
          <img src={postpaidIcon} alt="Postpaid" />
          <p>Postpaid</p>
        </div>
        <div className="option">
          <img src={dthIcon} alt="DTH" />
          <p>DTH</p>
        </div>        
        <div className="option">
          <img src={wifiIcon} alt="Wifi" />
          <p>Wifi</p>
        </div>        
      </div>
    </div>
  );
};

export default Connection;
