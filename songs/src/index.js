import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // this sits on top of App
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers"; // this is default export

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
