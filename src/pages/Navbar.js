import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navbarParent">
      <header className="navbar">
        <div className="wrenchmateWrapper">
          <div className="wrenchmate">
            <span className="whiteText">W</span>
            <span className="blackText">rench</span>
            <span className="whiteText">M</span>
            <span className="blackText">ate</span>
          </div>
        </div>
        <div className="yourLogo" />
        <div className="navItems">
          <div className="navItem">
            <div className="navItem1">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70} // Adjust offset if you have a fixed header
                className="navItem2"
              >
                About us
              </Link>
            </div>
          </div>
          <div className="navItem3">
            <div className="navItem4">
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-70} // Adjust offset if you have a fixed header
                className="navItem5"
              >
                Service
              </Link>
            </div>
          </div>
          <div className="navItem9">
            <div className="navItem10">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70} // Adjust offset if you have a fixed header
                className="navItem11"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
