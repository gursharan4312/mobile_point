import React, { useContext } from "react";
import CartColoumns from "./CartColoumns";
import CartItem from "./CartItem";
import ProductContext from "../../context";
import CartTotals from "./CartTotals";

export default function Cart() {
  const values = useContext(ProductContext);
  const { cart } = values;
  return (
    <div>
      <h1 className="heading">Cart</h1>
      {cart.length > 0 ? (
        <>
          <CartColoumns />
          <div className="container-fluid text-center">
            {cart.map(cartProduct => {
              return (
                <CartItem key={cartProduct.id} cartProduct={cartProduct} />
              );
            })}
            <CartTotals />
          </div>
        </>
      ) : (
        <h1 className="heading">Your Cart is Empty</h1>
      )}
    </div>
  );
}
