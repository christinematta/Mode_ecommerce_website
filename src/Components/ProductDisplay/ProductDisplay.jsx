import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import SizeDropdown from "../SizeDropdown/SizeDropdown";
import RatingStars from "../RatingStars/RatingStars";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import ProductTabs from "../ProductTabs/ProductTabs";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = () => {
  const [isFav, setIsFav] = useState(false);
  const{selectedProduct} = useContext(ShopContext)
  if (!selectedProduct) return null;
  const salePercentage = Math.ceil(
    ((selectedProduct.old_price - selectedProduct.new_price) / selectedProduct.old_price) * 100
  );
  return (
    <div className="display-container">
      <div className="display-top">
        <div className="display-left">
          <div className="display-imglist">
            <img src={selectedProduct.image} alt="" />
            <img src={selectedProduct.image} alt="" />
            <img src={selectedProduct.image} alt="" />
            <img src={selectedProduct.image} alt="" />
          </div>
          <div className="display-main-img">
            <img src={selectedProduct.image} alt="" />
          </div>
        </div>
        <div className="display-right">
          <h3>{selectedProduct.name}</h3>
          <div className="product-rating">
            <RatingStars rating={selectedProduct.rating} />
            <p>{`${selectedProduct.reviewsCount} reviews`}</p>
          </div>
          <div className="product-price">
            <p>{`€${selectedProduct.new_price}`}</p>
            <p>{`€${selectedProduct.old_price}`}</p>
            <p>{`${salePercentage}%`}</p>
          </div>
          <p>{selectedProduct.description}</p>
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
        <ProductTabs product={selectedProduct}/>
      </div>
    </div>
  );
};

export default ProductDisplay;
