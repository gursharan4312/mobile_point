import React, { useState } from "react";
import styled from "styled-components";
import Product from "./Product";

export default function BeseSellers({ products }) {
  const [leftPosition, setLeftPositon] = useState(0);
  const handelClick = e => {
    let width = window.innerWidth;
    let movingSize = width >= 922 ? 25 : width >= 768 ? 33.33 : 50;
    if (
      e === "right" &&
      leftPosition >
        -1 *
          movingSize *
          (products.length - (width >= 922 ? 4 : width >= 768 ? 3 : 2))
    )
      setLeftPositon(leftPosition - movingSize);
    else if (e === "left" && leftPosition < 0)
      setLeftPositon(leftPosition + movingSize);
  };
  return (
    <BeseSellersContainer className="col-12 p-0" position={leftPosition}>
      <div className="row w-100">
        {products.length > 2 ? (
          <div className="col-1 d-inline-flex flex-column justify-content-center arrows">
            <button onClick={() => handelClick("left")}> &larr;</button>
          </div>
        ) : (
          ""
        )}

        <div className="col-10 mx-auto overflow-hidden">
          <div className="d-inline-flex best-sellers w-100 ">
            {products.map(product => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
        {products.length > 2 ? (
          <div className="col-1 d-inline-flex flex-column justify-content-center arrows">
            <button onClick={() => handelClick("right")}>&rarr;</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </BeseSellersContainer>
  );
}

const BeseSellersContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
  .arrows {
    font-size: 2rem;
    z-index: 10;
    button {
      border: none;
      background: transparent;
      height: 60%;
      width: 100%;
      min-width: 40px;
      padding: 0;
      margin: 0;
    }
    button:hover {
      background: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
  .best-sellers {
    position: relative;
    left: ${props => props.position}%;
    transition: all 0.25s linear;
  }
`;
