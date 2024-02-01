// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="nav-link" activeClassName="active-link">
        All Products
      </NavLink>
      <NavLink to="/category/men's clothing" className="nav-link" activeClassName="active-link">
        Men's Clothing
      </NavLink>
      <NavLink to="/category/women's clothing" className="nav-link" activeClassName="active-link">
        Women's Clothing
      </NavLink>
      <NavLink to="/category/jewelery" className="nav-link" activeClassName="active-link">
        Jewelry
      </NavLink>
      <NavLink to="/category/electronics" className="nav-link" activeClassName="active-link">
        Electronics
      </NavLink>
      <NavLink to="/login" className="nav-link" activeClassName="active-link">
        Login
      </NavLink>
      <NavLink to="/cart" className="nav-link" activeClassName="active-link">
        Cart
      </NavLink>

    </nav>
  );
}

