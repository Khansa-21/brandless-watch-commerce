import React from "react";
import ProductCatalog from "../catalog/ProductCatalog.jsx";
import "../catalog/ProductCatalog.css";
import "../../Home.css";

const Ship = () => {
  return (
    <main>
      <section className="shop-hero">
        <p className="eyebrow">THE FULL COLLECTION</p>
        <h1>
          Wear the
          <br />
          <em>moment.</em>
        </h1>
        <p>
          Watches, accessories, and small objects made for the rhythm of real
          life.
        </p>
      </section>
      <ProductCatalog />
    </main>
  );
};

export default Ship;
// {products.map((item) => (
//   <div key={item.id}>
//     <img src={item.image} alt={item.description} />
//     <p>{item.description}</p>
//     <button onClick={() => addToShipping(item)}>Add to Shipping</button>
//   </div>
// ))}
