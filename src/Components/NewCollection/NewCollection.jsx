import React from "react";
import "./NewCollection.css";

import newcollection from "../Assets/new_collections";
import Item from "../Item/Item";
import Header from "../Header/Header";

const NewCollection = () => {
  return (
    <div className="newcollection-container">
      <Header header={"New Collection"}/>
      <div className="newcollection-grid">
        {newcollection.map((item) => (
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
  );
};

export default NewCollection;
