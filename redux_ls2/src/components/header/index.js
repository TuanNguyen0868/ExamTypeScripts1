import React from "react";
import Logo from "./logo.png";

export default function Header() {
  return (
    <div className="session-header">
      <div className="session-left-header">
          <img src={Logo} alt='logo' title="Logo of Bin"  className='logo-style'></img>
          <p className="company-name">App Of Bin</p>
      </div>
      <div className="session-right-header">
            <input type="text" placeholder="Search ... "  className="input-search"/>
            <div className="session-button-header">
            <button className="btn-right-header">Search</button>
            <button className="btn-right-header btn-login" >Login</button>
            <button className="btn-right-header">Help</button>
            </div>
      </div>
    </div>
  );
}
