import React from "react";
import Header from "../Components/header";
import Footer from "../Components/Footer";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.bannerSection}>
        <img
          src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726322118/pexels-emmages-9628111_vao8uf.jpg"
          alt="About Us Banner"
          className={styles.bannerImage}
        />
        <div className={styles.bannerText}>
          <h1>About Us</h1>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <section className={styles.introSection}>
          <h2>Who We Are</h2>
          <p>
            Tabitha Arise Foundation (TAF) is a direct and urgent response by a
            group of dynamic women to the suffering and hardship being
            experienced by displaced families, orphans, widows, and individuals
            living in IDP camps. TAF is a not-for-profit organization and has an
            ongoing partnership with other charities. We have worked
            collaboratively with our partners to donate food, toiletries, and
            clothing to communities living in deplorable conditions since its
            inception.
          </p>
        </section>

        <section className={styles.missionSection}>
          <h2>Our Mission</h2>
          <p>
            TAF endeavors to empower the most vulnerable in Nigerian society,
            focusing particularly on the inhabitants of IDP camps. We have
            supported vulnerable communities over the years and were formally
            founded in 2018 as an immediate response to the abject poverty and
            suffering of individuals living in IDP camps.
          </p>
        </section>

        <section className={styles.teamSection}>
          <h2>Our Team</h2>
          <p>
            As the need for ongoing support became evident, TAF was registered
            as an NGO in 2019. Our team comprises dynamic Nigerian women
            residing in Nigeria, Ireland, the United Kingdom, Canada, and
            America. We come from diverse professional backgrounds, including
            banking, pharmaceuticals, law, and social work.
          </p>
        </section>

        <section className={styles.valuesSection}>
          <h2>Our Values</h2>
          <p>
            TAF operates under the slogan “Hope. Empowerment.” Our key
            objectives are to create hope within these communities and empower
            them to achieve long-term financial independence. We adopt a
            rights-based approach, encouraging community involvement,
            participation, and active citizenship to ensure they are not
            isolated from the wider society.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
