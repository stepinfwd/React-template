import React from "react";
import "./Header.css";
import Navigation from "../Navigation";

function Header() {
  return (
    <div className="header-container">
      <span>AppName</span>
      <Navigation />
    </div>
  );
}
export default Header;
