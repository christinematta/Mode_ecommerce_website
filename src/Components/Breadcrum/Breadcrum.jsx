import React from "react";
import "./Breadcrum.css";
import { IoIosArrowForward } from "react-icons/io";


const Breadcrum = ({product}) => {
  return (
    <div>
      <p>
        HOME
        <IoIosArrowForward />
        SHOP
        <IoIosArrowForward />
        {product.category}
        <IoIosArrowForward />
        {product.name}
      </p>
    </div>
  );
};

export default Breadcrum;
