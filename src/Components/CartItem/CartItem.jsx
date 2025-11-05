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
 {Object.entries(cartItems).map(([key, qty]) => {

  const [id, size] = key.split("_");
  const item = cart_items.find((p) => p.id.toString() === id);

  if (!item) return null;

  return (
    <div className="cart-item-container" key={key}>
      <div className="cart-item">
        <div className="cartitem-left">
          <img src={item.image} alt={item.name} className="cart-item-img" />
        </div>

        <div className="cartitem-right">
          <div className="item-data">
            <h4>{item.name}</h4>
            <p>€ {item.new_price * qty}</p>
            <p>Size: {size}</p>

            <div className="item-control">
              <div className="item-quantity">
                <button onClick={() => removeFromCart(id, size)}>-</button>
                <span>{qty}</span>
                <button onClick={() => addToCart(id, size)}>+</button>
              </div>

              <div className="item-delete">
                <IoMdClose onClick={() => deleteItemFromCart(id, size)} />
              </div>
            </div>

            <div className="add-fav">
              <Link onClick={() => setIsFav(true)}>
                {isFav ? "on your wishlist" : "Add to your wishlist"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ width: "100%" }} />
    </div>
  );
})}

    </div>
  );
};

export default CartItem;
