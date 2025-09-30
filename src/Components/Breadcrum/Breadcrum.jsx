import React from "react";
import "./Breadcrum.css";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum-list">
      <p>HOME</p>
      <IoIosArrowForward />
      <p>SHOP</p>
      <IoIosArrowForward />
      <p>{product.category}</p>
      <IoIosArrowForward />
      <p>{product.name}</p>
    </div>
  );
};

export default Breadcrum;
