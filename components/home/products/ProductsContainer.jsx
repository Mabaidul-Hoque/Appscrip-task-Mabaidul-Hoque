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
        <div className="product_info_container" key={product.id}>
          <img
            src={product.image}
            width={168}
            height={224}
            alt={product.title}
            className="product_img"
          />
          <div className="product_info">
            <div>
              <p className="product_title">{product.title}</p>
              <p className="signin_text">
                <button className="singin_btn">Sign in</button>
                or Create an account to see pricing
              </p>
            </div>
            <IoMdHeartEmpty size={50} className="fav_icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsContainer;
