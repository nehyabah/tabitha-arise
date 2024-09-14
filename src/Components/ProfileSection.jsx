import React, { useState } from "react";
import styles from "./ProfileSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const profiles = [
  {
    name: "Jennifer Alfa-Ogbaje",
    image:
      "https://res.cloudinary.com/djjxmi9xc/image/upload/v1726313082/e5ff538b-d5af-4883-9029-71d7682fd236_fpwfvo.jpg",
    description: "",
  },
  {
    name: "Oniya Omali",
    image:
      "https://res.cloudinary.com/djjxmi9xc/image/upload/v1726313082/6cf347e0-c667-4a10-a341-19af2fd4ed9e_c0bo8u.jpg",
    description: "",
  },
  {
    name: "Blessing Okeagu",
    image:
      "https://res.cloudinary.com/djjxmi9xc/image/upload/v1726313082/b954ea91-46c0-40c6-882d-9c81df34b708_ihlgyb.jpg",
    description: `Blessing is a graduate of the University of Portharcourt and had
worked in a legal firm in Nigeria, managing debtors account. Blessing
moved to Ireland, where she initially worked in the banking industry,
providing consumer support. She successfully transitioned into social
care and specialised working with Children in Residential Care. A
recent graduate of Masters in Social Work complemented by
qualifications in Applied Social Studies in Social Care, Community
Development, Leadership, and Economics in addition to possessing
relevant professional experience gained both from social work
internships within the Irish health and social care sector and over
nineteen years working with vulnerable children and families with
varying needs.

Blessing is a committed foster carer, a Registered Social Worker and
current member of the fostering ambassador&#39;s committee, promoting
the needs of carers and children in our care. She has acquired
valuable insight into the needs of families and children and
experienced Keyworker, advocacy and Children’s Right’s Officer
within a government agency.`,
  },
  {
    name: "Vanessa Ifueko Ohiwerei",
    image:
      "https://res.cloudinary.com/djjxmi9xc/image/upload/v1726313082/6cf347e0-c667-vanessa-image.jpg",
    description: `Bar. Vanessa Ifueko Ohiwerei attended the Edo State University, where she obtained an LL.B Hons in 1998, and was subsequently called to the Nigerian Bar in 2001. In 2014, she was awarded MSc in Management (Business) from Dublin City University (DCU) and that same year she also obtained a Graduate certificate in Innovation, Entrepreneurship and Enterprise from University College Dublin (UCD). She obtain a Diploma in psychology in 2016 and was
awarded, HIDIP in Applied Social Studies from Carlow Instituted of Ireland in 2018.

Vanessa Ifueko is a member of the Nigerian Bar Association, an Associate-Member Nigerian
Institute of Management and Graduate member of Institute of Management Consultant and Advisers. Ireland

Her previous places of employment in Nigeria include Kogi State Primary Education Board (legal adviser), wimemo Ogunde &amp; co (placement), Partnership Investment Company Limited,
NNB International Bank Plc (now Afribank Nigeria Plc) and Cenoptics business Ltd. In Ireland worked with Affinity Solutions Limited, Support Consultant, DAFM, Nua Healthcare. She presently work in SJOG.

Vanessa had also volunteer her time with Age Action Ireland, where by she taught basic computer. She presently children worker in Life Church Portlaoise.

Vanessa Ifueko is married to Cecil Ikhide Ohiwerei and they are blessed with 2 kids.`,
  },
  {
    name: "Jumai Adegbesan",
    image:
      "https://res.cloudinary.com/dfjv35kht/image/upload/v1726348735/WhatsApp_Image_2024-09-14_at_22.11.01_ycgrom.jpg",
    description: ``,
  },
  {
    name: "Amina Ochai",
    image:
      "https://res.cloudinary.com/djjxmi9xc/image/upload/v1726348485/ibe_ndww5v.jpg",
    description: ``,
  },
];

const ProfileSection = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const closeModal = () => {
    setSelectedProfile(null);
  };

  return (
    <div className={styles.profileSection}>
      <h1 className={styles.heading}>Meet the Team</h1>
      <div className={styles.profilesGrid}>
        {profiles.map((profile, index) => (
          <div
            key={index}
            className={styles.profileCard}
            onClick={() => setSelectedProfile(profile)}
          >
            <div className={styles.imageContainer}>
              <img
                src={profile.image}
                alt={profile.name}
                className={styles.profileImage}
              />
            </div>
            <h2 className={styles.profileName}>{profile.name}</h2>
          </div>
        ))}
      </div>

      {selectedProfile && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <div className={styles.modalProfile}>
              <div className={styles.modalImageContainer}>
                <img
                  src={selectedProfile.image}
                  alt={selectedProfile.name}
                  className={styles.modalProfileImage}
                />
              </div>
              <h2 className={styles.modalProfileName}>
                {selectedProfile.name}
              </h2>
              <div className={styles.modalProfileDescription}>
                {selectedProfile.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
