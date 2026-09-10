import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../Cartcontext.jsx";
import image from "../assets/confirm.png";
import "./Orderconfirm.css";

const Orderconfirm = ({
  fname,
  addres,
  district,
  state,
  phone,
  payment,
  apt,
  onClose,
}) => {
  const { cartItems } = useContext(Cartcontext);
  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0,
  );
  const shipping = 8;
  const taxes = 4;
  return (
    <section
      className="confirmation-sheet"
      aria-labelledby="confirmation-title"
    >
      <div className="confirmation-main">
        <div className="confirmation-heading">
          <img src={image} alt="" />
          <div>
            <p className="eyebrow">ORDER #1028</p>
            <h2 id="confirmation-title">Your order is confirmed.</h2>
            <p>Thank you, {fname}. We are preparing your pieces now.</p>
          </div>
        </div>
        <div className="confirmation-note">
          <span>✓</span>
          <div>
            <strong>We have your order.</strong>
            <p>
              You will receive an update when your order is ready to ship. Need
              help? <Link to="/contact">Contact support</Link>.
            </p>
          </div>
        </div>
        <div className="customer-info">
          <p className="eyebrow">DELIVERY DETAILS</p>
          <div className="address-grid">
            <div>
              <h4>Shipping address</h4>
              <p>
                {fname}
                <br />
                {addres}{" "}
                {apt && (
                  <>
                    {apt}
                    <br />
                  </>
                )}
                {district}
                <br />
                {state}
                <br />
                {phone}
              </p>
            </div>
            <div>
              <h4>Payment method</h4>
              <p>{payment || "Cash on delivery"}</p>
              <h4 className="payment-label">Delivery window</h4>
              <p>3–5 business days</p>
            </div>
          </div>
        </div>
        <button className="continue-button" onClick={onClose}>
          Continue shopping <span>↗</span>
        </button>
      </div>
      <aside className="confirmation-summary">
        <p className="eyebrow">ORDER SUMMARY</p>
        <div className="confirmation-items">
          {cartItems.map((item) => (
            <div className="confirmation-item" key={item.id}>
              <div className="confirmation-product">
                <img src={`/${item.image}`} alt={item.name} />
                <span className="item-quantity">{item.quantity}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.type || item.color}</small>
                </div>
              </div>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}
        </div>
        <div className="confirmation-totals">
          <div>
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
          <div>
            <span>Shipping</span>
            <strong>${shipping.toFixed(2)}</strong>
          </div>
          <div>
            <span>Taxes</span>
            <strong>${taxes.toFixed(2)}</strong>
          </div>
          <div className="grand-total">
            <span>Total</span>
            <strong>${(subtotal + shipping + taxes).toFixed(2)}</strong>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Orderconfirm;
