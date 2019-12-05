import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Products from "./components/Products.js";
import Checkout from "./components/Checkout.js";
import ShippingDetails from "./components/ShippingDetails.js";
import Payment from "./components/Payment.js";
import Categories from "./components/Categories.js";
import Information from "./components/Information.js";
import Admin from "./components/Admin.js";

export default function App() {
  const [modals, setModals] = useState({
    checkoutModal: false,
    shippingModal: false,
    paymentModal: false
  });
  const [orderDetails, setOrderDetails] = useState({
    productId: "",
    productName: "",
    quantity: 0,
    totalPrice: 0,
    userDetails: {
      name: "",
      email: "",
      phoneno: "",
      address: "",
      pacakageRequest: ""
    }
  });
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({
    _id: "",
    name: ""
  });
  const [adminDetails, setAdminDetails] = useState({
    name: "",
    email: "",
    login: false
  });
  //getting products initially
  useEffect(() => {
    Axios.get("/shop/category/mobiles").then(result => {
      setProducts(result.data.products);
    });
  }, []);

  useEffect(() => {
    setOrderDetails({
      ...orderDetails,
      productName: selectedProduct.name,
      productId: selectedProduct._id
    });
  }, [selectedProduct]);

  return (
    <div className="app">
      <Header />
      <Route
        exact
        path="/"
        render={props => (
          <Home
            {...props}
            products={products}
            modals={modals}
            setModals={setModals}
            setSelectedProduct={setSelectedProduct}
          />
        )}
      />
      <Route
        path="/admin"
        render={props => (
          <Admin
            {...props}
            adminDetails={adminDetails}
            setAdminDetails={setAdminDetails}
          />
        )}
      />
      <Route
        path="/products"
        render={props => (
          <Products
            {...props}
            products={products}
            modals={modals}
            setModals={setModals}
            setSelectedProduct={setSelectedProduct}
          />
        )}
      />
      <Route
        path="/categories"
        render={props => <Categories setProducts={setProducts} />}
      />
      <Route path="/information" render={props => <Information />} />
      <Checkout
        product={selectedProduct}
        modals={modals}
        setModals={setModals}
        orderDetails={orderDetails}
        setOrderDetails={setOrderDetails}
      />
      <ShippingDetails
        modals={modals}
        setModals={setModals}
        orderDetails={orderDetails}
        setOrderDetails={setOrderDetails}
      />
      <Payment
        modals={modals}
        setModals={setModals}
        orderDetails={orderDetails}
      />
    </div>
  );
}
