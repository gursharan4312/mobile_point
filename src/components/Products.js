import React from "react";
import Product from "./Product.js";

export default function Products(props) {
  const { products, modals, setModals } = props;
  return (
    <section className="products-container">
      <h1 style={{ color: "#fff" }}>Products</h1>
      <div className="products">
        {products.map(product => {
          return (
            <Product
              setSelectedProduct={props.setSelectedProduct}
              modals={modals}
              setModals={setModals}
              product={product}
              key={product._id}
            />
          );
        })}
      </div>
    </section>
  );
}
