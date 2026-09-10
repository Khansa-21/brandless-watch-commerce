import React, { useState } from "react";
import "./Page.css";

import {
  getWhatsAppUrl,
  SUPPORT_EMAIL,
  WHATSAPP_NUMBER,
} from "../config/support.js";
const Contact = () => {
  const [sent, setSent] = useState(false);
  return (
    <main className="contact-page">
      <section className="content-lead">
        <p className="eyebrow">WE ARE HERE TO HELP</p>
        <h1>
          Let’s talk
          <br />
          <em>about time.</em>
        </h1>
        <p>
          Questions about sizing, delivery, or choosing the right piece? Send us
          a note and our small team will get back to you within one business
          day.
        </p>
      </section>
      <section className="contact-layout">
        <div className="contact-details">
          <div>
            <span className="section-index">EMAIL</span>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </div>
          <div>
            <span className="section-index">HOURS</span>
            <p>
              Monday–Friday
              <br />
              9:00–17:00 UTC
            </p>
          </div>
          <div>
            <span className="section-index">SOCIAL</span>
            <p>@brandless.studio</p>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
            const data = new FormData(event.currentTarget);
            const subject = encodeURIComponent(
              `Brandless support: ${data.get("name")}`,
            );
            const body = encodeURIComponent(
              `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`,
            );
            window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
          }}
        >
          <label>
            Your name
            <input required name="name" />
          </label>
          <label>
            Email address
            <input required type="email" name="email" />
          </label>
          <label>
            How can we help?
            <textarea required name="message" rows="5" />
          </label>
          <button className="solid-link" type="submit">
            {sent ? "Message sent" : "Send message"} <span>↗</span>
          </button>
        </form>
      </section>
      <div>
        <span className="section-index">WHATSAPP</span>
        <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
          {WHATSAPP_NUMBER
            ? "Chat with support ↗"
            : "Set VITE_WHATSAPP_NUMBER to enable direct chat"}
        </a>
      </div>
    </main>
  );
};

export default Contact;
