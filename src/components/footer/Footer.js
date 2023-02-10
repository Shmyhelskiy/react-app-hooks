import React from "react";
import "./Footer.css";
import { GitHub } from "../contacts/contact/image/image";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/Shmyhelskiy/react-app-hooks"
        target="_blank"
        className="footer-link"
      >
        <img className="footer-img" src={GitHub} /> GitHub
      </a>
    </footer>
  );
};

export default Footer;
