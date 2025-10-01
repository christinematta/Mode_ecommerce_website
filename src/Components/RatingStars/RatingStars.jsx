import React from 'react'
import './RatingStars.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  // rating = number between 0 and 5, e.g. 3.5
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // full star
      stars.push(<FaStar key={i} className="star full" />);
    } else if (rating >= i - 0.5) {
      // half star
      stars.push(<FaStarHalfAlt key={i} className="star half" />);
    } else {
      // empty star
      stars.push(<FaRegStar key={i} className="star empty" />);
    }
  }

  return <div className="rating-stars">{stars}</div>;
};
export default RatingStars
