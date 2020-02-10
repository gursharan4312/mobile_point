import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  GlobalDispatchContext,
  GlobalStateContext
} from "../context/GlobalContextProvider";

export default function Product(props) {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const { _id, img, title, price, inCart } = props.product;
  const handelClick = id => {
    dispatch({
      type: "CHANGE_MODAL_PRODUCT",
      payload: state.products.find(item => item._id === id)
    });
    dispatch({
      type: "SHOW_MODAL"
    });
  };

  return (
    <ProductWrapper className="col-6  col-lg-3 col-md-4 my-3 mx-auto">
      <div className="card">
        <div className="img-container p-5">
          <Link to={`/details/${_id}`}>
            <img src={`/${img}`} alt="product" className="card-img-top" />
          </Link>
        </div>
        <div className="button-container d-flex my-2">
          <button
            className="btn btn-warning"
            disabled={inCart}
            onClick={() => handelClick(_id)}
          >
            {inCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5>
            <span>$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  .card {
    border-color: #999;
    box-shadow: 0 0 0.5rem #999;
  }
  .card-footer {
    border-color: #999;
  }
  .img-container img {
    transition: all 0.5s linear;
  }
  .img-container:hover img {
    transform: scale(1.3, 1.3);
  }
  .button-container {
    justify-content: space-evenly;
  }
`;
