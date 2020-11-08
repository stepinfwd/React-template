import React from "react";
import "./Header.css";
import Navigation from "../Navbar/Navigation";
import logo from "../logo/icons8-blockchain-new-logo.svg";

function Header() {
  return (
    <div className="header-container">
      <div>
        <img src={logo}></img>
        <span className="header-container-appname">AppName</span>
      </div>
      <Navigation />
    </div>
  );
}
export default Header;
