import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function NavBar({token, setToken, setCartItems}) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link" activeclassname="active-link">
        All Products
      </NavLink>
      <NavLink to="/category/men's clothing" className="nav-link" activeclassname="active-link">
        Men's Clothing
      </NavLink>
      <NavLink to="/category/women's clothing" className="nav-link" activeclassname="active-link">
        Women's Clothing
      </NavLink>
      <NavLink to="/category/jewelery" className="nav-link" activeclassname="active-link">
        Jewelry
      </NavLink>
      <NavLink to="/category/electronics" className="nav-link" activeclassname="active-link">
        Electronics
      </NavLink>
      { !token && 
      <NavLink to="/login" className="nav-link" activeclassname="active-link">
        Login
      </NavLink>
      }
      { token &&
        <button onClick={ () => {
          localStorage.removeItem("cart");
         localStorage.removeItem("token");
        setToken(null);
        setCartItems([]);
        }}>logout</button>

      }
      <NavLink to="/cart" className="nav-link" activeclassname="active-link">
        Cart
      </NavLink>

    </nav>
  );
  }
