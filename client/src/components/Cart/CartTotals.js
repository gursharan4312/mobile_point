import React, { useContext } from "react";
import productContext from "../../context";
import styled from "styled-components";

export default function CartTotals() {
  const { cart, clearCart } = useContext(productContext);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].total;
  }
  let tax = Math.round(total * 0.12 * 100) / 100;
  return (
    <div className="row my-4">
      <div className="col-8 col-md-3 mx-auto ml-md-auto mr-md-0 text-left">
        <button onClick={clearCart} className="btn btn-lg btn-outline-danger">
          Clear all
        </button>

        <h3 className="mt-4">Cart Totals:</h3>
        <TableContainer>
          <tr>
            <td>Total items: </td>
            <td>{cart.length}</td>
          </tr>
          <tr>
            <td>Total price: </td>
            <td>${total}</td>
          </tr>
          <tr>
            <td>Total tax: </td>
            <td>${tax}</td>
          </tr>
          <tr>
            <td>Final price: </td>
            <td>${Math.round((total + tax) * 100) / 100}</td>
          </tr>
        </TableContainer>
      </div>
    </div>
  );
}

const TableContainer = styled.table`
  tr {
    td {
      font-size: 1.25rem;
    }
  }
`;
