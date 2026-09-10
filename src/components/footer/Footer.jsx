import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  getWhatsAppUrl,
  SUPPORT_EMAIL,
  WHATSAPP_NUMBER,
} from "../../config/support.js";
const Footer = () => {
  const whatsappHref = getWhatsAppUrl();

  return (
    <footer className="global-footer">
      <div className="footer-brand">
        <Link className="brand" to="/">
          BRANDLESS<span>.</span>
        </Link>
        <p>Time, considered.</p>
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        <a href={whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp support {WHATSAPP_NUMBER ? "↗" : "(configure number)"}
        </a>
      </div>
      <div className="footer-links">
        <div>
          <strong>Explore</strong>
          <Link to="/shipping">Shop all</Link>
          <Link to="/about">Our story</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <strong>Help</strong>
          <Link to="/shipping">Shipping & returns</Link>
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/terms">Terms & conditions</Link>
        </div>
      </div>
      <small>© 2026 Brandless Studio. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
