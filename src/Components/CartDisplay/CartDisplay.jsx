import React, { useContext } from "react";
import "./CartDisplay.css";
import "./DeliveryEstimate";
import { BsBoxSeam } from "react-icons/bs";
import DeliveryEstimate from "./DeliveryEstimate";
import { ShopContext } from "../../Context/ShopContext";
import CartItem from "../CartItem/CartItem";

const CartDisplay = ({ cart_items }) => {
  const { getTotalCartNumber, cartItems } = useContext(ShopContext);

  return (
    <div className="cart-container">
      {getTotalCartNumber(cartItems)>0?<div className="cart-left">
        <h2>
          Shopping Cart <span> ({getTotalCartNumber(cartItems)} Items)</span>
        </h2>
        <div className="delivery-data">
          <div className="delivery-data-header">
            <BsBoxSeam />
            <p>Package will be delivered by Mōde </p>
          </div>
          <div className="delivery-estimate">
            <DeliveryEstimate />
          </div>
        </div>

        <CartItem cart_items={cart_items} />

      </div>:<h1>Shopping Cart is empty</h1>}

      <div className="cart-right"></div>
    </div>
  );
};

export default CartDisplay;
