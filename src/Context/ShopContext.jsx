import React, { createContext, useState, useEffect } from "react";
import all_Product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id, size) => {
    if (!size) return;
    const key = `${id}_${size}`;
    setCartItems((prev) => ({
      ...prev,
      [key]: (prev[key] ?? 0) + 1,
    }));
  };
   const removeFromCart = (id, size) => {
    const key = `${id}_${size}`;
    setCartItems((prev) => {
      const current = prev[key] ?? 0;
      if (current <= 1) {
        const { [key]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: current - 1 };
    });
  };
  const deleteItemFromCart = (id, size) => {
    const key = `${id}_${size}`;
    setCartItems((prev) => {
      const { [key]: _, ...rest } = prev;
      return rest;
    });
  };
   const getTotalCartNumber = (items = cartItems) =>
    Object.values(items).reduce((acc, cur) => acc + cur, 0);

  useEffect(() => {
    console.log("🛍️ Cart changed:", cartItems);
  }, [cartItems]);

  const contextValue = {
    all_Product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartNumber,
    deleteItemFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
