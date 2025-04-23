import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Common.css';

const SignIn = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();
 const handleLogin = (e) => {
   e.preventDefault();
   const storedUser = JSON.parse(localStorage.getItem('user'));
   if (storedUser && storedUser.email === email && storedUser.password === password) {
     localStorage.setItem('isLoggedIn', true);
     alert('Login successful!');
     navigate('/');
   } else {
     alert('Invalid email or password');
   }
 };
 return (
<div className="signin-container">
<h2>Sign In</h2>
<form onSubmit={handleLogin}>
<input
         type="email"
         placeholder="Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         required
       /><br />
<input
         type="password"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required
       /><br />
<button type="submit">Login</button>
</form>
</div>
 );
};
export default SignIn;