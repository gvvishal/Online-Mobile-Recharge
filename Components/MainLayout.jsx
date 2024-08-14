import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import Header from './Header';
import Carousel from './Carousel';
import Add from './Add';
import Connection from './Connection';
import Footer from './Footer';
import './MainLayout.css';

Modal.setAppElement('#root');

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (location.state?.welcome) {
      setShowWelcome(true);
    }
  }, [location.state]);

  const closeModal = () => {
    setShowWelcome(false);
  };

  return (
    <>
      <Header />
      <Carousel />
      <Add />
      <Connection />
      <Footer />
      
      <Modal
        isOpen={showWelcome}
        onRequestClose={closeModal}
        contentLabel="Welcome Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Welcome back!</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};

export default MainLayout;
