import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../logo/icons8-blockchain-new-logo.svg";
import homeLogo from "../logo/icons8-home.svg";
import productLogo from "../logo/icons8-product-24.png";
import aboutLogo from "../logo/icons8-about.svg";

function NavigationMenu(props) {
  const { triggerClose } = props;

  return (
    <div className="navigation-menu-container">
      <div className="navigation-menu-heading">
        <img src={logo}></img>Logo
      </div>
      <ul>
        <li>
          <Link className="nav-links" onClick={props.triggerClose} to="/">
            <img src={homeLogo}></img>
            <p> HOME</p>
          </Link>
        </li>
        <li>
          <Link className="nav-links" onClick={props.triggerClose} to="/about">
            <img src={aboutLogo}></img>
            <p> ABOUT</p>
          </Link>
        </li>
        <li>
          <Link
            className="nav-links"
            onClick={props.triggerClose}
            to="/product/:id/"
          >
            <img src={homeLogo}></img>
            <p>PRODUCT</p>
          </Link>
        </li>
      </ul>
      <div className="sidebar-footer">
        <p>stepinfwd&copy; 2020</p>
      </div>
    </div>
  );
}

export default NavigationMenu;
