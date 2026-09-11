import React from "react";
import Ship from "./components/ship/Ship.jsx";
import Cart from "./components/cart/Cart.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { Privacy, Terms } from "./pages/Legal.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Cartcontext.jsx";
import { ProductProvider } from "./Productcontext.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <div className="app-shell">
      <CartProvider>
        <ProductProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shipping" element={<Ship />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </div>
  );
};

export default App;
