import React, { createContext, useState } from "react";
import all_Product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {


  const getDefaultCart = () => {
    let cart = {};
    all_Product.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.Max(prev[itemId] - 1, 0),
    }));
  };
  const getTotalCartNumber = (cartItems)=>{
return Object.values(cartItems).reduce((acc,cur)=>acc + cur,0)
  }
   const contextValue = { all_Product,cartItems, addToCart,removeFromCart,getTotalCartNumber};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
