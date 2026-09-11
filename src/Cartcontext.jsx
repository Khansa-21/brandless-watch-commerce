/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useMemo, useState } from "react";
import Toast from "./components/ui/Toast.jsx";

export const Cartcontext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("brandless-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("brandless-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (!toastMessage) return;

    const timeoutId = window.setTimeout(() => {
      setToastMessage("");
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  const showToast = (message) => {
    if (!message) return;
    setToastMessage(message);
  };

  const addToCart = (product) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === product.id);
      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Number(item.quantity || 1) + 1 }
            : item,
        );
      }

      return [
        ...previousItems,
        { ...product, quantity: Number(product.quantity || 1) },
      ];
    });

    showToast(`${product.name} added to cart`);
  };

  const clearCart = () => {
    setCartItems([]);
    try {
      localStorage.setItem("brandless-cart", JSON.stringify([]));
    } catch {
      // ignore storage access errors
    }
  };
  const removeItemFromCart = (productId) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== productId),
    );
  };
  const increment = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Number(item.quantity) + 1 }
          : item,
      ),
    );
  };
  const decrement = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && Number(item.quantity) > 1
          ? { ...item, quantity: Number(item.quantity) - 1 }
          : item,
      ),
    );
  };
  const itemCount = useMemo(
    () =>
      cartItems.reduce((total, item) => total + Number(item.quantity || 0), 0),
    [cartItems],
  );
  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + Number(item.price) * Number(item.quantity || 0),
        0,
      ),
    [cartItems],
  );
  return (
    <Cartcontext.Provider
      value={{
        cartItems,
        removeItemFromCart,
        addToCart,
        increment,
        decrement,
        clearCart,
        itemCount,
        cartTotal,
        toastMessage,
        showToast,
      }}
    >
      {children}
      <Toast message={toastMessage} />
    </Cartcontext.Provider>
  );
}
