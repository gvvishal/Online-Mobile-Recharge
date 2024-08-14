import React from 'react';
import './Industries.css'; // Add appropriate styling in your CSS file

const Industries = () => {
  const industries = [
    { 
      icon: '🏦', 
      title: 'BFSI', 
      description: 'Drive digital transformation for banks and financial institutions.' 
    },
    { 
      icon: '🏥', 
      title: 'Healthcare', 
      description: 'Transform healthcare through the power of technology.' 
    },
    { 
      icon: '🏭', 
      title: 'Manufacturing', 
      description: 'Envision Industry 4.0 for the manufacturing sector.' 
    },
    { 
      icon: '🛍', 
      title: 'Retail', 
      description: 'Reimagine the retail sector with technology as a key enabler.' 
    },
    { 
      icon: '🚚', 
      title: 'Logistics', 
      description: 'Navigate through the next disruptions in the Logistics sector.' 
    },
    { 
      icon: '🏗', 
      title: 'Tech and Industrial Parks', 
      description: 'Create a truly connected world at tech & industrial parks.' 
    }
  ];

  return (
    <div className="industries-container">
      <h1>Driving digital growth across industries</h1>
      <p>
        We start by understanding your business operations and help with
        best-fit solutions that is right for you and helps business growth!
      </p>
      <div className="industries-grid">
        {industries.map((industry, index) => (
          <div key={index} className="industry-card">
            <div className="industry-icon">{industry.icon}</div>
            <h3>{industry.title}</h3>
            <p>{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;