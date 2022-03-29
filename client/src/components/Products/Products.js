import React from "react";
import "../../css/Products/Products.css";

const Products = ({ products }) => {
  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}</span>
          </div>
          <button className="product-btn">add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
