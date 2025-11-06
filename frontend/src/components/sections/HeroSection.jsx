import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import styles from './HeroSection.module.css';

const appScreenShot1 = '/images/app-screenshots/mockup_1.png';
const appScreenShot2 = '/images/app-screenshots/mockup_2.png';
const downloadingAppAvatar = '/images/avatar/downloading-app-avatar.svg';
const headerVector = '/images/vectors/header-Vector.svg';
const mobileHeaderVector = '/images/vectors/mobile-header-Vector.svg';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={styles.heroContainer}>
      {/* Background SVG */}
      <div className={styles.backgroundContainer}>
        <img 
          src={isMobile ? mobileHeaderVector : headerVector} 
          className={styles.purpleSvg} 
          alt="Bottom decorative vector" 
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.heroGrid}>
          
          {/* Text Section */}
          <div className={styles.textSection}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleText}>TURN BIG</span>
              <br />
              <span className={styles.heroTitleText}>DREAMS INTO</span>
              <br />
              <span className={styles.heroTitleText}>DAILY WINS</span>
              <br />
              <span className={styles.heroTitleText}>WITH</span>
              <br />
              <span className={styles.heroTitleText}>PLANBUDDY</span>
            </h1>
            
            {/* CTA Section */}
            <div className={styles.ctaSection}>
              <img 
                src={downloadingAppAvatar}
                alt="User avatar" 
                className={styles.avatar}
              />
              <Button 
                variant="download" 
                text="Download App"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              
              {/* Left Phone (Dark Theme) */}
              <div className={styles.phoneLeft}>
                <div className={styles.phoneLeftContainer}>
                  <img 
                    src={appScreenShot2}
                    alt="PlanBuddy app dark theme screenshot" 
                    className={styles.phoneImage}
                  />
                </div>
              </div>

              {/* Right Phone (Light Theme) */}
              <div className={styles.phoneRight}>
                <div className={styles.phoneRightContainer}>
                  <img 
                    src={appScreenShot1}
                    alt="PlanBuddy app light theme screenshot" 
                    className={styles.phoneImage}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}