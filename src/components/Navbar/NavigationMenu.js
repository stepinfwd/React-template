import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../logo/icons8-blockchain-new-logo.svg";

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
            HOME
          </Link>
        </li>
        <li>
          <Link className="nav-links" onClick={props.triggerClose} to="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            className="nav-links"
            onClick={props.triggerClose}
            to="/product"
          >
            PRODUCT
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
