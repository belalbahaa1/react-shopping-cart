import React from "react";
import "../../css/CheckoutForm/Checkout.css";
import Input from "../Input/Input";
import Fade from "react-reveal/Fade";
const Checkout = (props) => {
  return (
    <>
      {props.showForm && (
        <div className="checkout-form">
          <div className="close-icon" onClick={() => props.setShowForm(false)}>
            &times;
          </div>
          <Fade bottom>
            <form onSubmit={props.submitOrder}>
              <Input
                label="Name"
                type="text"
                name="name"
                handleChange={props.handleChange}
              />
              <Input
                label="Email"
                type="email"
                name="email"
                handleChange={props.handleChange}
              />
              <div className="form-group">
                <button className="checkout-btn" type="submit">
                  Checkout
                </button>
              </div>
            </form>
          </Fade>
        </div>
      )}
    </>
  );
};

export default Checkout;
