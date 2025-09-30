import React, { useState } from "react";
import "./SizeDropdown.css";
const SizeDropdown = () => {
  const [size, setSize] = useState("");

  const handleChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div className="size-dropdown">
      <label htmlFor="size">Select Size</label>
      <select id="size" value={size} onChange={handleChange}>
        <option value="" disabled hidden>
          Choose Size
        </option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
    </div>
  );
};

export default SizeDropdown;
