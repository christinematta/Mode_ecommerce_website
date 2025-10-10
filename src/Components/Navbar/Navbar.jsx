import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

import logo from "../Assets/MODE-logo.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const menuItems = ["shop", "men", "women", "kids"];
const Navbar = ({onLoginClick}) => {
  const [menu, setMenu] = useState("shop");
  const location = useLocation()
  const {getTotalCartNumber, cartItems,} = useContext(ShopContext)

  return (
    <div className="navbar">
      <Link to="/" className="link-reset" style={{display:"flex"}}>
       <div className="nav-logo">
        <img src={logo} alt="logo_icon" />
      </div></Link>


      <ul className="nav-menu">
        {menuItems.map((item, index) => (
          <li
            key={item}
            className={`${menu === item ? "active" : ""}`}
            onClick={() => {
              setMenu(item);
            }}
          >
            <Link to={index === 0 ? "/" : `/${item}`} className="link-reset">
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {menu === item && <hr></hr>}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        {" "}
        <Link to={location.pathname} className="link-reset" onClick={onLoginClick}>
          <FontAwesomeIcon icon={faUser} className="icon user-icon" />
        </Link>
        <Link to="/cart"  className="link-reset">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faBagShopping} className="icon cart-icon" />
            <div className="nav-cart-count">{getTotalCartNumber( cartItems,)}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
