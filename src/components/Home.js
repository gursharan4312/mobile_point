import React from "react";
import Products from "./Products.js";
import { Link } from "react-router-dom";

export default function Home(props) {
  const { products, modals, setModals, setSelectedProduct } = props;
  return (
    <section className="Home">
      <div
        className="hero"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('./images/hero-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          color: "#fff"
        }}
      >
        <div className="hero-content">
          <h1>Mobile Point</h1>
          <p>World's biggest mobile and accesories destributors</p>
        </div>
      </div>
      <div className="promotions">
        <Products
          products={products.slice(0, 2)}
          modals={modals}
          setModals={setModals}
          setSelectedProduct={setSelectedProduct}
        />

        <Link to="/products" className="btn">
          See more..
        </Link>
      </div>
    </section>
  );
}
