import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal";
import Bounce from "react-reveal/Bounce";

const Products = ({ products, handleAddToCart }) => {
  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product);
  };
  return (
    <Bounce left cascade>
      <div className="products-wrapper">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <a href="#" onClick={() => openModal(product)}>
              <img src={product.imageUrl} alt={product.title} />
            </a>
            <div className="product-desc">
              <p>{product.title}</p>
              <span>${product.price}</span>
            </div>
            <button
              className="product-btn"
              onClick={() => handleAddToCart(product)}
            >
              add to cart
            </button>
          </div>
        ))}

        <ProductModal product={product} setProduct={setProduct} />
      </div>
    </Bounce>
  );
};

export default Products;
