import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";

function NavigationMenu(props) {
  const { triggerClose } = props;

  return (
    <div className="navigation-menu-container">
      <div className="navigation-menu-heading">MENU</div>
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
        <p>Stepinfwd&copy; 2020</p>
      </div>
    </div>
  );
}

export default NavigationMenu;
