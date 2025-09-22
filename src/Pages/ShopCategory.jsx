import { React, useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {
  const { all_Products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shop-category-banner">
        <img src={props.banner} alt="" />
        <div className="shop-catecory-right">
          <h1 className="category-title">{`${props.category} Collection`}</h1>
          <div className="category-details">
            <p>Only This Month</p>
            <h3>Extra 20% off</h3>
          </div>

          <button className="category-btn">Explore Now</button>
        </div>
      </div>
      <div className="shop-category-list"></div>
    </div>
  );
};

export default ShopCategory;
