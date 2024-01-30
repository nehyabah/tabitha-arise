import React from "react";
import Styles from "./Content.module.css";

const Content = () => {
  const imageUrl =
    "https://res.cloudinary.com/djjxmi9xc/image/upload/v1706638790/AdobeStock_315802397_jk8o5l.jpg";
  const imageUrl2 =
    "https://res.cloudinary.com/djjxmi9xc/image/upload/v1706638963/AdobeStock_652331796_i31ylm.jpg";
  return (
    <div className={Styles.container}>
      <p className={Styles.para}>
        In 2018, Tabitha Arise responded to the needs and devastating conditions
        being experienced by families, orphaned children, widows, and
        individuals living in Internal Displaced Camps in some states in Nigeria
        by supporting them with basic needs.
        <span>
          These communities continue to experience attacks by unknown assailants
          where whole communities have been burnt down during midnight raids,
          leading to ardent suffering and losses, destabilisation of farmland
          and crops, and the children having no immediate access to primary
          education.
        </span>
        <span>
          TAF is looking to penetrate these areas and others like it to assist
          with these growing needs and is taking some radical steps to launch
          various relief distribution & rehabilitation projects. A long-term
          future goal is the rebuilding of these communities, set-up of basic
          health centres to provide basic medical assistance to these
          communities.
        </span>
        <span>
          As community participation is vital for sustainability of development
          projects, TAF has set up charitable educational trust funds and is
          currently sponsoring one of the children in the IDP camp.
        </span>
      </p>

      <div className={Styles.newContent}>
        <h2 className={Styles.h1style}>
          Reasons to partner with Tabitha Arise Foundation to make a difference
        </h2>
        <div className={Styles.flexSection}>
          <div className={`${Styles.card} ${Styles.text}`}>
            <h2 className={Styles.cardContent1}>
              Empowering Vulnerable Communities
            </h2>
            <p className={Styles.cardContent}>
              Empowering Vulnerable Communities Your support will empower the
              Tabitha Arise Foundation to make a tangible difference in the
              lives of vulnerable communities. Through various initiatives, such
              as education, healthcare, and economic empowerment programs, the
              foundation is dedicated to lifting individuals and communities out
              of poverty and adversity. Your contribution directly fuels these
              initiatives, providing education, resources, and opportunities to
              those who need them most.
            </p>
          </div>
          <div className={`${Styles.card} ${Styles.image}`}>
            <img src={imageUrl2} alt="Empowering Vulnerable Communities" />
          </div>
        </div>

        {/* Section with image on the left and card on the right */}
        <div className={`${Styles.flexSection} ${Styles.reverseFlex}`}>
          <div className={`${Styles.card} ${Styles.image}`}>
            <img src={imageUrl} alt="Where does my giving go?" />
          </div>
          <div className={`${Styles.card} ${Styles.text}`}>
            <h2 className={Styles.cardContent1}>Where does my giving go?</h2>
            <p className={Styles.cardContent}>
              When you partner with Tabitha Arise Foundation, your giving goes
              directly to initiatives that empower vulnerable communities
              through education, healthcare, and economic opportunities. We
              prioritise transparency and accountability, ensuring that your
              contribution is used efficiently to make a tangible difference in
              the lives of those in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
