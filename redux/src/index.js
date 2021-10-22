import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import MyApp from "./MyApp";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
