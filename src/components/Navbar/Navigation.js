import React, { useState, useEffect } from "react";
import "./Navbar.css";
import toggler from "./ham.svg";
import { useTransition, animated } from "react-spring";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const transitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%) " },
    enter: { opacity: 1, transform: "translateX(0%) " },
    leave: { opacity: 0, transform: "translateX(-100%) " },
  });
  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <nav>
      <span>
        <img
          className="navbar-hamburger"
          src={toggler}
          onClick={() => setShowMenu(!showMenu)}
        ></img>
      </span>
      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              onClick={() => setShowMenu(false)}
              className="navbar-mask"
              style={props}
            ></animated.div>
          )
      )}
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div className="navbar-items" key={key} style={props}>
              <span>MENU</span>
              <ul>
                <li>Home</li>
              </ul>
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Navigation;
