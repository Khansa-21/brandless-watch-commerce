import React from "react";
import { Link } from "react-router-dom";
import ProductCatalog from "./components/catalog/ProductCatalog.jsx";
import "./Home.css";

const Home = () => (
  <main className="home-page">
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">OBJECTS FOR EVERY HOUR</p>
        <h1>
          Make time
          <br />
          <em>your own.</em>
        </h1>
        <p>
          Thoughtful watches and everyday accessories, designed to stay with you
          through every version of the day.
        </p>
        <Link className="solid-link" to="/shipping">
          Explore the collection <span>↗</span>
        </Link>
      </div>
      <div className="hero-art">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-watch">
          10<small>10</small>
        </div>
        <div className="hero-caption">
          SERIES 01
          <br />
          <strong>THE HERITAGE</strong>
        </div>
      </div>
    </section>
    <section className="trust-strip">
      <span>Designed in the everyday</span>
      <span>Free delivery over $150</span>
      <span>Two-year warranty</span>
      <span>Easy returns</span>
    </section>
    <ProductCatalog featured heading="Trending now" />
    <section className="feature-banner">
      <div>
        <p className="eyebrow">THE WATCH EDIT</p>
        <h2>
          Find a signature
          <br />
          <em>for every hour.</em>
        </h2>
        <p>
          From quiet classics to open mechanics, these are the pieces people are
          wearing on repeat.
        </p>
        <Link className="text-link" to="/shipping">
          Shop every watch ↗
        </Link>
      </div>
      <div className="banner-stat">
        <strong>01</strong>
        <span>
          Collection
          <br />
          2026
        </span>
      </div>
    </section>
    <ProductCatalog featured heading="Best sellers" categoryFilter="Classic" />
    <section className="story-section">
      <div className="story-mark">
        BRANDLESS
        <br />
        <span>STUDIO</span>
      </div>
      <div>
        <p className="eyebrow">A SMALLER, BETTER EDIT</p>
        <h2>
          Objects that earn
          <br />
          their place.
        </h2>
        <p>
          We believe the best things are the ones you reach for without
          thinking. Our collection is edited down to versatile watches,
          considered accessories, and details that make daily rituals feel a
          little more yours.
        </p>
        <Link className="text-link" to="/about">
          Read our story ↗
        </Link>
      </div>
    </section>
  </main>
);

export default Home;
