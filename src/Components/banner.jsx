import React from "react";
import styles from "./Banner.module.css"; // Import the CSS module

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1>Welcome to Tabitha Arise</h1>
      <p>Fostering Hope & Empowerment</p>
      <button className={styles.joinButton}>JOIN OUR CAUSE</button>
    </div>
  );
};

export default Banner;
