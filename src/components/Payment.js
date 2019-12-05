import React, { useState } from "react";
import Axios from "axios";

export default function ShippingDetails(props) {
  const { orderDetails, modals, setModals } = props;
  const [payment, setPayment] = useState({
    name: "",
    cardno: "",
    expiry: "",
    securityCode: ""
  });
  const [greeting, setGreeting] = useState(false);
  const close = () => {
    setModals({ ...modals, paymentModal: false });
  };
  const back = () => {
    setModals({ ...modals, paymentModal: false, shippingModal: true });
  };
  const handelChange = e => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState(false);
  const handelSubmit = e => {
    e.preventDefault();
    if (
      payment.name == "" ||
      payment.cardno == "" ||
      payment.expiry == "" ||
      payment.securityCode == ""
    ) {
      setError(true);
    } else {
      Axios.post("/shop/order", {
        orderDetails,
        paymentDetails: { ...payment }
      })
        .then(result => {
          if (result.status !== 200) {
            setError(true);
          } else {
            setGreeting(true);
          }
        })
        .catch(err => {
          setError(true);
        });
    }
  };

  return modals.paymentModal === true ? (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-title">Payment Details</div>
        <div className="checkout-body">
          {greeting ? (
            <div className="greeting">
              <h3>Thank you</h3>
              <p>
                Your order has been successfully taken. You should receive
                conformation message shortly
              </p>
            </div>
          ) : (
            <form>
              {error ? (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    margin: "1rem 0",
                    border: "1px solid red",
                    borderRadius: "5px",
                    color: "red",
                    padding: "0.5rem",
                    fontWeight: "bold"
                  }}
                >
                  Please check filled details and try again
                </div>
              ) : (
                ""
              )}
              <label>
                Name on card :
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={payment.name}
                  onChange={handelChange}
                  required
                />
              </label>
              <label>
                Card Number :
                <input
                  type="text"
                  placeholder="45612378945613278"
                  name="cardno"
                  value={payment.cardno}
                  onChange={handelChange}
                  required
                />
              </label>
              <label>
                Expity Date :
                <input
                  type="text"
                  placeholder="mmyy"
                  name="expiry"
                  value={payment.expiry}
                  onChange={handelChange}
                  required
                />
              </label>
              <label>
                Security Code :
                <input
                  type="text"
                  placeholder="***"
                  name="securityCode"
                  value={payment.securityCode}
                  onChange={handelChange}
                  required
                />
              </label>
              <button className="btn" type="submit" onClick={handelSubmit}>
                Submit
              </button>
            </form>
          )}
        </div>
        <button className="btn" onClick={back}>
          back
        </button>
        &nbsp;&nbsp;
        <button className="btn" onClick={close}>
          close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
