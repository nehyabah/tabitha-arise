import React, { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./OurWorkPage.module.css";

const OurWorkPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <section className={styles.introSection}>
          <h1>Our Work</h1>
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
          {!showMore && (
            <button className={styles.readMoreButton} onClick={toggleReadMore}>
              Read More
            </button>
          )}
        </section>

        {showMore && (
          <section className={styles.detailsSection}>
            <h2>About Tabitha Arise Foundation</h2>
            <p>
              TAF endeavors to empower the most vulnerable in Nigerian society,
              focusing particularly on the inhabitants of IDP camps. We have
              supported vulnerable communities over the years and were formally
              founded in 2018 as an immediate response to the abject poverty and
              suffering of individuals living in IDP camps.
            </p>
            <p>
              As the need for ongoing support became evident, TAF was registered
              as an NGO in 2019. Our team comprises dynamic Nigerian women
              residing in Nigeria, Ireland, the United Kingdom, and America. We
              come from diverse professional backgrounds, including banking,
              pharmaceuticals, law, and social work.
            </p>
            <p>
              TAF operates under the slogan “Hope. Empowerment.” Our key
              objectives are to create hope within these communities and empower
              them to achieve long-term financial independence. We adopt a
              rights-based approach, encouraging community involvement,
              participation, and active citizenship to ensure they are not
              isolated from the wider society.
            </p>
            <button className={styles.readMoreButton} onClick={toggleReadMore}>
              Show Less
            </button>
          </section>
        )}

        <section className={styles.mediaSection}>
          <h2>Easter 2024 Outreach to Mangu IDP Camp, Plateau State</h2>
          <div className={styles.videoContainer}>
            <video controls>
              <source
                src="https://res.cloudinary.com/djjxmi9xc/video/upload/v1726309789/WhatsApp_Video_2024-09-08_at_20.24.27_pcmfel.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className={styles.carouselSection}>
          <h2>December 2023 Outreach to Benue IDP Camp</h2>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            className={styles.carousel}
          >
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726310508/ta1_v4mksu.jpg"
                alt="Benue IDP Camp 1"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726310508/ta3_vimbcw.jpg"
                alt="Benue IDP Camp 2"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726310507/ta2_yb4atq.jpg"
                alt="Benue IDP Camp 3"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726310507/ta4_vbazcb.jpg"
                alt="Benue IDP Camp 4"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726310507/ta5_m2kn12.jpg"
                alt="Benue IDP Camp 5"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726310507/ta6_uxtibf.jpg"
                alt="Benue IDP Camp 6"
              />
            </div>
          </Carousel>
        </section>

        <section className={styles.carouselSection}>
          <h2>2019 IDP Camp Heipang Relief</h2>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            className={styles.carousel}
          >
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726311220/taHeipang_vitlgp.jpg"
                alt="Heipang Relief 1"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726311248/taHeipang2_rkv2t5.jpg"
                alt="Heipang Relief 2"
              />
            </div>
          </Carousel>
        </section>

        <section className={styles.carouselSection}>
          <h2>Nandu Project</h2>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            className={styles.carousel}
          >
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726311214/tanandu_ir7rxi.jpg"
                alt="Nandu Project 1"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726311214/tanandu2_soqosj.jpg"
                alt="Nandu Project 2"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726311214/tanandu3_r5yoqo.jpg"
                alt="Nandu Project 3"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726311213/tanandu4_xcxc8t.jpg"
                alt="Nandu Project 4"
              />
            </div>
            {/* Skipping image tanandu10 as per your original code */}
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726311212/tanandu7_id74ss.jpg"
                alt="Nandu Project 7"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726311212/tanandu6_dapgwi.jpg"
                alt="Nandu Project 6"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/djjxmi9xc/image/upload/v1726311212/tanandu9_uiouf9.jpg"
                alt="Nandu Project 9"
              />
            </div>
          </Carousel>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OurWorkPage;
