// src/Components/ItemsList/ItemsList.jsx
import React from "react";
import './PopularList.css'
import Item from "../Item/Item";
import products from "../Assets/all_product";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";

const ItemsList = () => {
  const womenProduct = products.filter((item) => item.category === "women");

  return (
    <div className="popular-container">
      <Header header={"popular in women"} />
      <div className="items-grid">
        <Carousel
          items={womenProduct}
          settings={{
            slidesToShow: 4,
            slidesToScroll: 1,
          }}
          renderItem={(item) => (
            <Item
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ItemsList;
