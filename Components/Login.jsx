import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure to create this file for custom styling
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required.');
      alert('Both fields are required.');  // Alert when fields are missing
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/user/', {
        action: 'login',
        email: email,
        password: password,
      });

      if (response.status === 200) {
        alert('Login successful!');  // Alert on successful login
        navigate('/main', { state: { welcome: true } });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid credentials.');
        alert('Invalid credentials.');  // Alert on invalid credentials
      } else {
        setError('An error occurred. Please try again.');
        alert('An error occurred. Please try again.');  // Alert on other errors
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form-container">
      <h1 className="logo">MyApp</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
      <div className="links">
        <a href="/forgot-password">Forgot password?</a>
        <a href="/register">Create new account</a>
      </div>
    </div>
  );
};

export default LoginForm;
