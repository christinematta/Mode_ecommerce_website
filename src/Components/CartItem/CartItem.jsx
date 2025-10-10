import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ cart_items }) => {
  return (
    <div className="cart-item-list">
      {cart_items.map((item) => (
        <div className="cart-item-container" key={item.id}>
          <div className="cartitem-left">
            <img src={item.image} alt={item.name} className="cart-item-img" />
          </div>

          <div className="cartitem-right">
            <div className="item-data">
              <h3>{item.name}</h3>
              <p>€{item.new_price}</p>
              <p>Size: M</p>
              <Link to="/wishlist" className="wishlist-link">
                Add to your wishlist
              </Link>
            </div>

            <div className="item-quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
