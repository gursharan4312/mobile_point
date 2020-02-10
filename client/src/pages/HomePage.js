import React, { useEffect, useContext, useState } from "react";
import Hero from "../components/Hero";
import BestSellers from "../components/BestSellers";
import { Link } from "react-router-dom";
import ProductContext from "../context";
import { GlobalStateContext } from "../context/GlobalContextProvider";
export default function HomePage() {
  const state = useContext(GlobalStateContext);
  // const { bestSellers, fetch } = useContext(ProductContext);
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    setBestSellers([
      ...state.products.filter(item => item.bestSeller === true)
    ]);
  }, [state.products]);
  useEffect(() => {
    if (bestSellers.length >= 1) setLoadingBestSeller(false);
  }, [bestSellers]);

  const [loadingBestSeller, setLoadingBestSeller] = useState(
    bestSellers.length < 1 ? true : false
  );
  const slides = [
    {
      img: "img/background.jpg",
      center: {
        h1: "Mobile Point",
        h4: "Get the best deals on you Mobile and Accessories today!",
        btn: {
          text: "View New Offers",
          to: "/promotions"
        }
      }
    },
    {
      img: "img/background1.jpg",
      center: {
        h1: "Winter Sale!!!",
        h4: "Get exclusive deals on your new device this winter",
        btn: {
          text: "View New Offers",
          to: "/promotions"
        }
      }
    }
  ];
  return (
    <>
      <div className="row" style={{ margin: "0" }}>
        <Hero slides={slides} />
      </div>
      <div className="text-center my-4">
        <h1 className="text-uppercase ">Bestsellers</h1>
        {loadingBestSeller ? (
          <div
            style={{ height: "200px" }}
            className="d-flex justify-content-center"
          >
            <h4 className="d-inline-block mx-4">Loading</h4>
            <div className="loader "></div>
          </div>
        ) : (
          <BestSellers products={bestSellers} />
        )}
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-10 col-md-4 mx-auto ">
            <img src="/img/mobile.jpg" alt="mobile" className="img-fluid" />
          </div>
          <div className="col-10 col-md-8 mx-auto text-center py-4 ">
            <h2>Mobiles</h2>
            <p className="lead">Get the best deals on mobiles today</p>
            <Link to="/products/mobile">
              <button className="btn btn-primary">View New Devices</button>
            </Link>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-10 col-md-4 mx-auto d-block d-md-none">
            <img
              src="/img/accessory.jpg"
              alt="accessory"
              className="img-fluid"
            />
          </div>
          <div className="col-10 col-md-8 mx-auto text-center py-4 ">
            <h2>Accessories</h2>
            <p className="lead">
              Most affordable and quality mobile accessories available
            </p>
            <Link to="/products/accessory">
              <button className="btn btn-primary">
                View Mobile Accessories
              </button>
            </Link>
          </div>
          <div className="col-10 col-md-4 mx-auto d-none d-md-block ">
            <img
              src="/img/accessory.jpg"
              alt="accessory"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}
