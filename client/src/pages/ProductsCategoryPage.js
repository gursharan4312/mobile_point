import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";

export default function ProductsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  let category = props.match.params.category;
  let slug = category === "mobile" ? "mobiles" : "accessories";
  const slides = [
    {
      img: "img/background.jpg",
      center: {
        h1: `${slug}`
      }
    }
  ];
  return (
    <>
      <Hero slides={slides} />
      <div className="container">
        <Products category={category} />
      </div>
    </>
  );
}
