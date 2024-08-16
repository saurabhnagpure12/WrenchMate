import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navbarParent">
      <header className="navbar">
        <div className="navItem">
          <img src="./logo.png" alt="Logo" className="logo" />
        </div>

        <div className="navItems">
          <div className="navItem">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="navItem2"
            >
              About us
            </Link>
          </div>
          <div className="navItem">
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              className="navItem5"
            >
              Service
            </Link>
          </div>
          <div className="navItem">
            <Link
              to="contact"
              
              smooth={true}
              duration={500}
              offset={-70}
              className="navItem11 blue"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
