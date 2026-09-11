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
        {WHATSAPP_NUMBER ? (
          <a href={whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp support ↗
          </a>
        ) : (
          <span className="disabled-support">WhatsApp support unavailable</span>
        )}
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
      <div className="creator-signature" aria-label="Project creator">
        <span>THE MAKER'S SIGNATURE</span>
        <strong>Designed &amp; developed by</strong>
        <em>Khansa Ehsan</em>
      </div>
      <small>© 2026 Brandless Studio. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
