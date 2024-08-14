import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PostpaidPage.css';

const PostpaidPage = () => {
  const [plansData, setPlansData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/db.json')
      .then(response => {
        setPlansData(response.data.postpaidPlans);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleRecharge = () => {
    navigate('/payment'); // Navigate to the PaymentPage
  };

  return (
    <div className="plans-section">
      <h2>Postpaid Plans</h2>
      <div className="grid-container">
        {plansData.map((plan) => (
          <div key={plan.id} className="plan-card">
            <div className="monthly-cost">ONLY {plan.monthlyCost}/MONTH</div>
            <div className="price">{plan.price}</div>
            <div className="details">{plan.details}</div>
            <a href="#details" className="view-details">View details</a>
            <div className="plan-info">
              <div className="validity"><strong>VALIDITY</strong><br />{plan.validity}</div>
              <div className="data"><strong>DATA</strong><br />{plan.data}</div>
            </div>
            <div className="subscriptions">
              <strong>SUBSCRIPTIONS</strong><br />
              {plan.subscription.map((sub, index) => (
                <span key={index} className="subscription">{sub}</span>
              ))}
            </div>
            <button className="recharge-button" onClick={handleRecharge}>Recharge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostpaidPage;
