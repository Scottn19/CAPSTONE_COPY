// Login.jsx
import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // authentication logic here
    // checks if both username and password are non-empty
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
    } else {
      // Clears any previous error
      setError('');

      // authentication logic here (e.g., API call <-- {still need to find})
      // redirect the user to another page upon successful login if time permits
      console.log('Logged in successfully!');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
