import React, { useContext } from "react";
import CartDisplay from "../Components/CartDisplay/CartDisplay";
import { ShopContext } from "../Context/ShopContext";
const Cart = () => {
  const { all_Product, cartItems } = useContext(ShopContext);
  const cart_items = all_Product.filter((item) => cartItems[item.id] > 0);
  const item_cost = cart_items.map((item)=>(item.new_price * cartItems[item.id]));
  const total_cost = item_cost.reduce((acc,curr)=> acc + curr ,0)

  return <CartDisplay cart_items={cart_items} total_cost={total_cost} />;
};

export default Cart;
