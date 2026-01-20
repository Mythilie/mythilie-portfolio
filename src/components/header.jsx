import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./global.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Header() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [link, setLink] = useState("Home");
  return (
    <div className="header-container">
      <div className="headerLogo" onClick={() => navigate("/")}>
        <h2>Mythilie S</h2>
      </div>
      <div className="icons-link">
        <div
          onClick={() => {
            setLink("Home"), navigate("/");
          }}
          className={`link ${link === "Home" && "linkenable"}`}
        >
          Home
        </div>
        <div
          className={`link ${link === "Projects" && "linkenable"}`}
          onClick={() => {
            setLink("Projects"), navigate("/projects");
          }}
        >
          Projects
        </div>
        <div
          className={`link ${link === "Contact" && "linkenable"}`}
          onClick={() => {
            setLink("Contact"), navigate("/");
          }}
        >
          Contact
        </div>
      </div>
      <div className="menu-link" onClick={() => setOpenMenu(true)}>
        <GiHamburgerMenu />
      </div>
      {openMenu && (
        <>
          {/* Overlay */}
          <div className="overlay" onClick={() => setOpenMenu(false)}></div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="closeMenu" onClick={() => setOpenMenu(false)}>
              <IoMdClose />
            </div>
            <div
              className="sidebar-link"
              onClick={() => {
                setLink("Home");
                navigate("/");
                setOpenMenu(false);
              }}
            >
              Home
            </div>

            <div
              className="sidebar-link"
              onClick={() => {
                setLink("Projects");
                navigate("/projects");
                setOpenMenu(false);
              }}
            >
              Projects
            </div>

            <div
              className="sidebar-link"
              onClick={() => {
                setLink("Contact");
                navigate("/");
                setOpenMenu(false);
              }}
            >
              Contact
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
