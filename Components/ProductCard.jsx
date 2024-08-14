import React from 'react';

const ProductCard = ({ image, title, price, buyLink, learnMoreLink }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">₹{price}</p>
      <div className="product-buttons">
        <a href={buyLink} className="buy-button">Buy Now</a>
        <a href={learnMoreLink} className="learn-more-button">Learn more</a>
      </div>
    </div>
  );
};

export default ProductCard;
