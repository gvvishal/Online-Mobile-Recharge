// Components/Home.js
import React from 'react';
import ProductsGrid from './ProductsGrid';
import Carousel2 from './Carousel2';
import Header from './Header';
import './Home.css';
import Industries from './Industries';
import VideoPlayer from './VideoPlayer';
import Footer from'./Footer';
const Home = () => {
  return (
    <div>
      <Header/>
      <Carousel2/>
      <ProductsGrid/>
      <VideoPlayer/>
      <Industries/>
      <Footer/>

    </div>
  );
};

export default Home;
