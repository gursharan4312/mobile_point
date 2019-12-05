import React, { useState } from "react";

export default function ShippingDetails(props) {
  const { setOrderDetails, orderDetails, modals, setModals } = props;
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneno: "",
    address: "",
    packageDetails: ""
  });
  const close = () => {
    setModals({ ...modals, shippingModal: false });
  };
  const back = () => {
    setModals({ ...modals, shippingModal: false, checkoutModal: true });
  };
  const handelChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState(false);
  const handelSubmit = e => {
    e.preventDefault();
    if (user.name == "" || user.email == "" || user.address.address == "") {
      setError(true);
    } else {
      setOrderDetails({ ...orderDetails, userDetails: { ...user } });
      setModals({ ...modals, shippingModal: false, paymentModal: true });
    }
  };
  return modals.shippingModal === true ? (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-title">Shipping Details</div>
        <div className="checkout-body">
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
                Please fill all details
              </div>
            ) : (
              ""
            )}
            <label>
              Full Name:
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={user.name}
                onChange={handelChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                placeholder="sample@example.com"
                name="email"
                value={user.email}
                onChange={handelChange}
                required
              />
            </label>
            <label>
              Phone No.:
              <input
                type="email"
                placeholder="(604)333-4444"
                name="phoneno"
                value={user.phoneno}
                onChange={handelChange}
              />
            </label>
            <label>
              Address :
              <input
                type="text"
                placeholder="12345 67 Street, London"
                name="address"
                value={user.address}
                onChange={handelChange}
                required
              />
            </label>
            <label>
              Addition detail for package :
              <textarea
                type="text"
                placeholder="Leave beside the door"
                name="packageDetails"
                value={user.packageDetails}
                onChange={handelChange}
              />
            </label>
            <button className="btn" type="submit" onClick={handelSubmit}>
              Submit
            </button>
          </form>
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
