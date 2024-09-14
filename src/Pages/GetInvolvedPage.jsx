import React from "react";
import Header from "../Components/header";
import Footer from "../Components/Footer";
import styles from "./GetInvolvedPage.module.css";

const GetInvolvedPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.bannerSection}>
        <img
          src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726323018/pexels-kwakugriffn-14346814_wrf3fk.jpg"
          alt="Get Involved Banner"
          className={styles.bannerImage}
        />
        <div className={styles.bannerText}>
          <h1>Get Involved</h1>
          <p>
            Your support makes a difference. Join us in empowering communities.
          </p>
          <button className={styles.ctaButton}>Donate Now</button>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <section className={styles.section}>
          <h2>Ways to Get Involved</h2>

          <div className={styles.cardGrid}>
            {/* Donate Card */}
            <div className={styles.card}>
              <h3>Donate</h3>
              <p>
                Your generous donations help us provide essential support to
                those in need.
              </p>
              <button className={styles.secondaryButton}>Learn More</button>
            </div>

            {/* Volunteer Card */}
            <div className={styles.card}>
              <h3>Volunteer</h3>
              <p>
                Join our team of volunteers and make a hands-on impact in our
                community.
              </p>
              <button className={styles.secondaryButton}>Sign Up</button>
            </div>

            {/* Fundraise Card */}
            <div className={styles.card}>
              <h3>Fundraise</h3>
              <p>
                Create your own fundraiser to support our mission and spread the
                word.
              </p>
              <button className={styles.secondaryButton}>Get Started</button>
            </div>

            {/* Partner Card */}
            <div className={styles.card}>
              <h3>Partner with Us</h3>
              <p>Collaborate with us through partnerships or sponsorships.</p>
              <button className={styles.secondaryButton}>Contact Us</button>
            </div>
          </div>
        </section>
        {/* 
        <section className={styles.section}>
          <h2>Success Stories</h2>
          <div className={styles.testimonial}>
            <p>
              "Thanks to Tabitha Arise Foundation, our community now has access
              to clean water and education. Their support has changed our
              lives."
            </p>
            <h4>– Beneficiary Name</h4>
          </div>
        </section> */}

        <section className={styles.section}>
          <h2>Stay Connected</h2>
          <p>
            Sign up for our newsletter to receive the latest updates and
            opportunities.
          </p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className={styles.ctaButton}>
              Subscribe
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default GetInvolvedPage;
