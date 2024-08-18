import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="navbarParent">
      <header className="navbar">
        <div className="logoContainer">
          <img src="./logo.png" alt="Logo" className="logo" />
        </div>

        <div className={`navItemsContainer ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="navItem">
            <Link
              to="about"
              smooth={true}
              className="link"
              duration={500}
              offset={-70}
              onClick={() => setMobileMenuOpen(false)}
            >
              About us
            </Link>
          </div>
          <div className="navItem">
            <Link
              to="services"
               className="link"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMobileMenuOpen(false)}
            >
              Service
            </Link>
          </div>
          <div className="navItem">
            <Link
              to="contact"
              smooth={true}
              duration={500}
                 className="link"
              offset={-70}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mobileMenuToggle">
          <button onClick={toggleMobileMenu} className="mobileMenuButton">
            ☰
          </button>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
