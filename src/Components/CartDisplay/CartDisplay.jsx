import React, { useContext } from "react";
import "./CartDisplay.css";
import "./DeliveryEstimate";
import { BsBoxSeam } from "react-icons/bs";
import DeliveryEstimate from "./DeliveryEstimate";
import { ShopContext } from "../../Context/ShopContext";
import CartItem from "../CartItem/CartItem";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CartDisplay = ({ cart_items }) => {
  const { getTotalCartNumber, cartItems } = useContext(ShopContext);

  return (
    <div>
      {getTotalCartNumber(cartItems) > 0 ? (
        <div className="cart-container">
          <div className="cart-left">
            <h2>
              Shopping Cart{" "}
              <span> ({getTotalCartNumber(cartItems)} Items)</span>
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
            <p className="cart-info">
              {" "}
              <IoIosInformationCircleOutline /> The items in your shopping cart
              are not reserved for you.
            </p>
          </div>
          <div className="cart-right-payment">
            <div className="total">
              <p>Subtotal</p>
              <p>€ total</p>
            </div>
            <div className="total">
              <p>Dispatch</p>
              <p>€ total</p>
            </div>
            <hr style={{ width: "90%" }} />
            <div className="total">
              <p>
                Total price{" "}
                <span style={{ fontSize: "12px" }}>including VAT</span>
              </p>{" "}
              <p>€ total</p>
            </div>
            <button>Checkout</button>
            <div className="payment-options-container">
              <p>We accept</p>
              <div className="payment-options-img">
                <img
                  src={process.env.PUBLIC_URL + "/logos/visa.png"}
                  alt="Visa"
                />
                <img
                  src={process.env.PUBLIC_URL + "/logos/applepay-black.png"}
                  alt="Apple Pay"
                />
                <img
                  src={process.env.PUBLIC_URL + "/logos/googlepay.png"}
                  alt="Google Pay"
                />
                <img
                  src={process.env.PUBLIC_URL + "/logos/klarna.svg"}
                  alt="Klarna"
                />
                <img
                  src={process.env.PUBLIC_URL + "/logos/ideal.png"}
                  alt="iDEAL"
                />
                <img
                  src={process.env.PUBLIC_URL + "/logos/mastercard.svg"}
                  alt="MasterCard"
                />
                <img
                  src={process.env.PUBLIC_URL + "/logos/paypal.svg"}
                  alt="PayPal"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <div>
            <FaBagShopping />
          </div>

          <h2>Your shopping cart is still empty.</h2>
          <p>Discover what we have for you!</p>
          <Link to='/'>
            <p>Get Inspired</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartDisplay;
