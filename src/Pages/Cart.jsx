import React, { useContext } from "react";
import CartDisplay from "../Components/CartDisplay/CartDisplay";
import { ShopContext } from "../Context/ShopContext";
const Cart = () => {
  const { all_Product, cartItems } = useContext(ShopContext);
  const cart_items = all_Product.filter((item) => cartItems[item.id] > 0);
  return <CartDisplay cart_items={cart_items} />;
};

export default Cart;
