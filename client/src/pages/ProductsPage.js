import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";

export default function ProductsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const slides = [
    {
      img: "img/background.jpg",
      center: {
        h1: "Products"
      }
    }
  ];
  return (
    <>
      <Hero slides={slides} />
      <div className="container">
        <Products />
      </div>
    </>
  );
}
