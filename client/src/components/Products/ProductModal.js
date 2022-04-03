import React from "react";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

const ProductModal = ({ product, setProduct }) => {
  return (
    <Modal isOpen={product} onRequestClose={() => setProduct(false)}>
      <Zoom>
        <div className="modal-content">
          <div className="modal-header">
            <h2>{product.title}</h2>
            <button className="close-btn" onClick={() => setProduct(false)}>
              X
            </button>
          </div>
          <div className="modal-body">
            <img
              src={product.imageUrl}
              alt={product.title}
              style={{ width: "50%" }}
            />
            <p>{product.desc}</p>
            <span>${product.price}</span>
          </div>
        </div>
      </Zoom>
    </Modal>
  );
};

export default ProductModal;
