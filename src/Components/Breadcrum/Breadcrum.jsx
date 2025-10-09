import React,{useContext} from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./Breadcrum.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Breadcrum = () => {
  const { selectedProduct } = useContext(ShopContext);
   if (!selectedProduct) return null;
  return (
    <div className="breadcrum-list">
      <Link to="/">HOME</Link>
      <IoIosArrowForward />
      <Link to="/"> SHOP</Link>
      <IoIosArrowForward />
       <Link to={`/${selectedProduct.category}`}>
        {selectedProduct.category}
      </Link>

      <IoIosArrowForward />
      <p>{selectedProduct.name}</p>
    </div>
  );
};

export default Breadcrum;
