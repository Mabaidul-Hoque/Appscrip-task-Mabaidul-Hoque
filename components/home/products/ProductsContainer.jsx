"use client";
import { getAllProducts } from "@/apis/productsApi";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { IoMdHeartEmpty } from "react-icons/io";
import "./products.css";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await getAllProducts();
    console.log(data);
    setProducts(data);
  };

  return (
    <div className="products_container">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
