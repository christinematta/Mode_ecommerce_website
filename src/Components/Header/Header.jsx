import React from "react";
import "./Header.css";
const Header = ({ header }) => {
  return (
    <div className="header-container">
      <div className="header">
        <h1>{header}</h1>
        <hr />
      </div>
    </div>
  );
};

export default Header;
