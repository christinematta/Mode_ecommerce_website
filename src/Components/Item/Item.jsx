import React from "react";
import "./Item.css";

const Item = ({ image, name, new_price, old_price }) => {
  const salePercentage = Math.ceil(((old_price - new_price) / old_price) * 100);
  return (
    <div className="item">
      <img src={image} alt={name} className="item-image" />
      <p className="item-name">{name}</p>
      <div className="item-prices">
        <div className="item-price-new">{`€${new_price}`}</div>
        <div className="item-price-old">{`€${old_price}`}</div>
        <div className="percentage">{`${salePercentage}%`}</div>
      </div>
    </div>
  );
};


export default Item;
