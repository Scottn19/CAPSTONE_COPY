import { NavLink } from 'react-router-dom';
import './NavBar.css';


export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        All Products
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
      <NavLink to="/Cart" className="nav-link">
        Cart
      </NavLink>
    </nav>
  );
}