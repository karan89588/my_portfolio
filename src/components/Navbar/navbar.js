import React, { useState } from "react";
import logo from "../../images/logo.png";
import contact from "../../images/contact.png";
import menu from "../../images/menu.png";
import { Link } from "react-scroll";
import "./navstyle.css";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="nav">
      <nav className="navbar">
        <img className="navlogo" src={logo} alt="Logo" />
        <div className="navLinks">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            className="navLinkItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-140}
            className="navLinkItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            className="navLinkItem"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            className="navLinkItem"
          >
            Client
          </Link>
        </div>
        <button
          className="navbtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contact} className="navcontactbtnimg" />
          Contact Us
        </button>
        <img
          className="mobMenuLogo"
          src={menu}
          alt="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            className="linkItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-140}
            className="linkItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            className="linkItem"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            className="linkItem"
            onClick={() => setShowMenu(false)}
          >
            Client
          </Link>
        </div>
      </nav>
    </div>
  );
}
