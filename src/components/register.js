import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Basic email pattern validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format.");
      return;
    }

    // Get users from localStorage or create empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username or email is already taken
    const userExists = users.some(user => user.username === username || user.email === email);
    if (userExists) {
      setError("Username or email is already in use.");
      return;
    }

    // Add new user to users array and save to localStorage
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setSuccess("Registration successful! Redirecting to login...");
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="auth-container">
      <h2>Sign-Up</h2>
      <form className="space" onSubmit={handleRegister}>
        <input
          className="form"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <input
          className="form"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          className="form"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <input
          className="form"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /><br />
        <button className="btn2" type="submit">Sign-Up</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <div className="link-container">
        <p>Already registered? <Link to="/">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;
