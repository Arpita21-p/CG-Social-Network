import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import './styles/Common.css';

const SignUp = () => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    localStorage.setItem('email', email);

    localStorage.setItem('password', password);

    alert('Sign up successful! Redirecting to login.');

    navigate('/signin');

  };

  return (
<div className="form-container">
<h2>Sign Up</h2>
<form onSubmit={handleSubmit}>
<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
<button type="submit">Sign Up</button>
</form>
</div>

  );

};

export default SignUp; 