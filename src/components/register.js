import React, { useState, navigate } from "react";
import { Link,  } from 'react-router-dom';

import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const login = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/home'); 
    } else {
      alert('Invalid Username or Password');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className='space' onSubmit={login}>
        <input
          className='form'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br/>
        <input
          className='form'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='btn2' type="submit">Login</button>
      </form>
      <div className="link-container">
        <p>New User? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;