import React from "react";
import styles from "./Goals.module.css"; // Make sure the path is correct

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
      text: "Be a resource for information and the promotion of positive health within disadvantage communities.",
    },
    // ... add other goals as needed
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Our Goals & Objectives</h1>
        <p>
          Our goal is to alleviate suffering and hardship, empower individuals
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
    </div>
  );
};

export default Goals;
