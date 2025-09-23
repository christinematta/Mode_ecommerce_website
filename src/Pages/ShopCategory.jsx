import { React, useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { IoIosArrowDown } from "react-icons/io";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_Products } = useContext(ShopContext);

  const filtered_category = all_Products.filter(
    (item) => item.category === props.category
  );
  return (
    <div className="shop-category">
      <div className="shopcategory-banner">
        <img src={props.banner} alt="" />
        <div className="shopcatecory-right">
          <h1 className="category-title">{`${props.category} Collection`}</h1>
          <div className="category-details">
            <p>Only This Month</p>
            <h3>Extra 20% off</h3>
          </div>

          <button className="category-btn">Explore Now</button>
        </div>
      </div>
      <div className="shopcategory-listitem">
        <div className="category-sort">
          <p>
            <span>Showing 1-12</span> out of 36 products.
          </p>
          <button className="sort-btn">
            {" "}
            <span>Sort by</span> <IoIosArrowDown />
          </button>
        </div>
        <div className="category-item">
          {filtered_category.map((item) => (
            <Item
            key={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
