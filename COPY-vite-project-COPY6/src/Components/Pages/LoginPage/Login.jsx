// Login.jsx
import { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login({token, setToken}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  useEffect( () =>{if(token) {navigate("/")}}, [token] )

  const handleLogin = async (e) => {
    e.preventDefault();
    try{     // authentication logic here
      // checks if both username and password are non-empty
      if (username.trim() === '' || password.trim() === '') {
        setError('Please enter both username and password.');
      } else {
        // Clears any previous error
        setError('');
        const result = await fetch('https://fakestoreapi.com/auth/login',{
          method:'POST',
          body:JSON.stringify({
              username,
              password
              
          }), headers:{"Content-type": "application/json"}
      })
  const json = await result.json()
  console.log(json)
  setToken(json.token)
  localStorage.setItem("token", json.token)
        // authentication logic here (e.g., API call <-- {still need to find})
        // redirect the user to another page upon successful login if time permits
        console.log('Logged in successfully!');
        return json
      }} 
      catch(error)
      {console.log(error)}

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
