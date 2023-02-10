import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>Home</li>
        <li>
          <a href="https://reactjs.org/" target="_blank">
            Rect
          </a>
        </li>
        <li>
          <a href="https://www.google.com/" target="_blank">More</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
