import React from "react";
import "./Offers.css";
import cupon from "../Assets/sale_cupon.png";

const Offers = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="offers-container">
      <div className="offers-left">
        <span className="year">{currentYear}</span>
        <div className="headline-wrapper">
          <h1 className="headline">
            special
            <br />
            offers
          </h1>
        </div>
        <div className="cupon-img">
          <img src={cupon} alt="" />
        </div>
      </div>
      <div className="offers-right">
        <button className="shop-btn">Shop now</button>
      </div>
    </div>
  );
};

export default Offers;
