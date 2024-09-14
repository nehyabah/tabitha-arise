import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo} onClick={handleLogoClick}>
        <img
          src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1706560425/mail-PhotoRoom.png-PhotoRoom_1_v4jigt.png"
          alt="Logo"
        />
      </div>
      <nav className={`${styles.headerNav} ${isOpen ? styles.open : ""}`}>
        <Link to="/aboutUs" onClick={closeMenu}>
          About Us
        </Link>
        <Link to="/ourWork" onClick={closeMenu}>
          Our Work
        </Link>
        <Link to="/getInvolved" onClick={closeMenu}>
          Get Involved
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link to="/donate" onClick={closeMenu}>
          Donate
        </Link>
      </nav>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="navigation-menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
    </header>
  );
};

export default Header;
