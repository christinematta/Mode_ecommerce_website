import React from "react";
import "./Footer.css";
import lightlogo from "../Assets/lightlogo-tbg.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="logo-footer">
          <img src={lightlogo} alt="" />
        </div>
        <div className="footer-details">
          <div className="footer-sections">
            <h4>Shop</h4>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/">Accessories</a>
            <a href="/">Shoes</a>
          </div>
          <div className="footer-sections">
            <h4>Popular</h4>
            <a href="/">Seasonal Favorites</a>
            <a href="/">Must Have Bags</a>
            <a href="/">Cozy Knitwear</a>
            <a href="/">Trendy Accessories</a>
          </div>
          <div className="footer-sections">
            <h4>Support</h4>
            <a href="/">Contact Us</a>
            <a href="/">Account</a>
            <a href="/">Store Location</a>
            <a href="/">Shipping And Delivery</a>
            <a href="/">Returns</a>
          </div>
          <div className="footer-sections">
            <h4>Info</h4>
            <a href="/">About</a>
            <a href="/">Career</a>
            <a href="/">Sustainability</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="payment-options">
          <img src={process.env.PUBLIC_URL + "/logos/visa.png"} alt="Visa" />
          <img src={process.env.PUBLIC_URL + "/logos/applepay.png"} alt="ApplePay" />
          <img src={process.env.PUBLIC_URL + "/logos/googlepay.png"} alt="GooglePay" />
          <img src={process.env.PUBLIC_URL + "/logos/klarna.svg"} alt="Klarna" />
          <img src={process.env.PUBLIC_URL + "/logos/ideal.png"} alt="iDEAL" />
          <img src={process.env.PUBLIC_URL + "/logos/mastercard.svg"} alt="MasterCard" />
          <img src={process.env.PUBLIC_URL + "/logos/paypal.svg"} alt="PayPal" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
