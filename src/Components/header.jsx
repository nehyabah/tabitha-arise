import React, { useState } from "react";
import styles from "./Header.module.css";

// Importing icons from the assets folder
import facebookLogo from "../Assets/facebookLogo.avif";
import gmailLogo from "../Assets/gmailLogo.jpeg";
import instagramLogo from "../Assets/InstagramLogo.jpeg";
import xLogo from "../Assets/XLogo.avif";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // This toggles the menu state
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <img
          src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1706560425/mail-PhotoRoom.png-PhotoRoom_1_v4jigt.png"
          alt="Logo"
        />
      </div>
      <div className={`${styles.headerNav} ${isOpen ? styles.open : ""}`}>
        <a href="/about">About Us</a>
        <a href="/work">Our Work</a>
        <a href="/involved">Get Involved</a>
        <a href="/contact">Contact</a>
        <a href="/donate">Donate</a>
        {/* <div className={styles.socialIcons}>
          <img src={facebookLogo} alt="Facebook" />
          <img src={gmailLogo} alt="Gmail" />
          <img src={instagramLogo} alt="Instagram" />
          <img src={xLogo} alt="X" />
        </div> */}
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default Header;
