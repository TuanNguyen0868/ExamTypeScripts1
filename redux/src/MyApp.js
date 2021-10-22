import React from "react";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import "./App.css";
// import { Route, Router, browserHistory, IndexRoute } from "react-router";
// import Home from "./components/home-page/home";
// import Products from "./components/product-page/Products";
// import Cart from "./components/cart-page/Cart";

const MyApp = () => {
  return (
    <div className="App">
      <Navbar />
      <Todos />
      {/* <Router history = {browserHistory}>
      <Route path = "/" component = {Navbar}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {Products} />
         <Route path = "contact" component = {Cart} />
      </Route>
   </Router> */}
    </div>
  );
};

export default MyApp;
