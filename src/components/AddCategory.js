import React, { useState } from "react";
import Axios from "axios";

export default function AddCategory(props) {
  const { modal, setModal } = props;
  const [greeting, setGreeting] = useState(false);
  const [category, setCategory] = useState("");
  const close = () => {
    setModal({ ...modal, addCategory: false });
  };
  const handelChange = e => {
    setCategory(e.target.value);
  };
  const handelSubmit = e => {
    e.preventDefault();
    Axios.post("/shop/category", {
      name: category
    }).then(result => {
      setGreeting(true);
    });
  };
  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-title">Add Category</div>
        <div className="checkout-body">
          {greeting ? (
            <div className="greeting">
              <h3>Thank you</h3>
              <p>Category has been added successfully</p>
            </div>
          ) : (
            <form>
              <label>
                Name of category :
                <input
                  type="text"
                  placeholder="Category Name"
                  name="name"
                  value={category}
                  onChange={handelChange}
                />
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
