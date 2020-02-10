import React, { useEffect, useContext, useState } from "react";
import BestSellers from "../components/BestSellers";
import ProductContext from "../context";
import {
  GlobalStateContext,
  GlobalDispatchContext
} from "../context/GlobalContextProvider";

export default function SpecialDeals() {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [mobileDeals, setMobileDeals] = useState([]);
  const [accessoryDeals, setAccessoryDeals] = useState([]);
  const [loadingMobileDeals, setloadingMobileDeals] = useState(
    mobileDeals.length < 1 ? true : false
  );
  const [loadingAccessoryDeals, setloadingAccessoryDeals] = useState(
    accessoryDeals.length < 1 ? true : false
  );
  useEffect(() => {
    if (mobileDeals.length < 1) {
      setMobileDeals(
        state.products.filter(
          item => item.category === "mobile" && item.deal === true
        )
      );
    }
    if (accessoryDeals.length < 1) {
      setAccessoryDeals(
        state.products.filter(
          item => item.category === "accessory" && item.deal === true
        )
      );
    }

    if (mobileDeals.length >= 1) setloadingMobileDeals(false);
    if (accessoryDeals.length >= 1) setloadingAccessoryDeals(false);
  }, [mobileDeals, accessoryDeals]);

  return (
    <>
      <div className="text-center my-4">
        <h3 className="text-uppercase">special Deals on Mobiles</h3>
        {mobileDeals.length < 1 ? (
          <h4>No Deals on Mobiles. Please Come Back.</h4>
        ) : (
          ""
        )}
        {loadingMobileDeals ? (
          <div
            style={{ height: "200px" }}
            className="d-flex justify-content-center"
          >
            <h4 className="d-inline-block mx-4">Loading</h4>
            <div className="loader "></div>
          </div>
        ) : (
          <BestSellers products={mobileDeals} />
        )}
      </div>
      <div className="text-center my-4">
        <h3 className="text-uppercase">special Deals on Accessories</h3>
        {accessoryDeals.length < 1 ? (
          <h4>No Deals on Accessories. Please Come Back.</h4>
        ) : (
          ""
        )}
        {loadingAccessoryDeals ? (
          <div
            style={{ height: "200px" }}
            className="d-flex justify-content-center"
          >
            <h4 className="d-inline-block mx-4">Loading</h4>
            <div className="loader "></div>
          </div>
        ) : (
          <BestSellers products={accessoryDeals} />
        )}
      </div>
    </>
  );
}
