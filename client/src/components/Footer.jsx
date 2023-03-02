import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/blog.png";

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={logo} />
      </Link>
      <span>
        Made with loves and <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
