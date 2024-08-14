import React from 'react';
import Slider from 'react-slick';
import './Carousel2.css'; // Custom styles

const Carousel2 = () => {
  const products = [
    {
      image: 'https://jep-asset.akamaized.net/jiocom/static/images/desktop-Now_experience_postpaid_like_never_before.webp',
      title: 'JioTag Air',
      description: 'Tag it, track it - anywhere! With JioTag Air, forgetting, misplacing or losing valuables is a thing of the past.',
      price: '₹1,499',
      buttonText: 'Buy for ₹1,499',
      buyLink: '#',
    },
    {
      image: 'https://jep-asset.akamaized.net/cms/assets/business/home/new-july24-banner3-desktop.webp',
      title: 'JioTag Air',
      description: 'Tag it, track it - anywhere! With JioTag Air, forgetting, misplacing or losing valuables is a thing of the past.',
      price: '₹1,499',
      buttonText: 'Buy for ₹1,499',
      buyLink: '#',
    },
    {
      image: 'https://jep-asset.akamaized.net/cms/assets/business/home/new-july24-banner1-desktop.webp',
      title: 'JioTag Air',
      description: 'Tag it, track it - anywhere! With JioTag Air, forgetting, misplacing or losing valuables is a thing of the past.',
      price: '₹1,499',
      buttonText: 'Buy for ₹1,499',
      buyLink: '#',
    },
    // Add more products if needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove the arrows
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="carousel-slide">
          <div className="carousel-content">
            <img src={product.image} alt={product.title} className="carousel-image" />
            <div className="carousel-text">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <a href={product.buyLink} className="carousel-button">{product.buttonText}</a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel2;
