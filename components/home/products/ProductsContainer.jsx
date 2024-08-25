"use client";
import { getAllProducts } from "@/apis/productsApi";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./products.css";
import { useProducts } from "@/contexts/ProductsDataProvider";
import { Loader } from "@/components/ui";
import { productsData } from "@/components/staticData/apiData";

const ProductsContainer = () => {
  const { products, setProducts, filteredProducts, isLodaing, setisLoading } =
    useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setisLoading(true);
    const data = await getAllProducts();
    console.log("data from api", data);
    if (data) {
      setProducts(data);
    } else {
      setProducts(productsData);
    }

    setisLoading(false);
  };

  console.log("filteredProducts", filteredProducts);
  console.log("products", products);

  return (
    <div className="products_container">
      {!isLodaing ? (
        (filteredProducts?.length > 0 ? filteredProducts : products)?.map(
          (product) => <Product product={product} />
        )
      ) : (
        <div className="loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ProductsContainer;
