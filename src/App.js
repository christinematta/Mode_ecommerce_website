import "./App.css";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar/Navbar";
import women_banner from "./Components/Assets/women_banner.png";
import men_banner from "./Components/Assets/men_banner.png";
import kids_banner from "./Components/Assets/kids_banner.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

function App() {
  const [loginPopUp, setLoginPopUp] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Navbar onLoginClick={() => setLoginPopUp(true)} />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kids" />}
          />
          
          <Route path="/product/:productId" element={<Product />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        {loginPopUp && <LoginPopup onClose={() => setLoginPopUp(false)} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
