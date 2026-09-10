import React, { createContext, useEffect, useMemo, useState } from "react";
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

  useEffect(() => {
    localStorage.setItem("brandless-cart", JSON.stringify(cartItems));
  }, [cartItems]);

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
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const removeItemFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
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
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
}
