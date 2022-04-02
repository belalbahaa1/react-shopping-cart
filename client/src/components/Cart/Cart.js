import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutForm/Checkout";

const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-header">
        {props.cartItems.length === 0 ? (
          <h2>Empty Cart</h2>
        ) : (
          <div className="header-flex">
            <p>There is {props.cartItems.length} products in cart</p>
            <p>
              Total Price: $
              {props.cartItems.reduce((acc, p) => {
                return acc + p.price * p.qty;
              }, 0)}
            </p>
          </div>
        )}
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <div className="cart-info">
                <div>
                  <p>Title: {item.title}</p>
                  <p>qty: {item.qty} </p>
                  <p>Price: ${item.price * item.qty}</p>
                </div>
                <button onClick={() => props.handleRemoveFromCart(item)}>
                  Remove Item
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {props.cartItems.length === 0 ? (
        ""
      ) : (
        <div className="cart-footer">
          <button
            className="clear-cart"
            onClick={() => props.handleRemoveAllFromCart()}
          >
            Clear
          </button>
          <button className="select-products" onClick={() => setShowForm(true)}>
            checkout
          </button>
        </div>
      )}
      {/* checkout form */}
      <Checkout
        showForm={showForm}
        setShowForm={setShowForm}
        handleChange={handleChange}
        submitOrder={submitOrder}
        value={value}
      />
    </div>
  );
};

export default Cart;
