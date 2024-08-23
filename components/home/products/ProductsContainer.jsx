"use client";
import { getAllProducts } from "@/apis/productsApi";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./products.css";
import { useProducts } from "@/contexts/ProductsDataProvider";

const ProductsContainer = () => {
  const { products, setProducts, filteredProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await getAllProducts();
    console.log(data);
    setProducts(data);
  };

  console.log("filteredProducts", filteredProducts);

  return (
    <div className="products_container">
      {(filteredProducts?.length > 0 ? filteredProducts : products).map(
        (product) => (
          <Product product={product} />
        )
      )}
    </div>
  );
};

export default ProductsContainer;
