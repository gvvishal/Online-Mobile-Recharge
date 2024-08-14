
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; 
import carousel_1 from '../assets/Carousel_1.jpg';
import carousel_2 from '../assets/Carousel_2.webp';
import carousel_3 from '../assets/Carousel_3.png';
import carousel_4 from '../assets/Carousel_4.png';

const Carousel = () => {
  const imageUrls = [
    carousel_1,
    carousel_2,
    carousel_3,
    carousel_4
  ];

  const settings = {
    dots: true,
    infinite:true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div>
      <Slider {...settings}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="sliding-siva">
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
