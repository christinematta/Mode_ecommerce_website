import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = ({ product }) => {
  const salePercentage = Math.ceil(
    ((product.old_price - product.new_price) / product.old_price) * 100
  );
  return (
    <div className="display-container">
      <div className="display-left">
        <div className="display-imglist">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-main-img">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="display-right">
        <h3>{product.name}</h3>
        <div className="product-rating">
          <p>{product.rating}</p>
          <p>{product.reviews}</p>
        </div>
        <div className="product-price">
          <p>{`€${product.new_price}`}</p>
          <p>{`€${product.old_price}`}</p>
          <p>{`${salePercentage}%`}</p>
        </div>
        <p>{product.description}</p>
        <div className="product-size">
          <p>Select Size</p>
          <div className="product-size-label">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XLL</button>
          </div>
          <button>Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
