import React from "react";
import "./CartDisplay.css";
import { BsBoxSeam } from "react-icons/bs";

const CartDisplay = () => {
  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2>
          Shopping Cart <span> 2 Items</span>
        </h2>
        <div className="delivery-data">
          <BsBoxSeam />
          <p>Package will be delivered by Mōde</p>
        </div>
        <p>Tomorrow, 10-10 - Mon, 13-10</p>
      </div>
      <div className="cart-right"></div>
    </div>
  );
};

export default CartDisplay;
