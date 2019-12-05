import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function ViewOrders(props) {
  const { modal, setModal } = props;
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);
  const [payment, setPayment] = useState([]);

  const close = () => {
    setModal({ ...modal, viewOrders: false });
  };
  useEffect(() => {
    Axios.get("/shop/order/all").then(results => {
      setOrders(results.data);
    });
  }, []);
  const handelUserClick = id => {
    Axios.get(`/shop/order/${id}`).then(results => {
      setUser(results.data.user);
    });
  };
  const handelPaymentClick = id => {
    Axios.get(`/shop/order/${id}`).then(results => {
      setPayment(results.data.payment);
    });
  };
  const back = () => {
    setUser([]);
    setPayment([]);
  };
  return (
    <div className="viewOrders">
      <div className="checkout-container">
        <div className="checkout-content">
          <div className="checkout-title">All Products</div>
          <div className="checkout-body">
            <table>
              {user.length >= 1 ? (
                <>
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Phone No.</th>
                      <th>Address</th>
                      <th>pacakage Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map(result => {
                      return (
                        <tr key={result._id}>
                          <td>{result.name}</td>
                          <td>{result.email}</td>
                          <td>{result.phoneno}</td>
                          <td>{result.address}</td>
                          <td>{result.packageDetails}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan={5}>
                        <button onClick={back} className="btn">
                          Back
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              ) : (
                ""
              )}
              {payment.length >= 1 ? (
                <>
                  <thead>
                    <tr>
                      <th>Name on Card:</th>
                      <th>Card No.</th>
                      <th>Expiry</th>
                      <th>Security Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payment.map(result => {
                      return (
                        <tr key={result._id}>
                          <td>{result.name}</td>
                          <td>{result.cardno}</td>
                          <td>{result.expiry}</td>
                          <td>{result.securityCode}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan={4}>
                        <button onClick={back} className="btn">
                          Back
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              ) : (
                ""
              )}
              {user.length >= 1 ? (
                ""
              ) : payment.length >= 1 ? (
                ""
              ) : (
                <>
                  <caption>All Orders</caption>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th>User Details</th>
                      <th>Payment Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(order => {
                      return (
                        <tr key={order._id}>
                          <td>{order.productName}</td>
                          <td>{order.quantity}</td>
                          <td>{order.totalPrice}</td>
                          <td
                            onClick={() => handelUserClick(order._id)}
                            className="hover"
                          >
                            {order.user[0].name}
                          </td>
                          <td
                            onClick={() => handelPaymentClick(order._id)}
                            className="hover"
                          >
                            {order.payment[0].name}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </>
              )}
            </table>
            ;
          </div>
          <button className="btn" onClick={close}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}
