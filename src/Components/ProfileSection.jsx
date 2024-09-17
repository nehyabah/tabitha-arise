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
    description: `Jennifer has a Bsc in Physics and Computer Science from the Federal University of Technology Minna, Nigeria, BA (Hons) Applied Social Studies from Carlow College, MA in Child, Family and Community Studies from Dublin institute of Technology, Masters in Social Work from Trinity College Dublin and a Diploma in Intermediary Studies from University of Limerick.
 Jennifer worked in the banking industry in Nigeria and managed a robust portfolio in Private and Consumer banking. Over the last two decades, Jennifer successfully transitioned from the field of banking and has gained extensive experience in the field of Social Work, having worked in Medical Social Work, Child Protection and Welfare, Clinical Support Services and Primary Care. As a registered Social Work Practitioner Jennifer adopts a human rights based approach and has worked with varying clients from diverse backgrounds; children from disadvantaged areas, struggling families, vulnerable young adults, women/men in abusive relationships, adults with varying levels of disabilities, individuals with mental health difficulties etc. 
Jennifer also volunteers in the community, doing advocacy work and promoting community involvement and participation. Jennifer is a certified and experienced trainer and has supported forums providing advocacy, counselling and has engaged in discussions on promoting clients self-efficacy and self-determination. `,
  },
  {
    name: "Oniya Omali",
    image:
      "https://res.cloudinary.com/djjxmi9xc/image/upload/v1726313082/6cf347e0-c667-4a10-a341-19af2fd4ed9e_c0bo8u.jpg",
    description: `Oniya Omali is a Wife, a Mother as well as  a Training and Marketing Consultant.  She is the Managing Partner of Workshop Networks Ltd, a Consulting, Developing and Brokering Firm.

She rose up the Banking Industry Corporate ladder  leaving as a Branch Manager with Zenith Bank Plc after 10 years. Oniya is passionate about giving back to the society and as such undertakes volunteer work at Rhema Bible Training Centre, Abuja; Brekete TV and radio station  as well as The Aloe & Ivy Children's Initiative as Director of Operation. She is passionate about human welfare and economic development. Oniya holds a Bachelors Degree in Accounting from Ahmadu Bello University, Zaria and  an MBA from University of Aberdeen, Scotland.`,
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
    description: `Jummai E. Adegbesan has a remarkable career as a Logistics Advisor, Supply Chain Management Specialist/Technical Advisor, Consultant in utilization of drug revolving fund and management of secondary/primary health care facilities in various states in Nigeria and previously Managed a Pharmaceutical Company Chain. A graduate of Ahmadu Bello University, Zaria, she is a member of the Pharmaceutical Society of Nigeria and Fellow of the West African Postgraduate College of Pharmacists. 
Ms. Adegbesan has in the last two decades carried out extensive work in various states in Nigeria, managing and coordinating logistics to pharmacists in several supported secondary health facilities. She also supports health care providers in numerous primary health care facilities on case management of Malaria, HIV/AIDS, TB and pregnant HIV positive clients to enhance integrated health care delivery system.  
With her understanding and knowledge of the complex health challenges facing Nigerians, particularly women and children, she has actively carried out extensive community mobilization, promoting community involvement and awareness via primary care teams, setting up clear referral pathways, feedback system and introduction of skills training to clients. She has established and supported forums where therapeutic interventions are provided to clients, engaged in discussions on how best the clients can be empowered and has developed training for clients on key programmes related to maternal/child health, HIV / AIDS, environmental and sanitation and linking them to health facilities to improve well being. 
She volunteers actively in her local community, working to empower women and promoting child education in disadvantaged areas.`,
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
