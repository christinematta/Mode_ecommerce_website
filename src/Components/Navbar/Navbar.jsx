import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";

import logo from "../Assets/MODE-logo.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const menuItems = ["shop", "men", "women", "kids"];

const Navbar = ({ onLoginClick }) => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalCartNumber, cartItems } = useContext(ShopContext);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="link-reset nav-logo">
        <img src={logo} alt="logo_icon" />
      </Link>

      <ul className="nav-menu desktop-menu">
        {menuItems.map((item, index) => (
          <li
            key={item}
            className={`${menu === item ? "active" : ""}`}
            onClick={() => setMenu(item)}
          >
            <Link to={index === 0 ? "/" : `/${item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {menu === item && <hr />}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-login-cart">
        <Link to={location.pathname} onClick={onLoginClick}>
          <FaRegUser className="icon user-icon" />
        </Link>

        <Link to="/cart">
          <div className="icon-wrapper">
            <IoBagHandleOutline className="icon cart-icon" />
            <div
              className={
                getTotalCartNumber(cartItems) > 0 ? "nav-cart-count" : "hidden"
              }
            >
              {getTotalCartNumber(cartItems) > 0 &&
                getTotalCartNumber(cartItems)}
            </div>
          </div>
        </Link>

        {isMenuOpen ? (
          <Link>
            <RxCross2 onClick={toggleMenu} className="burger-menu" />
          </Link>
        ) : (
          <Link>
            <GiHamburgerMenu onClick={toggleMenu} className="burger-menu" />
          </Link>
        )}
      </div>

      {isMenuOpen && (
        <ul className="nav-menu mobile-menu">
          {menuItems.map((item, index) => (
            <li
              key={item}
              className={`${menu === item ? "active" : ""}`}
              onClick={() => {
                setMenu(item);
                closeMenu();
              }}
            >
              <Link to={index === 0 ? "/" : `/${item}`} className="link-reset">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
