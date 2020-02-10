import React, { useContext } from "react";
import styled from "styled-components";
import {
  GlobalStateContext,
  GlobalDispatchContext
} from "../context/GlobalContextProvider";

export default function Modal() {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const { modal } = state;
  const product = modal.product;
  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM_CART",
      payload: product
    });
    dispatch({
      type: "ADD_CART_PRODUCT",
      payload: product
    });
  };
  const toggleModal = () => {
    dispatch({
      type: "HIDE_MODAL"
    });
  };

  return modal.show ? (
    <ModalWrapper>
      <div className="container p-4">
        <div className="row">
          <div className="col-8 col-md-6 col-lg-4 mx-auto p-4 product-container">
            <h3>{product.title}</h3>
            <img className="img-fluid" src={`/${product.img}`} alt="product" />
            <p className="text-muted">Price: ${product.price}</p>
            <button onClick={toggleModal} className="mr-3 btn btn-outline-info">
              close
            </button>
            <button
              disabled={product.inCart}
              onClick={addToCart}
              className="btn btn-warning"
            >
              {product.inCart ? "Added to cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  ) : (
    ""
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  z-index: 99;
  .product-container {
    background: #fff;
    border-radius: 5px;
  }
`;
