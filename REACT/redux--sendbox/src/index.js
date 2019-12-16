import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import App from "./components/App";

const store = createStore(reducer);


// inc,dec,rnd are not original functions from action creators. they  are wrepped with dispatch
// const { inc, dec, rnd } = bindActionCreators(actions, store.dispatch);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
