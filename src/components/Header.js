import React from 'react';

import './styles/Header.css';

const Header = ({ email, password, handleChange, handleLogin }) => {

  return (
<div className="header">
<div className="logo">Capgemini <span>Social Networking for Everyone</span></div>
<form className="login-form" onSubmit={handleLogin}>
<input

          type="email"

          placeholder="Email"

          name="email"

          value={email}

          onChange={handleChange}

          required

        />
<input

          type="password"

          placeholder="Password"

          name="password"

          value={password}

          onChange={handleChange}

          required

        />
<div className="remember">
<input type="checkbox" id="rememberMe" />
<label htmlFor="rememberMe">Remember me</label>
</div>
<button type="submit">Sign in</button>
</form>
</div>

  );

};

export default Header; 