import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import GlobalContextProvider from "./context/GlobalContextProvider";
ReactDOM.render(
  <GlobalContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalContextProvider>,
  document.getElementById("root")
);
