import React, { useContext } from "react";
import CartDisplay from "../Components/CartDisplay/CartDisplay";
import { ShopContext } from "../Context/ShopContext";
const Cart = () => {
  const { all_Product } = useContext(ShopContext);
  return <CartDisplay cart_items={all_Product}  />;
};

export default Cart;
