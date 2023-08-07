import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
<<<<<<< HEAD

const store = createStore(reducer,middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
=======
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
  </Provider>,
  document.getElementById("root")
);
