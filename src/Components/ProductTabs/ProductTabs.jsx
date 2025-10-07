import React, { useState } from "react";
import "./ProductTabs.css";
import ReviewSection from "../ReviewSection/ReviewSection";
import ProductDescription from "../ProductDescription/ProductDescription";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div className="product-tabs">
      <div className="tab-buttons">
        <button
          className={activeTab === "description" ? "active" : "inactive"}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={activeTab === "reviews" ? "active" : "inactive"}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className="tab-content">
      {activeTab === "description" ? (
        <ProductDescription product={product} />
      ) : (
        <ReviewSection product={product} />
      )}
      </div>
    </div>
  );
};

export default ProductTabs;
