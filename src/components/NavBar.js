import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    margin: "10px 16px",
    textDecoration: "none",
    color: "black",
    fontWeight: '500',
  };

  return (
    <div className="navbar">
			<NavLink to="/" style={linkStyles}>Home</NavLink>
			<NavLink to="/movies" style={linkStyles}>Movies</NavLink>
			<NavLink to="/directors" style={linkStyles}>Directors</NavLink>
			<NavLink to="/actors" style={linkStyles}>Actors</NavLink>
		</div>
	);
}

export default NavBar;