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
                <div className="icn-bg"><FaGithub /></div>
                <div className="icn-bg"><FaLinkedin /></div>
                <div className="icn-bg"><TbBrandFiverr /></div>
            </div>
        </div>
    )
}

export default Header;