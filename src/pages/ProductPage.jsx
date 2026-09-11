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

          <div className="product-detail-actions">
            <button type="button" onClick={() => addToCart(product)}>
              Add to cart
            </button>
            <Link to="/shipping">Continue shopping</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
