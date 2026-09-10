import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../../Cartcontext";
import "./Header.css";
const Header = () => {
  const { itemCount } = useContext(Cartcontext);
  return (
    <header className="site-header">
      <div className="navbar">
        <Link className="brand" to="/">
          BRANDLESS<span>.</span>
        </Link>
        <nav className="tabs" aria-label="Primary navigation">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/shipping">
              Shipping
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <span className="count-cart">{itemCount}</span>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="nav-link nav-cta" to="/shipping">
              Shop watches
            </Link>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
