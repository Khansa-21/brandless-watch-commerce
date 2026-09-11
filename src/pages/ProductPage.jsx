import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Cartcontext } from "../Cartcontext.jsx";
import { Productcontext } from "../Productcontext.jsx";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const { productsData } = useContext(Productcontext);
  const { addToCart } = useContext(Cartcontext);
  const product = productsData.find((item) => String(item.id) === String(id));
  const recommendations = productsData
    .filter(
      (item) => item.id !== product?.id && item.category === product?.category,
    )
    .slice(0, 4);

  if (!product) {
    return (
      <main className="catalog-section" style={{ minHeight: "60vh" }}>
        <h2>Product not found.</h2>
        <Link to="/shipping">Back to shop</Link>
      </main>
    );
  }

  return (
    <main
      className="catalog-section product-detail-page"
      style={{ minHeight: "60vh" }}
    >
      <div className="product-detail-layout">
        <div className="product-detail-image-wrap">
          <img src={`/${product.image}`} alt={product.name} />
        </div>

        <div className="product-detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h2>{product.name}</h2>
          <p className="product-detail-meta">
            {product.brand} · {product.type}
          </p>
          <p className="product-detail-price">${product.price}</p>
          <p className="product-detail-description">
            Built for everyday wear with thoughtful craftsmanship, premium
            materials, and a clean profile that complements your daily routine.
          </p>

          <div className="product-highlights">
            <div>
              <strong>Designed for daily wear</strong>
              <span>Considered details, made to stay in rotation.</span>
            </div>
            <div>
              <strong>Ready to dispatch</strong>
              <span>Carefully packed with 3-5 day delivery.</span>
            </div>
            <div>
              <strong>One-year warranty</strong>
              <span>Support for your piece after purchase.</span>
            </div>
          </div>

          <div className="product-detail-actions">
            <button type="button" onClick={() => addToCart(product)}>
              Add to cart
            </button>
            <Link to="/shipping">Continue shopping</Link>
          </div>
        </div>
      </div>
      {recommendations.length > 0 && (
        <section className="recommendation-section">
          <div className="recommendation-heading">
            <p className="eyebrow">COMPLETE THE ROTATION</p>
            <h3>You may also like</h3>
          </div>
          <div className="recommendation-grid">
            {recommendations.map((item) => (
              <Link
                className="recommendation-card"
                to={`/product/${item.id}`}
                key={item.id}
              >
                <img src={`/${item.image}`} alt={item.name} />
                <span>{item.name}</span>
                <strong>${item.price}</strong>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductPage;
