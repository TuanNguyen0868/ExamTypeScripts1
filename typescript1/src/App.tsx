import React from "react";
import "./App.css";
import Footer from "./app/Footer";
// import Header from "./app/Header";
import NavBar from "./app/NavBar";

function App() {
  return (
    <div className="App">
      {/* <div className="sessionHeader">
        <Header />
      </div> */}
      <div className="sessionNavBar">
        <NavBar />
      </div>
      <div className="sessionFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
