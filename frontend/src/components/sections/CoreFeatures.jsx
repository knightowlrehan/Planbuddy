import React from 'react';
import styles from './CoreFeatures.module.css';

const mockupImage = '/images/app-screenshots/mockup_6.png';
const avatar = '/images/avatar/avatar_3.png';
const progressIcon = '/images/icons/progress-tracking.svg';
const subGoalsIcon = '/images/icons/sub-goal.svg';
const customizableIcon = '/images/icons/customizable-goal.svg';
const reminderIcon = '/images/icons/reminder.svg';

const features = [
  {
    id: 1,
    icon: progressIcon,
    title: 'Progress Tracking',
    description: 'Visual charts and history logs to keep motivated.',
    position: 'top'
  },
  {
    id: 2,
    icon: subGoalsIcon,
    title: 'Sub-goals',
    description: 'Break big goals into smaller, achievable steps.',
    position: 'middleTop'
  },
  {
    id: 3,
    icon: customizableIcon,
    title: 'Customizable Goal',
    description: 'Adapt goals to match your lifestyle and priorities.',
    position: 'middleBottom'
  },
  {
    id: 4,
    icon: reminderIcon,
    title: 'Reminder',
    description: 'Stay on track with timely alerts for your goals and deadlines.',
    position: 'bottom'
  }
];

export default function CoreFeatures() {
  return (
    <section className={styles.coreFeaturesSection}>
      
      
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Core Features</h2>
        
        <div className={styles.contentWrapper}>
          {/* Left Side - Image with Avatar */}
          <div className={styles.imageSection}>
            <div className={styles.phoneContainer}>
              <img 
                src={mockupImage} 
                alt="PlanBuddy App Mockup" 
                className={styles.phoneImage}
              />
            </div>
            <img 
              src={avatar} 
              alt="Avatar" 
              className={styles.avatar}
            />
          </div>
          

          <div className={styles.featuresWrapper}>
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className={`${styles.featureItem} ${styles[feature.position]}`}
              >
                <div className={styles.iconContainer}>
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className={`${styles.featureIcon} ${styles[`icon${feature.title.replace(/\s+/g, '')}`]}`}
                  />
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}