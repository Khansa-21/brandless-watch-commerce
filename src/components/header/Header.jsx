import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Cartcontext } from "../../Cartcontext.jsx";
import { useTheme } from "../../Themecontext.jsx";
import "./Header.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shipping", to: "/shipping" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const { itemCount } = useContext(Cartcontext);
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="navbar">
        <Link className="brand" to="/" onClick={closeMenu}>
          BRANDLESS<span>.</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`tabs ${menuOpen ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            className={({ isActive }) =>
              `nav-link cart-link ${isActive ? "active" : ""}`
            }
            to="/cart"
            onClick={closeMenu}
          >
            <span
              className="count-cart"
              aria-label={`${itemCount} items in cart`}
            >
              {itemCount}
            </span>
            Cart
          </NavLink>

          <NavLink
            className="nav-link nav-cta"
            to="/shipping"
            onClick={closeMenu}
          >
            Shop watches
          </NavLink>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? "Night" : "Day"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
