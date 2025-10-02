import React from "react";
import "./Breadcrum.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum-list">
      <Link to="/">HOME</Link>
      <IoIosArrowForward />
      <Link to="/"> SHOP</Link>
      <IoIosArrowForward />
       <Link to={`/${product.category}`}>
        {product.category}
      </Link>

      <IoIosArrowForward />
      <p>{product.name}</p>
    </div>
  );
};

export default Breadcrum;
