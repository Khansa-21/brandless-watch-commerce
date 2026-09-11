/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from "react";
import productsData from "./data/products.json";
// context create
export const Productcontext = createContext();
// provider component
export const ProductProvider = ({ children }) => {
  return (
    <Productcontext.Provider value={{ productsData }}>
      {children}
    </Productcontext.Provider>
  );
};
