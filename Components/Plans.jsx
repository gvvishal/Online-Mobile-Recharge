// src/Components/Plans.js
import React from 'react';
import Header from './Header'; // Import the Header component
import Recharge from './Recharge'; // Import the Recharge component
import Carousel from './Carousel'; // Import the Carousel component
import ScrollToTopButton from './ScrollToTopButton'; // Import the ScrollToTopButton component

const Plans = () => {
  return (
    <div>
      <Header />
     
      <Recharge />
      <ScrollToTopButton /> {/* Add the ScrollToTopButton here */}
    </div>
  );
};

export default Plans;
