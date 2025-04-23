import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
<div className="navbar">
<NavLink to="/">Home</NavLink>
<NavLink to="/members">Members</NavLink>
<NavLink to="/groups">Groups</NavLink>
<NavLink to="/photos">Photos</NavLink>
<NavLink to="/profile">Profile</NavLink>
</div>
  );
};

export default Navbar; 
