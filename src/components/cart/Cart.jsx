import React, { useContext } from "react";
import "./Cart.css";
import { Cartcontext } from "../../Cartcontext.jsx";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeItemFromCart, increment, decrement, cartTotal } =
    useContext(Cartcontext);
  const navigate = useNavigate();
  return (
    <main className="cart-page">
      <div className="page-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is waiting for something good.</p>
          <button onClick={() => navigate("/shipping")}>
            Continue shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((product) => (
              <div className="cart-product" key={product.id}>
                <img src={`/${product.image}`} alt={product.name} />
                <div className="cart-product-info">
                  <h3>{product.name}</h3>
                  <p>{product.color}</p>
                  <strong>${product.price}</strong>
                </div>
                <div className="quantity-control">
                  <button
                    onClick={() => decrement(product.id)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => increment(product.id)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItemFromCart(product.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <span>Subtotal</span>
            <strong>${cartTotal.toFixed(2)}</strong>
            <button id="btun" onClick={() => navigate("/checkout")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
