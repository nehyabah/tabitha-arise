import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaX } from "react-icons/fa";
import { TbLetterX } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <h2>Tabitha Arise Foundation</h2>
          <p>
            Empowering the vulnerable and creating hope for a better future.
          </p>
        </div>

        <div className={styles.contactSection}>
          <h3>Contact Us</h3>
          <p>Phone: +353871380740 +2348037880054</p>
          <p>
            Email:{" "}
            <a href="mailto:tabithaarisefoundation@gmail.com">
              tabithaarisefoundation.com
            </a>
          </p>
        </div>

        <div className={styles.socialSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/tabithaarisefoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className={styles.socialIcon} />
            </a>
            <a
              href="https://www.instagram.com/tabithaarisefoundation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a
              href="https://www.x.com/Tabitha_Arise"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 Tabitha Arise Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
