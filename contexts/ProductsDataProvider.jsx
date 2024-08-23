"use client";
import React, { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("Something is wrong with the ProductsContext");
  }
  return context;
};

const ProductsDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const data = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
  };
  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductsDataProvider;
