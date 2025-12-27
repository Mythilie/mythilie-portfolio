import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import "./global.css";

function Header() {
  return (
    <div className="header-container">
      <div>
        <h2>Mythilie S</h2>
      </div>
      <div className="icons-link">
        <a
          className="icn-bg"
          href="https://github.com/Mythilie"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="icn-bg"
          href="https://www.linkedin.com/in/mythilie-s-834a14394/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <div className="icn-bg">
          <TbBrandFiverr />
        </div>
      </div>
    </div>
  );
}

export default Header;
