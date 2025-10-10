import React, { useContext, useState } from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { IoMdClose } from "react-icons/io";

const CartItem = ({ cart_items }) => {
  const [isFav, setIsFav] = useState(false);
  const { cartItems, addToCart, removeFromCart, deleteItemFromCart } =
    useContext(ShopContext);
  return (
    <div className="cart-item-list">
      {cart_items.map((item) => (
        <div className="cart-item-container" key={item.id}>
          <div className="cart-item">
            <div className="cartitem-left">
              <img src={item.image} alt={item.name} className="cart-item-img" />
            </div>

            <div className="cartitem-right">
              <div className="item-data">
                <h4>{item.name}</h4>
                <p>€ {item.new_price * cartItems[item.id]}</p>
                <p>Size: M</p>

                <div className="item-control">
                  <div className="item-quantity">
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    <span>{cartItems[item.id]}</span>
                    <button onClick={() => addToCart(item.id)}>+</button>
                  </div>
                  <div className="item-delete">
                    <IoMdClose onClick={() => deleteItemFromCart(item.id)} />
                  </div>
                </div>

                <div className="add-fav">
                  <Link onClick={(item) => setIsFav(true)}>
                    {isFav ? "on your wishlist" : "Add to your wishlist"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ width: "100%" }} />
        </div>
      ))}
    </div>
  );
};

export default CartItem;
