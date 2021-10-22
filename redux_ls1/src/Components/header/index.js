import { Button } from "antd";
import React from "react";
import Logo from "./logo.png";

export default function Header() {
  return (
    <div className="session-header">
      <div className="session-left-header">
        <img
          src={Logo}
          alt="logo"
          title="Logo of Bin"
          className="logo-style"
        ></img>
        <p className="company-name">My App</p>
      </div>
      <div className="session-search">
        {/* <Search/> */}
        {/* <SearchBar /> */}

      </div>
      <div className="session-right-header">
        <div className="session-button-header">
          <Button className="btn-right-header btn-login">Login</Button>
          <Button className="btn-right-header">Help</Button>
        </div>
      </div>
    </div>
  );
}
