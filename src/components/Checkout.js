import React, { useState, useEffect } from "react";

export default function Checkout(props) {
  const [count, setCount] = useState(1);
  const { product, setOrderDetails, orderDetails, modals, setModals } = props;
  const handelClick = value => {
    if (value === "d" && count > 1) {
      setCount(count - 1);
    } else if (value === "i") setCount(count + 1);
  };
  const close = () => {
    setModals({ ...modals, checkoutModal: false });
    setCount(1);
  };
  const handelContinue = () => {
    setOrderDetails({
      ...orderDetails,
      quantity: count,
      totalPrice: count * product.price
    });

    setModals({ ...modals, checkoutModal: false, shippingModal: true });
  };
  return modals.checkoutModal === true ? (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-title">Checkout</div>
        <div className="checkout-body">
          <div className="checkout-img">
            <img src={`./images/${product.image}`} />
          </div>
          <div className="checkout-product-details">
            <div className="checkout-product-title">{product.title}</div>
            <div className="checkout-product-description">
              {product.description}
            </div>
            <div className="checkout-product-price">
              Total : ${product.price * count}
            </div>
            <div className="checkout-product-count">
              <button className="btn" onClick={() => handelClick("d")}>
                &lt;
              </button>
              <span>{count}</span>
              <button className="btn" onClick={() => handelClick("i")}>
                &gt;
              </button>
            </div>
            <div>
              <button className="btn" onClick={handelContinue}>
                Continue
              </button>
            </div>
          </div>
        </div>
        <button className="btn" onClick={close}>
          close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
