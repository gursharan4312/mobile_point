import React from "react";

export default function Product(props) {
  const { name, description, price } = props.product;
  const { modals, setModals, setSelectedProduct } = props;
  const handelClick = () => {
    setSelectedProduct(props.product);

    setModals({ ...modals, checkoutModal: true });
  };
  return (
    <div className="product-card">
      <div className="product">
        <img src={`./images/comingsoon.jpg`} alt="product image" />
        <div className="image-overlay"></div>
        <div className="btn" id="product-btn" onClick={handelClick}>
          Buy Now
        </div>
        <div className="product-description">
          <div className="product-container">
            <span className="product-price">${price}</span>
            <span className="product-name">{name}</span>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
