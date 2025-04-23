// import React from 'react';
// import { Link } from 'react-router-dom';
// import './styles/Navbar.css';
// const Navbar = () => {
//  return (
// <nav className="navbar">
// <div className="nav-left">
// <Link to="/">Home</Link>
// <Link to="/members">Members</Link>
// <Link to="/groups">Groups</Link>
// <Link to="/photos">Photos</Link>
// <Link to="/profile">Profile</Link>
// </div>
// <div className="nav-right">
// <Link to="/signup">Sign Up</Link>
// <Link to="/login">Login</Link>
// </div>
// </nav>
//  );
// };
// export default Navbar;
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