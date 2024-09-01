// src/components/LoginModal.jsx

import React, { useState } from 'react';
import axios from 'axios';

const LoginModal = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  // Updated handleLogin function
  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', credentials);
      if (response && response.data) {
        console.log('Login Successful:', response.data);
        // Handle successful login, e.g., redirect to dashboard or close modal
      } else {
        console.error('Unexpected response format:', response);
        setError('Unexpected response format');
      }
    } catch (error) {
      console.error('Login error:', error.response || error);
      setError('Login failed. Please try again.');
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
  };

  return (
    <div className="login-modal">
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Username"
        autoComplete="username" // Add autocomplete attribute
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
        autoComplete="current-password" // Add autocomplete attribute
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginModal;
