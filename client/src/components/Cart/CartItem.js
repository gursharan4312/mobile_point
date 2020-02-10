import React, { useContext } from "react";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";

export default function CartItem({ cartProduct }) {
  const { img, title, price, count, total } = cartProduct;
  const dispatch = useContext(GlobalDispatchContext);
  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM_CART",
      payload: cartProduct
    });
  };
  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM_CART",
      payload: cartProduct
    });
    if (count === 1) {
      dispatch({
        type: "REMOVE_CART_PRODUCT",
        payload: cartProduct
      });
    }
  };
  const removeItemAll = () => {
    dispatch({
      type: "CLEAR_ITEM",
      payload: cartProduct
    });
    if (count === 1) {
      dispatch({
        type: "REMOVE_CART_PRODUCT",
        payload: cartProduct
      });
    }
  };
  return (
    <>
      <div className="row my-2">
        <div className="col-8 col-md-2 mx-auto my-1">
          <img
            src={img}
            style={{ width: "5rem" }}
            alt="product"
            className="img-fluid"
          />
        </div>
        <div className="col-8 col-md-2 mx-auto my-1">
          <span className="d-md-none d-sm-inline font-weight-bold">
            {title}
          </span>
          <span className="d-none d-md-inline">{title}</span>
        </div>
        <div className="col-8 col-md-2 mx-auto my-1">
          <span className="d-md-none d-sm-inline font-weight-bold">
            Price :{" "}
          </span>
          ${price}
        </div>
        <div className="col-8 col-md-2 mx-auto my-1">
          <span className="d-md-none d-sm-inline font-weight-bold">
            Quantity :{" "}
          </span>
          <span className="btn btn-sm btn-danger mx-1" onClick={removeItem}>
            -
          </span>
          <span className="btn btn-sm btn-outline-primary mx-1"> {count}</span>
          <span className="btn btn-sm btn-success mx-1" onClick={addToCart}>
            +
          </span>
        </div>
        <div className="col-8 col-md-2 mx-auto my-1">
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={removeItemAll}
          >
            <span className="d-md-none d-sm-inline font-weight-bold">
              remove{" "}
            </span>
            <span className="d-none d-md-inline">X </span>
          </button>
        </div>
        <div className="col-8 col-md-2 mx-auto my-1">
          <span className="d-md-none d-sm-inline font-weight-bold">
            Total :{" "}
          </span>
          ${total}
        </div>
      </div>
      <span
        className="d-md-none d-sm-block mb-4"
        style={{ borderTop: "0.1rem solid rgba(0,0,0,0.6)" }}
      ></span>
    </>
  );
}
