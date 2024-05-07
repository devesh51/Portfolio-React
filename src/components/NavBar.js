import React from "react";
import { Link } from "react-scroll";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <nav className="main-nav">
        <span className="logo">Devesh Upadhyay</span>
        <ul className="main-nav-list">
          <li className="nav__item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="main-nav-link"
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="main-nav-link"
            >
              Skills
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="main-nav-link"
            >
              Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="contactMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="main-nav-link"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
