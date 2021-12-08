import React from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
<ul className="nav nav-tabs">
  <li className="nav-item">
    <NavLink to="/home" className="nav-link" aria-current="page">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/about" className="nav-link">About</NavLink>
  </li>
</ul>
    )
}
export default Header;