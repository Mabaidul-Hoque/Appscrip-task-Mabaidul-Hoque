import React from "react";
import "./products.css";
import Filter from "../filter/Filter";
import Recomendation from "../recommended/Recommended";
import { Divider } from "@/components/ui";
import ProductsContainer from "./ProductsContainer";

const products = () => {
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
        <Filter />
        <div className="vertical_divider" />
        <Recomendation />
      </div>

      <Divider />
      {/* Display Products */}
      <ProductsContainer />
    </div>
  );
};

export default products;
