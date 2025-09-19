import React, { createContext } from "react";
import all_Products from "../Components/Assets/all_product";

const shopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_Products };
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
