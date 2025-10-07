import React, { useState } from "react";
import "./ProductDisplay.css";
import SizeDropdown from "../SizeDropdown/SizeDropdown";
import RatingStars from "../RatingStars/RatingStars";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import ProductTabs from "../ProductTabs/ProductTabs";

const ProductDisplay = ({ product }) => {
  const [isFav, setIsFav] = useState(false);
  const salePercentage = Math.ceil(
    ((product.old_price - product.new_price) / product.old_price) * 100
  );
  return (
    <div className="display-container">
      <div className="display-top">
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
            <RatingStars rating={product.rating} />
            <p>{`${product.reviewsCount} reviews`}</p>
          </div>
          <div className="product-price">
            <p>{`€${product.new_price}`}</p>
            <p>{`€${product.old_price}`}</p>
            <p>{`${salePercentage}%`}</p>
          </div>
          <p>{product.description}</p>
          <SizeDropdown />
          <div className="product-action-box">
            <button className="add-cart-btn">Add to Card</button>
            <button
              className={`fav-btn ${isFav}?"active":""`}
              onClick={() => {
                setIsFav(!isFav);
              }}
            >
              {isFav ? <FaHeart className="fav-btn-color" /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      </div>
      <div className="display-bottom">
        <ProductTabs product={product}/>
      </div>
    </div>
  );
};

export default ProductDisplay;
