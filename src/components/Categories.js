import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export default function Categories(props) {
  const { setProducts } = props;
  const [redirect, setRedirect] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Axios.get("/shop/categories").then(result => {
      setCategories(result.data);
    });
  }, []);

  const handelClick = category => {
    Axios.get(`/shop/category/${category}`)
      .then(result => {
        setProducts(result.data.products);
        setRedirect(true);
      })
      .catch(err => console.log(err));
  };

  return redirect ? (
    <Redirect to="/products" />
  ) : (
    <section className="categories-container">
      <h1>Categories</h1>
      <div className="categories">
        {categories.map(category => {
          return (
            <div
              className="category"
              key={category._id}
              onClick={() => handelClick(category.name)}
            >
              {category.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}
