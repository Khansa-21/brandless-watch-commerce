import React from "react";
import { Link } from "react-router-dom";
import "./Page.css";

const About = () => {
  return (
    <main className="content-page">
      <section className="content-lead">
        <p className="eyebrow">OUR POINT OF VIEW</p>
        <h1>
          Good design should
          <br />
          <em>feel like yours.</em>
        </h1>
        <p>
          Brandless is an independent watch and accessories studio for people
          who care about the objects that move through their day.
        </p>
      </section>
      <section className="content-columns">
        <div>
          <span className="section-index">01 / THE WHY</span>
          <h2>We edit so you can choose with confidence.</h2>
        </div>
        <div>
          <p>
            We started Brandless with a simple belief: a useful object can still
            be beautiful, and a beautiful object should be built to be used. We
            work with quiet materials, legible details, and makers who care
            about what happens after the unboxing.
          </p>
          <p>
            Every piece in our collection earns its place through comfort,
            versatility, and the kind of finish you notice months later.
          </p>
          <Link className="text-link" to="/shipping">
            Shop the collection ↗
          </Link>
        </div>
      </section>
      <section className="values-grid">
        <article>
          <strong>01</strong>
          <h3>Considered</h3>
          <p>
            Less noise, better choices, and details that reward a closer look.
          </p>
        </article>
        <article>
          <strong>02</strong>
          <h3>For everyday</h3>
          <p>
            Built for commutes, celebrations, school runs, and everything
            between.
          </p>
        </article>
        <article>
          <strong>03</strong>
          <h3>Made to stay</h3>
          <p>
            Reliable construction, honest materials, and a two-year warranty.
          </p>
        </article>
      </section>
    </main>
  );
};

export default About;
