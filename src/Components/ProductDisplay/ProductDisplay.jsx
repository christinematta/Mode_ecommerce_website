import React from "react";
import "./ProductDisplay.css";
import SizeDropdown from "../SizeDropdown/SizeDropdown";
import RatingStars from "../RatingStars/RatingStars";

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
          <RatingStars rating={product.rating}/>
          <p>{product.reviews}</p>
        </div>
        <div className="product-price">
          <p>{`€${product.new_price}`}</p>
          <p>{`€${product.old_price}`}</p>
          <p>{`${salePercentage}%`}</p>
        </div>
        <p>{product.description}</p>
        <SizeDropdown />
        <div>
          <button>Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
