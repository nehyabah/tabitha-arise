import React from "react";
import styles from "./Goals.module.css";

const Goals = () => {
  const goals = [
    {
      icon: "📚", // Use actual icons or SVGs in production
      category: "Education",
      text: "Provide scholarships and financial help to children from disadvantaged communities.",
    },
    {
      icon: "💊",
      category: "Health",
      text: "Promote positive health and provide medical assistance in disadvantaged communities.",
    },
    {
      icon: "💼",
      category: "Development",
      text: "Promote good quality of life for people living in disadvantaged areas and identifying areas to enhance development.",
    },
    {
      icon: "🌍",
      category: "Support",
      text: "Provide support to displaced people living in IDP camps and those impacted by natural disasters.",
    },
    {
      icon: "🏥",
      category: "Medicals",
      text: "Create means for providing medical assistance to individuals in disadvantaged and rural communities.",
    },
    {
      icon: "🔄",
      category: "Reintegration",
      text: "Create opportunities for training, employment, and community reintegration for displaced individuals.",
    },
    {
      icon: "💰",
      category: "Finance",
      text: "Raise funds through donations, collections, or other means to support the organization’s objectives.",
    },
    {
      icon: "🤝",
      category: "Collaboration",
      text: "Collaborate with other organizations with similar aims and goals to achieve shared objectives.",
    },
    {
      icon: "🎗️",
      category: "Philanthropic",
      text: "Engage in activities that promote the welfare of vulnerable people in disadvantaged communities.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Our Goal & Objectives</h1>
        <p>
          Our goal is to alleviate suffering and hardship, empower individuals
          living in disadvantaged areas as a result of local or national
          disaster or by reason of their social and economic circumstances.
        </p>
      </div>
      <div className={styles.goalsGrid}>
        {goals.map((goal, index) => (
          <div key={index} className={styles.goalItem}>
            <h3 className={styles.goalCategory}>
              <span className={styles.icon}>{goal.icon}</span> {goal.category}
            </h3>
            <p className={styles.goalText}>{goal.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
