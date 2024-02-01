// import React from 'react'
// import { Link
//  } from 'react-router-dom'
// export default function NavBar() {
//   return (
//     <nav>
//         <Link to="/">All Products</Link>
//         <Link to="/login">Log in</Link>
//     </nav>
//   )
// }

import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Still need a CSS file 

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="nav-link" activeClassName="active-link">
        All Products
      </NavLink>
      <NavLink to="/login" className="nav-link" activeClassName="active-link">
        Log in
      </NavLink>
    </nav>
  );
}