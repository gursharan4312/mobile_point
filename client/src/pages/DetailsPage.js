import React, { useContext, useEffect } from "react";
import {
  GlobalStateContext,
  GlobalDispatchContext
} from "../context/GlobalContextProvider";

export default function DetailsPage(props) {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  let paramId = props.match.params.id;
  const product =
    state.products.find(item => item._id === paramId) || state.products[0];
  const { _id, img, title, company, price, info, inCart } = product;
  const addToCart = id => {
    dispatch({
      type: "ADD_ITEM_CART",
      payload: product
    });
    dispatch({
      type: "ADD_CART_PRODUCT",
      payload: product
    });
  };
  return (
    <>
      {product._id === -1 ? (
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="heading">No Product Found</h1>
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-10 mx-auto">
              <h1 className="heading">{title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-md-4 mx-auto my-4">
              <img src={`/${img}`} alt="product" className="image-fluid" />
            </div>
            <div className="col-10 col-md-8 mx-auto my-4 py-4">
              <h2>Made by : {company}</h2>
              <h2>Price : ${price}</h2>
              <p className="text-capitalize font-weight-bold">
                Some Info About the product:
              </p>
              <p className="text-muted">{info}</p>
              <button
                className="btn btn-outline-info mx-2"
                onClick={() => window.history.back()}
              >
                go back
              </button>

              <button
                className="btn btn-warning"
                disabled={inCart}
                onClick={() => addToCart(_id)}
              >
                {inCart ? "Added to cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
