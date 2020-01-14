import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import ErrorBoundary from "./components/ErrorBoundary";
import { BookStoreServiceProvider } from "./components/BookStoreServiceContext";
import store from "./store";
import BookStoreService from "./services";
import {BrowserRouter } from "react-router-dom";
import App from "./components/App";

const bookStoreService = new BookStoreService();
ReactDom.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreServiceProvider value={bookStoreService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.querySelector("#root")
);
