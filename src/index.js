import React from "react";
import ReactDOM from "react-dom/client";
import {
   ApolloClient,
   createHttpLink,
   InMemoryCache,
   ApolloProvider,
   gql,
} from "@apollo/client";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";
import "normalize.css";
import { GlobalStyles } from "./globalStyles";

const client = new ApolloClient({
   uri: "http://localhost:4000/",
   cache: new InMemoryCache(),
});

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
