import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <GlobalStyles />
         <App />
      </Provider>
   </React.StrictMode>
);
