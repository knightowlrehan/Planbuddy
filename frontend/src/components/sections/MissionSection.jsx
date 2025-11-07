import React from "react";
import styles from './MissionSection.module.css';

const Vector1 = '/images/vectors/Vector1.svg';

const MissionSection = () => {
  return (
    <div id="about" className={styles.missionSection}>
      <div className={styles.titleContainer}>
        <img 
          className={styles.vectorBackground}
          src={Vector1}
          alt="Vector background"
        />
        <h2 className={styles.title}>
          Our Mission
        </h2>
      </div>
      <p className={styles.description}>
        At PlanBuddy, our mission is to help you turn your aspirations into achievable actions.
        We believe that every goal — big or small — starts with a clear plan and consistent effort.
        Our app is built to guide you through setting meaningful goals, breaking them into manageable
        steps, and tracking your progress so you can stay motivated and focused every day.
      </p>
    </div>
  );
};

export default MissionSection;
