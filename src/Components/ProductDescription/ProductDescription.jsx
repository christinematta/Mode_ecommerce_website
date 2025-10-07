import React from "react";
import "./ProductDescription.css";
const ProductDescription = ({product}) => {
  return (
    <div className="product-container">
      <h1 className="product-title">Classic Cotton T-Shirt</h1>

      <p className="product-description">
        {`Step up your style with this premium-quality ${product.name}. Crafted from
        high-quality materials, it offers the perfect balance of comfort,
        durability, and modern design. Whether you’re dressing up for a casual
        outing or keeping it relaxed, this piece ensures you look and feel your
        best all day long.`}
      </p>

      <h2 className="section-title">Features</h2>
      <ul className="feature-list">
        <li>Soft, breathable, and durable fabric</li>
        <li>Comfortable fit for everyday wear</li>
        <li>Stylish design that complements any outfit</li>
        <li>Easy to wash and maintain</li>
      </ul>

      <h2 className="section-title">Product Details</h2>
      <p>
        <strong>Material:</strong> 100% Cotton
      </p>
      <p>
        <strong>Fit Type:</strong> Regular
      </p>
      <p>
        <strong>Care Instructions:</strong> Machine wash cold, tumble dry low
      </p>

      <h2 className="section-title">Style Tip</h2>
      <p>
        Pair it with your favorite jeans or shorts for a complete and relaxed
        look — perfect for daily wear or weekend outings.
      </p>
    </div>
  );
};

export default ProductDescription;
