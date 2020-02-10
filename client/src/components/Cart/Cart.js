import React, { useContext, useEffect } from "react";
import CartColoumns from "./CartColoumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { GlobalStateContext } from "../../context/GlobalContextProvider";

export default function Cart() {
  const state = useContext(GlobalStateContext);
  const { cart } = state;
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  console.log(state);
  return (
    <div>
      <h1 className="heading">Cart</h1>
      {cart.length > 0 ? (
        <>
          <CartColoumns />
          <div className="container-fluid text-center">
            {cart.map(cartProduct => {
              return (
                <CartItem key={cartProduct._id} cartProduct={cartProduct} />
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
