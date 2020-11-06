import React, { useState, useEffect } from "react";
import "./Navbar.css";
import toggler from "./ham.svg";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  let menu = "";
  let menuMask = "";

  if (showMenu) {
    menu = <div className="navbar-items">menu</div>;
    menuMask = (
      <div className="navbar-mask" onClick={() => setShowMenu(false)}></div>
    );
  }

  return (
    <nav>
      <span>
        <img
          className="navbar-hamburger"
          src={toggler}
          onClick={() => setShowMenu(!showMenu)}
        ></img>
      </span>

      {menu}
      {menuMask}
    </nav>
  );
}

export default Navigation;
