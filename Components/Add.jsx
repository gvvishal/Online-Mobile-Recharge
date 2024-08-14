import React from 'react';
import './Add.css';
import fiber from '../assets/fiber.webp';
import postpaid from '../assets/postpaid.webp';
import prepaid from '../assets/prepaid.jpg';
const Add = () => {
    const plans = [
        {
            type: "FIBER",
            title: "Enjoy unlimited wi-fi at ₹999",
            description: "Up to 200 Mbps speed, unlimited calls & OTT apps",
            imgSrc: fiber,
        },
        {
            type: "POSTPAID",
            title: "Get a superior network at just ₹549",
            description: "75 GB data with no daily limit & top OTT apps",
            imgSrc: postpaid,
        },
        {
            type: "PREPAID",
            title: "Enjoy high-speed, seamless network",
            description: "Home delivery of SIM & Quick activation",
            imgSrc:prepaid,
            
        },
    ];

    return (
        <div className="recommended-for-you">
            <h2>Recommended for you</h2>
            <div className="cards-container">
                {plans.map((plan, index) => (
                    <div className="card" key={index}>
                        <img src={plan.imgSrc} alt={`${plan.type} plan`} />
                        <div className="card-content">
                            <h3 className="card-type">{plan.type}</h3>
                            <h4 className="card-title">{plan.title}</h4>
                            <p className="card-description">{plan.description}</p>
                            <div className="card-buttons">
                                <button className="buy-now">BUY NOW</button>
                                <button className="learn-more">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Add;
