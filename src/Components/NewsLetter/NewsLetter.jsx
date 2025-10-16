import React from "react";
import "./NewsLetter.css";
import newsletter from "../Assets/newsletter.jpg";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-left">
        <img src={newsletter} alt="" />
      </div>
      <div className="newsletter-right">
        <div className="newsletter-title">
          <p className="sub-title">First Time?</p>
          <h2 className="title">Sign up and get 20% off your first order</h2>
        </div>

        <div className="email-box">
          <input
            type="email"
            className="email-input"
            id=""
            placeholder="Enter your email"
          ></input>
          <button className="email-btn">
            <IoArrowRedoCircleSharp />
          </button>
        </div>
        <p className="subscribe-title">
          Subscribe and be the first to hear about new arrivals, special
          promotions and online exclusives.{" "}
        </p>
        <div className="social-media-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaXTwitter />
  </a>

  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>

  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
