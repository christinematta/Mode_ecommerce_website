import React,{useContext} from "react";
import "./ReviewSection.css";
import { ShopContext } from "../../Context/ShopContext";
import RatingStars from "../RatingStars/RatingStars";
const ReviewSection = () => {
  const {selectedProduct} = useContext(ShopContext)
  return (
    <div className="reviews-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-summary">
        <div className="rating-box">
          <h1>{selectedProduct.rating} </h1>
          <div className="stars">
            <RatingStars rating={selectedProduct.rating} />
          </div>
          <p>Based on {selectedProduct.reviews.length} reviews</p>
        </div>
        <button className="write-review-btn">Write a Review</button>
      </div>
      {selectedProduct.reviews.map((r, i) => (
        <div key={i} className="review-card">
          <p>{r.name}</p>
          <p className="review-date">{r.date}</p>
          <RatingStars rating={r.rating} />
          <p className="review-comment">{r.comment}</p>

        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
