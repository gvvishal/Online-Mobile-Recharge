import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Connection from './Components/Connection';
import Add from './Components/Add';
import Login from './Components/Login';
import Home from './Components/Home';
import Plans from './Components/Plans';
import Recharge from './Components/Recharge';
import RegisterForm from './Components/RegisterForm';
import Profile from './Components/Profile';
import PaymentPage from './Components/PaymentPage';
import AdminLogin from './Components/AdminLogin';
import AdminDashboard from './Components/AdminDashboard';
import ContactUsPage from './Components/ContactUsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/recharge/*" element={<Recharge />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/contact-us" element={<ContactUsPage/>} /> 
        
        <Route 
          path="*" 
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/connection" element={<Connection />} />
              </Routes>
            </MainLayout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
