import React, { useState } from "react";
import AddCategory from "./AddCategory.js";
import AddProduct from "./AddProduct.js";
import ViewOrders from "./ViewOrders.js";

export default function AdminPanel(props) {
  const { adminDetails, setAdminDetails } = props;
  const [modal, setModal] = useState({
    addCategory: false,
    addProduct: false,
    viewOrders: false
  });
  return (
    <>
      <div className="admin-panel">
        <button
          className="btn"
          onClick={() => setModal({ ...modal, addCategory: true })}
        >
          Add Category
        </button>
        <button
          className="btn"
          onClick={() => setModal({ ...modal, addProduct: true })}
        >
          Add Product
        </button>
        <button
          className="btn"
          onClick={() => setModal({ ...modal, viewOrders: true })}
        >
          View Orders
        </button>
        <button
          className="btn"
          onClick={() => setAdminDetails({ ...adminDetails, login: false })}
        >
          Sign Out
        </button>
      </div>
      {modal.addCategory ? (
        <AddCategory modal={modal} setModal={setModal} />
      ) : (
        ""
      )}
      {modal.addProduct ? <AddProduct modal={modal} setModal={setModal} /> : ""}
      {modal.viewOrders ? <ViewOrders modal={modal} setModal={setModal} /> : ""}
    </>
  );
}
