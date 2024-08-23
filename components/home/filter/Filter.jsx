"use client";
import React, { useEffect, useState } from "react";
import "./filter.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useProducts } from "@/contexts/ProductsDataProvider";
import { getAllProducts } from "@/apis/productsApi";

const Filter = () => {
  const [showIdealCat, setShowIdealCat] = useState(true);
  const [showOtherCat, setShowOtherCat] = useState(false);

  const [categories, setCategories] = useState({
    menClothing: true,
    womensClothing: true,
    jewelery: true,
    electronics: true,
    all: true,
  });

  const [selectedCategory, setSelectedCategory] = useState("");

  const { setProducts, setFilteredProducts, setisLoading } = useProducts();

  useEffect(() => {
    getFilteredProduct(selectedCategory);
  }, [selectedCategory]);

  const getFilteredProduct = async (selectedCategory) => {
    setisLoading(true);
    if (selectedCategory && selectedCategory !== "all") {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => {
          setFilteredProducts((prev) => [...prev, ...data]);
          setisLoading(false);
        });
    } else if (selectedCategory === "all") {
      setFilteredProducts([]);
      const data = await getAllProducts();
      setProducts(data);
      setCategories({
        menClothing: true,
        womensClothing: true,
        jewelery: true,
        electronics: true,
      });
      setisLoading(false);
    }
    setisLoading(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="filter_section">
      {/* IDEAL FOR MEN AND WOMEN SECTION */}
      <div>
        <div
          className="ideal_cat_btn"
          onClick={() => setShowIdealCat(!showIdealCat)}
        >
          <h3>Ideal For</h3>
          {showIdealCat ? <SlArrowUp /> : <SlArrowDown />}
        </div>

        <button
          className="all_btn"
          onClick={() => {
            setCategories({
              ...categories,
              all: !categories.all,
            });
            if (!categories.all) {
              // handleCategoryChange("");
            } else {
              handleCategoryChange("all");
            }
          }}
        >
          All
        </button>

        {showIdealCat && (
          <div className="diff_cat">
            <button
              className="unselect_btn"
              onClick={() => {
                setCategories({
                  ...categories,
                  all: !categories.all,
                });
                if (!categories.all) {
                  // handleCategoryChange("");
                } else {
                  handleCategoryChange("all");
                }
              }}
            >
              Unselect all
            </button>

            <div className="man_cat">
              <input
                type="checkbox"
                checked={!categories.menClothing}
                onChange={() => {
                  setCategories({
                    ...categories,
                    menClothing: !categories.menClothing,
                  });
                  if (!categories.menClothing) {
                    // handleCategoryChange("");
                  } else {
                    handleCategoryChange("men's clothing");
                  }
                }}
              />
              <span>Men</span>
            </div>

            <div className="woman_cat">
              <input
                type="checkbox"
                checked={!categories.womensClothing}
                onChange={() => {
                  setCategories({
                    ...categories,
                    womensClothing: !categories.womensClothing,
                  });
                  if (!categories.womensClothing) {
                    // handleCategoryChange("");
                  } else {
                    handleCategoryChange("women's clothing");
                  }
                }}
              />
              <span>Women</span>
            </div>
          </div>
        )}
      </div>

      {/* OTHERS CATEGORY SECTION */}
      <div>
        <div
          className="other_cat_btn"
          onClick={() => setShowOtherCat(!showOtherCat)}
        >
          <h3>Other Category</h3>
          {showOtherCat ? <SlArrowUp /> : <SlArrowDown />}
        </div>

        <button
          className="all_btn"
          onClick={() => {
            setCategories({
              ...categories,
              all: !categories.all,
            });
            if (!categories.all) {
              // handleCategoryChange("");
            } else {
              handleCategoryChange("all");
            }
          }}
        >
          All
        </button>

        {showOtherCat && (
          <div className="diff_cat">
            <button
              className="unselect_btn"
              onClick={() => {
                setCategories({
                  ...categories,
                  all: !categories.all,
                });
                if (!categories.all) {
                  // handleCategoryChange("");
                } else {
                  handleCategoryChange("all");
                }
              }}
            >
              Unselect all
            </button>

            <div className="electronics_cat">
              <input
                type="checkbox"
                checked={!categories.electronics}
                onChange={() => {
                  setCategories({
                    ...categories,
                    electronics: !categories.electronics,
                  });
                  if (!categories.electronics) {
                    // handleCategoryChange("");
                  } else {
                    handleCategoryChange("electronics");
                  }
                }}
              />
              <span>Electronics</span>
            </div>

            <div className="jewellery_cat">
              <input
                type="checkbox"
                checked={!categories.jewelery}
                onChange={() => {
                  setCategories({
                    ...categories,
                    jewelery: !categories.jewelery,
                  });
                  if (!categories.jewelery) {
                    // handleCategoryChange("");
                  } else {
                    handleCategoryChange("jewelery");
                  }
                }}
              />
              <span>Jewellery</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
