import React from 'react';
import './PaymentPage.css'; // Ensure this file is properly created and styled

const PaymentPage = () => {
  return (
    <div className="payment-section">
      <h2>Payment Methods</h2>
      <div className="payment-options">
        {/* Credit/Debit Card Payment Option */}
        <div className="payment-option">
          <h3>Credit/Debit Card</h3>
          <img src="credit-card-icon.png" alt="Credit/Debit Card" className="payment-icon" />
          <p>Pay securely using your Credit or Debit card.</p>
          <form className="payment-form">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
            
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" required />
            
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="123" required />
            
            <button type="submit" className="pay-button">Pay Now</button>
          </form>
        </div>
        
        {/* Net Banking Payment Option */}
        <div className="payment-option">
          <h3>Net Banking</h3>
          <img src="net-banking-icon.png" alt="Net Banking" className="payment-icon" />
          <p>Pay using your Net Banking account.</p>
          <form className="payment-form">
            <label htmlFor="bankSelect">Select Your Bank</label>
            <select id="bankSelect" required>
              <option value="">Select Bank</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              {/* Add more bank options as needed */}
            </select>
            
            <label htmlFor="accountNumber">Account Number</label>
            <input type="text" id="accountNumber" placeholder="1234567890" required />
            
            <button type="submit" className="pay-button">Pay Now</button>
          </form>
        </div>
        
        {/* UPI Payment Option */}
        <div className="payment-option">
          <h3>UPI</h3>
          <img src="upi-icon.png" alt="UPI" className="payment-icon" />
          <p>Pay using UPI (Unified Payments Interface).</p>
          <form className="payment-form">
            <label htmlFor="upiId">UPI ID</label>
            <input type="text" id="upiId" placeholder="example@upi" required />
            
            <button type="submit" className="pay-button">Pay Now</button>
          </form>
        </div>
        
        {/* Add more payment methods as needed */}
      </div>
    </div>
  );
};

export default PaymentPage;
