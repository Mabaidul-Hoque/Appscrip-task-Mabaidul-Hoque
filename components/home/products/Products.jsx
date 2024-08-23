"use client";
import React, { useState } from "react";
import "./products.css";
import Filter from "../filter/Filter";
import Recomendation from "../recommended/Recommended";
import { Divider } from "@/components/ui";
import ProductsContainer from "./ProductsContainer";
import { useProducts } from "@/contexts/ProductsDataProvider";
import { SlArrowRight } from "react-icons/sl";

const products = () => {
  const {
    products,

    filteredProducts,
  } = useProducts();
  const [showFilter, setShowFilter] = useState(true);
  return (
    <div>
      <div className="discover_products">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <Divider />

      {/* Filter and Recomendation Section */}
      <div className="filter_rec_container">
        <div className="filter_totalItem_container">
          <p>
            {filteredProducts.length > 0
              ? filteredProducts?.length
              : products?.length}{" "}
            ITEMS
          </p>
          <SlArrowRight className="right_arrow" />

          <button className="filter_btn_m">Filter</button>

          <button
            className="filter_btn_d"
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? "Hide Filter" : "Show Filter"}
          </button>
        </div>

        <div className="vertical_divider" />
        <Recomendation />
      </div>

      <Divider />
      <div className="filter_product_display_container">
        {showFilter && <Filter />}

        {/* Display Products */}
        <ProductsContainer />
      </div>
    </div>
  );
};

export default products;
