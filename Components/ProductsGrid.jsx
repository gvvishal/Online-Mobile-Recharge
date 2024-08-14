import React from 'react';
import ProductCard from './ProductCard';
import './ProductsGrid.css' // Adjust the path based on your file structure

const ProductsGrid = () => {
  const products = [
    {
      image: 'https://jep-asset.akamaized.net/cms/assets/devices/jiophone-prima.webp', // Replace with actual image paths
      title: 'KeyPad Mobile -With Internet',
      price: 2599,
      buyLink: '#', // Replace with actual links
      learnMoreLink: '#',
    },
    {
      image: 'https://jep-asset.akamaized.net/cms/assets/devices/jiobharat-v1.webp',
      title: 'KeyPad Mobile',
      price: 999,
      buyLink: '#',
      learnMoreLink: '#',
    },
    {
      image: 'https://jep-asset.akamaized.net/cms/assets/jioairtag/product-tagair.png',
      title: 'Tag Air',
      price: 1499,
      buyLink: '#',
      learnMoreLink: '#',
    },
    {
      image: 'https://jep-asset.akamaized.net/cms/assets/devices/JioBook.webp',
      title: 'VtalkBook',
      price: 15299,
      buyLink: '#',
      learnMoreLink: '#',
    },
    {
      image: 'https://assets.airtel.in/static-assets/cms/b2b/widgets/solution-images-webp/Banner_Build-Agile-Networks_1572437578_desktop_250x140.webp',
      title: 'Bluetooth Controller',
      price: 1499,
      buyLink: '#',
      learnMoreLink: '#',
    },
    {
      image: 'https://jep-asset.akamaized.net/cms/assets/devices/product-jiodrive-19.webp',
      title: 'VR 360',
      price: 1499,
      buyLink: '#',
      learnMoreLink: '#',
    },
    {
      image: 'https://jep-asset.akamaized.net/cms/assets/devices/jiomotive.png',
      title: 'Motive',
      price: 1499,
      buyLink: '#',
      learnMoreLink: '#',
    },
    
   
  ];

  return (
    <div className="products-grid">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          buyLink={product.buyLink}
          learnMoreLink={product.learnMoreLink}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
