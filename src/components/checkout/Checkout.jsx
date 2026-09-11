import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "../../Cartcontext.jsx";
import Orderconfirm from "../Orderconfirm.jsx";
import "./Checkout.css";

import { getWhatsAppUrl } from "../../config/support.js";
const Checkout = () => {
  const { cartItems, cartTotal, clearCart, showToast } =
    useContext(Cartcontext);
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [confirmedItems, setConfirmedItems] = useState([]);
  const [confirmedTotal, setConfirmedTotal] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    district: "",
    state: "",
    postalCode: "",
    payment: "COD",
  });
  const cities = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Multan",
    "Peshawar",
    "Faisalabad",
    "Quetta",
  ];
  const districts = [
    "Lahore",
    "Karachi East",
    "Karachi South",
    "Islamabad",
    "Rawalpindi",
    "Multan",
    "Peshawar",
    "Faisalabad",
  ];
  const provinces = [
    "Punjab",
    "Sindh",
    "Khyber Pakhtunkhwa",
    "Balochistan",
    "Islamabad Capital Territory",
    "Gilgit-Baltistan",
    "Azad Jammu and Kashmir",
  ];

  const handleChange = (event) =>
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  const handleSubmit = (event) => {
    event.preventDefault();
    const orderItemsSnapshot = cartItems.map((item) => ({ ...item }));
    setConfirmedItems(orderItemsSnapshot);
    setConfirmedTotal(cartTotal);
    setOrder(form);
    clearCart();
    showToast("Order placed successfully");
  };
  const whatsappOrder = () => {
    const items = cartItems
      .map((item) => `${item.name} x${item.quantity}`)
      .join(", ");
    const message = `Hello BRANDLESS, I want to place an order for ${items}. Total: $${cartTotal.toFixed(2)}. Name: ${form.name}. Phone: ${form.phone}. Address: ${form.address}, ${form.apartment}, ${form.city}, ${form.district}, ${form.state}, ${form.postalCode}.`;
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  if (order)
    return (
      <Orderconfirm
        fname={order.name}
        phone={order.phone}
        addres={order.address}
        apt={order.apartment}
        district={order.district}
        state={order.state}
        payment={order.payment === "COD" ? "Cash on Delivery" : "WhatsApp"}
        items={confirmedItems}
        total={confirmedTotal}
        onClose={() => {
          clearCart();
          setConfirmedItems([]);
          setConfirmedTotal(0);
          setOrder(null);
          navigate("/");
        }}
      />
    );

  if (cartItems.length === 0)
    return (
      <main className="checkout-empty">
        <h1>Your cart is empty</h1>
        <button onClick={() => navigate("/shipping")}>Browse products</button>
      </main>
    );
  return (
    <>
      <main className="checkout-page">
        <div className="checkout-form-wrap">
          <p className="eyebrow">SECURE CHECKOUT</p>
          <h1>Almost yours.</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Full name
                <input
                  required
                  name="name"
                  minLength="3"
                  pattern={"[A-Za-z][A-Za-z .'\\x2D]{2,}"}
                  title="Enter your real name using letters and spaces only"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Phone
                <input
                  required
                  type="tel"
                  name="phone"
                  pattern={"\\+?[0-9][0-9\\s\\x2D]{9,14}"}
                  title="Enter a valid phone number with 10 to 15 digits"
                  value={form.phone}
                  onChange={handleChange}
                />
              </label>
              <label className="full-width">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Address
                <input
                  required
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </label>
              <label>
                Apartment / suite
                <input
                  name="apartment"
                  value={form.apartment}
                  onChange={handleChange}
                />
              </label>
              <label>
                City
                <select
                  required
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                >
                  <option value="">Select city</option>
                  {cities.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>
              </label>
              <label>
                District
                <select
                  required
                  name="district"
                  value={form.district}
                  onChange={handleChange}
                >
                  <option value="">Select district</option>
                  {districts.map((district) => (
                    <option key={district}>{district}</option>
                  ))}
                </select>
              </label>
              <label>
                State / province
                <select
                  required
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                >
                  <option value="">Select province</option>
                  {provinces.map((province) => (
                    <option key={province}>{province}</option>
                  ))}
                </select>
              </label>
              <label>
                Postal code
                <input
                  required
                  name="postalCode"
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  title="Enter a valid five digit postal code"
                  value={form.postalCode}
                  onChange={handleChange}
                />
              </label>
            </div>
            <fieldset>
              <legend>Payment</legend>
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="COD"
                  checked={form.payment === "COD"}
                  onChange={handleChange}
                />{" "}
                Cash on delivery
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="WhatsApp"
                  checked={form.payment === "WhatsApp"}
                  onChange={handleChange}
                />{" "}
                Confirm through WhatsApp
              </label>
            </fieldset>
            <div className="checkout-actions">
              <button className="primary-action" type="submit">
                Place order
              </button>
              {form.payment === "WhatsApp" && (
                <button
                  className="whatsapp-action"
                  type="button"
                  onClick={whatsappOrder}
                >
                  Send on WhatsApp
                </button>
              )}
            </div>
          </form>
        </div>
        <aside className="checkout-summary">
          <p className="eyebrow">ORDER SUMMARY</p>
          {cartItems.map((item) => (
            <div className="summary-item" key={item.id}>
              <span>
                {item.name} <small>x{item.quantity}</small>
              </span>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}
          <div className="summary-total">
            <span>Total</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Checkout;
