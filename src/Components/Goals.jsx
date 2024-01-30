import React from "react";
<<<<<<< HEAD
import styles from "./Goals.module.css"; // Make sure the path is correct
=======
import Slider from "react-slick";
import styles from "./Goals.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
>>>>>>> trial

const Goals = () => {
  const goals = [
    {
      category: "Development",
      text: "Promote good quality of life for people living in disadvantaged areas and identifying areas to enhance development.",
    },
    {
      category: "Education",
      text: "To provide scholarship/financial help to individuals especially children from displaced and disadvantaged communities.",
    },
    {
      category: "Health",
<<<<<<< HEAD
      text: "Be a resource for information and the promotion of positive health within disadvantage communities.",
    },
    // ... add other goals as needed
  ];

=======
      text: "To be a resource for information and the promotion of positive health within disadvantage communities.",
    },
    {
      category: "Support",
      text: "To create means for the provision of medical assistance to individuals in disadvantaged and rural communities.",
    },
    {
      category: "Reintegration",
      text: "To provide support to people who have been displaced and living in IDP camps and people who have been impacted by natural calamities.",
    },
    {
      category: "Finance",
      text: "To create opportunities for training, employment, and community reintegration for displaced individuals.",
    },
    {
      category: "Collaboration",
      text: "To raise funds through donations, collections or other means to promote the attainment of the aims and objectives of the organisation.",
    },
    {
      category: "Philanthropic",
      text: "To work collaboratively with other organisations with similar aims and goals to achieve above.",
    },

    {
      category: "Medicals",
      text: "To undertake any other work or assignment which may promote the general welfare/well being of vulnerable people in disadvantaged communities.",
    },
  ];

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

>>>>>>> trial
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Our Goals & Objectives</h1>
        <p>
          Our goal is to alleviate suffering and hardship, empower individuals
<<<<<<< HEAD
          living in disadvantaged areas as a result of local or national
          disaster or by reason of their social and economic circumstances.
        </p>
      </div>
      <div className={styles.goalsList}>
        {goals.map((goal, index) => (
          <div
            key={index}
            className={`${styles.goalItem} ${
              index === goals.length - 1 ? styles.lastGoalItem : ""
            }`}
          >
            <div className={styles.bullet}></div>
            <div className={styles.goalContent}>
              <div className={styles.goalCategory}>{goal.category}</div>
              <p className={styles.goalText}>{goal.text}</p>
            </div>
          </div>
        ))}
      </div>
=======
          living in disadvantaged areas...
        </p>
      </div>
      <Slider {...settings} className={styles.slider}>
        {goals.map((goal, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.goalCategory}>{goal.category}</div>
            <p className={styles.goalText}>{goal.text}</p>
          </div>
        ))}
      </Slider>
>>>>>>> trial
    </div>
  );
};

export default Goals;
