import React, { useContext, useState, useEffect } from "react";
import Product from "./Product";
import {
  GlobalStateContext,
  GlobalDispatchContext
} from "../context/GlobalContextProvider";

export default function Products({ category }) {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const [productCount, setProductCount] = useState(4);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(
      state.products.filter(product =>
        category ? product.category === category : true
      )
    );
  }, [state.products, category]);

  const loadMore = () => {
    let maxProducts = products.length;
    if (productCount + 4 <= maxProducts) setProductCount(productCount + 4);
    else setProductCount(maxProducts);
  };

  return (
    <>
      <div className="row">
        {products.length >= 1 ? (
          products.map((product, i) => {
            return i < productCount ? (
              <Product product={product} key={product._id} />
            ) : (
              ""
            );
          })
        ) : (
          <div className="col-10 mx-auto text-center my-4">
            <h1>No Products Found in this Category</h1>
          </div>
        )}
      </div>
      <div className="row my-4">
        <div className="col-4 text-center mx-auto">
          {products.length >= 1 ? (
            <button
              className="btn btn-outline-primary"
              onClick={loadMore}
              disabled={products.length <= productCount ? true : false}
            >
              load more..
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
