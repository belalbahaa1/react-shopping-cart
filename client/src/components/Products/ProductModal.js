import React from "react";
import Modal from "react-modal";

const ProductModal = ({ product, setProduct }) => {
  return (
    <Modal isOpen={product} onRequestClose={() => setProduct(false)}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{product.title}</h2>
          <button className="close-btn" onClick={() => setProduct(false)}>
            X
          </button>
        </div>
        <div className="modal-body">
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.desc}</p>
          <span>${product.price}</span>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
