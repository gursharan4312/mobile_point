import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalStateContext } from "../../context/GlobalContextProvider";
export default function MiniCart() {
  const state = useContext(GlobalStateContext);
  const { cart } = state;
  // const { cart } = useContext(ProductContext);
  return (
    <MiniCartContainer id="mini-cart" className="d-none d-md-block">
      <h5>Cart items</h5>
      <ul className="text-left">
        {cart.length > 0 ? (
          cart.map(item => {
            return (
              <li key={item._id}>
                <img
                  src={`../${item.img}`}
                  className="img-fluid"
                  alt={item.title}
                />
                <h6 className="d-inline-block">{item.title} </h6>
                <span>x</span>
                <h6 className="d-inline-block">{item.count}</h6>
              </li>
            );
          })
        ) : (
          <h6>Empty</h6>
        )}
      </ul>
    </MiniCartContainer>
  );
}

const MiniCartContainer = styled.div`
  position: absolute;
  margin-top: 0.25rem;
  padding: 0.25rem 0.25rem 0.25rem 0.5rem;
  width: 140%;
  background: #ddd;
  text-align: center;
  border-radius: 5px;
  ul {
    list-style-type: none;
    padding-left: 5px;
    li {
      img {
        width: 40px;
      }
      span {
        margin: 0 20px;
      }
    }
  }
`;
