import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./globalStyles";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

const setAuthorizationLink = setContext((request, previousContext) => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: { Authorization: token ? `Bearer ${token}` : "" },
  };
});

const client = new ApolloClient({
  link: setAuthorizationLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// const client = new ApolloClient({
//    link: httpLink,
//    cache: new InMemoryCache(),
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
