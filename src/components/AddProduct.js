import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function AddProduct(props) {
  const { modal, setModal } = props;
  const [greeting, setGreeting] = useState(false);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    category: ""
  });
  const close = () => {
    setModal({ ...modal, addProduct: false });
  };
  const handelChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handelSubmit = e => {
    e.preventDefault();
    Axios.post("/shop/product", product).then(result => {
      setGreeting(true);
      console.log(result);
    });
  };
  useEffect(() => {
    Axios.get("/shop/categories").then(results => {
      setCategories(results.data);
    });
  }, []);
  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-title">Add Category</div>
        <div className="checkout-body">
          {greeting ? (
            <div className="greeting">
              <h3>Thank you</h3>
              <p>Your Product has been added successfully</p>
            </div>
          ) : (
            <form>
              <label htmlFor="name">
                Name of product :
                <input
                  type="text"
                  placeholder="Product Name"
                  name="name"
                  id="name"
                  value={product.name}
                  onChange={handelChange}
                />
              </label>
              <label htmlFor="price">
                Price of product :
                <input
                  type="text"
                  placeholder="Product price."
                  name="price"
                  id="price"
                  value={product.price}
                  onChange={handelChange}
                />
              </label>
              <label htmlFor="description">
                description :
                <input
                  type="text"
                  placeholder="Product description here.."
                  name="description"
                  id="description"
                  value={product.description}
                  onChange={handelChange}
                />
              </label>
              <label>
                Category :
                {categories.map(result => {
                  return (
                    <div
                      key={result._id}
                      style={{
                        width: "50%",
                        padding: "1rem"
                      }}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={result.name}
                        onChange={handelChange}
                        style={{
                          display: "inline",
                          width: "20px"
                        }}
                      />
                      {result.name}
                    </div>
                  );
                })}
              </label>
              <button className="btn" onClick={handelSubmit}>
                Submit
              </button>
            </form>
          )}
        </div>
        <button className="btn" onClick={close}>
          close
        </button>
      </div>
    </div>
  );
}
