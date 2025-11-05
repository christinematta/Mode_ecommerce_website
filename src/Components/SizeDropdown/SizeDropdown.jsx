import React, { forwardRef } from "react";
import "./SizeDropdown.css";

const SizeDropdown = forwardRef(({ size, setSize }, ref) => {
  return (
    <div className="size-dropdown">
      <label htmlFor="size">Select Size</label>
      <select
        ref={ref}
        id="size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
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
});

export default SizeDropdown;
