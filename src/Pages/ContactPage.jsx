import React from "react";
import Header from "../Components/header";
import Footer from "../Components/Footer";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.contactPage}>
        <section className={styles.formSection}>
          <h2>Get in Touch</h2>
          <p>
            Have questions or want to learn more? Fill out the form below, and
            we'll get back to you soon.
          </p>
          <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                placeholder="How can we assist you?"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
          <div className={styles.contactInfo}>
            <p>
              Or reach us directly at:
              <br />
              <strong>Phone:</strong>{" "}
              <a href="tel:+353871380740">+353871380740</a>
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:tabithaarisefoundation@gmail.com">
                tabithaarisefoundation@gmail.com
              </a>
            </p>
          </div>
        </section>
        <section className={styles.imageSection}>
          <img
            src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726309173/Mask_group_o26rdl.png"
            alt="Happy children"
            className={styles.contactImage}
          />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
