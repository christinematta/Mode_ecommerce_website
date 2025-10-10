import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";

import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_Product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_Product.find((e) => e.id === Number(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      

    </div>
  );
};

export default Product;
