import React, { useState } from 'react';
import './ContactUsPage.css';

const ContactUsPage = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    
    alert('Feedback submitted!');
    setFeedback('');
  };

  return (
    <div className="contact-us-page">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>If you have any questions, please reach out to us using the following methods:</p>
        <ul>
          <li>Email: support@example.com</li>
          <li>Phone: +123 456 7890</li>
          <li>Address: 123 Main Street, Anytown, Country</li>
        </ul>
      </div>
      <div className="feedback-form">
        <h2>Send Us Your Feedback</h2>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea 
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Your feedback here..."
            rows="5"
            required
          />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
