import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h1 className="navbar-title">Laptop देखो</h1>
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/category">Category</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/products">Whishlist</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">SignUp</NavLink></li>
        <li><NavLink to="/products">Mycart</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;