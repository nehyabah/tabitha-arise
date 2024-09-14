import React from "react";
import styles from "./Content.module.css";

const Content = () => {
  const bannerImageUrl =
    "https://res.cloudinary.com/djjxmi9xc/image/upload/v1706638790/AdobeStock_315802397_jk8o5l.jpg";
  const imageUrl1 =
    "https://res.cloudinary.com/djjxmi9xc/image/upload/v1706638963/AdobeStock_652331796_i31ylm.jpg";
  const imageUrl2 =
    "https://res.cloudinary.com/djjxmi9xc/image/upload/v1706638790/AdobeStock_315802397_jk8o5l.jpg";

  return (
    <div className={styles.pageContainer}>
      <div className={styles.bannerSection}>
        <img
          src={bannerImageUrl}
          alt="Empowering Communities Banner"
          className={styles.bannerImage}
        />
        <div className={styles.bannerText}>
          <h1>Empowering Communities</h1>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <section className={styles.introSection}>
          <p>
            In 2018, Tabitha Arise responded to the needs and devastating
            conditions being experienced by families, orphaned children, widows,
            and individuals living in Internal Displaced Camps in some states in
            Nigeria by supporting them with basic needs.
          </p>
          <p>
            These communities continue to experience attacks by unknown
            assailants where whole communities have been burnt down during
            midnight raids, leading to ardent suffering and losses,
            destabilisation of farmland and crops, and the children having no
            immediate access to primary education.
          </p>
          <p>
            TAF is looking to penetrate these areas and others like it to assist
            with these growing needs and is taking some radical steps to launch
            various relief distribution & rehabilitation projects. A long-term
            future goal is the rebuilding of these communities, set-up of basic
            health centres to provide basic medical assistance to these
            communities.
          </p>
          <p>
            As community participation is vital for sustainability of
            development projects, TAF has set up charitable educational trust
            funds and is currently sponsoring one of the children in the IDP
            camp.
          </p>
        </section>

        <section className={styles.reasonsSection}>
          <h2>Reasons to Partner with Tabitha Arise Foundation</h2>

          <div className={styles.flexSection}>
            <div className={`${styles.card} ${styles.textCard}`}>
              <h3>Empowering Vulnerable Communities</h3>
              <p>
                Your support will empower the Tabitha Arise Foundation to make a
                tangible difference in the lives of vulnerable communities.
                Through various initiatives, such as education, healthcare, and
                economic empowerment programs, the foundation is dedicated to
                lifting individuals and communities out of poverty and
                adversity. Your contribution directly fuels these initiatives,
                providing education, resources, and opportunities to those who
                need them most.
              </p>
            </div>
            <div className={`${styles.card} ${styles.imageCard}`}>
              <img src={imageUrl1} alt="Empowering Vulnerable Communities" />
            </div>
          </div>

          <div className={styles.flexSection}>
            <div className={`${styles.card} ${styles.imageCard}`}>
              <img src={imageUrl2} alt="Where Does My Giving Go?" />
            </div>
            <div className={`${styles.card} ${styles.textCard}`}>
              <h3>Where Does My Giving Go?</h3>
              <p>
                When you partner with Tabitha Arise Foundation, your giving goes
                directly to initiatives that empower vulnerable communities
                through education, healthcare, and economic opportunities. We
                prioritise transparency and accountability, ensuring that your
                contribution is used efficiently to make a tangible difference
                in the lives of those in need.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
