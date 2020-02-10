import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

import GlobalContextProvider from "./context/GlobalContextProvider";
ReactDOM.render(
  <GlobalContextProvider>
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>
  </GlobalContextProvider>,
  document.getElementById("root")
);
