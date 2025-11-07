import { useState, useEffect } from 'react';
import Button from '../common/Button';
import styles from './Footer.module.css';
import Logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar/avatar_3.png';
import linkedinIcon from '../../assets/images/social-media/linkedin-fill.svg';
import instagramIcon from '../../assets/images/social-media/instagram-fill.svg';
import tiktokIcon from '../../assets/images/social-media/tiktok-fill.svg';
import arrowUpIcon from '../../assets/images/arrow-up.svg';
import phoneIcon from '../../assets/images/phone.svg';
import mailIcon from '../../assets/images/mail.svg';
import bottomVector from '../../assets/images/vectors/bottom-vector.svg';

export default function Footer() {

  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={styles.scrollTopButton}
          aria-label="Scroll to top"
        >
          <img 
            src={arrowUpIcon} 
            alt="Arrow up" 
            className={styles.scrollTopIcon}
          />
        </button>
      )}
      
      <div className={styles.contentWrapper}>
        
        <div className={styles.contentContainer}>
          {/* Logo */}
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <div className={styles.logoCircle}>
                <img src={Logo} className={styles.logoImage} alt="PlanBuddy Logo"/>
              </div>
              <span className={styles.brandText}>PlanBuddy</span>
            </div>
          </div>

          
          <div className={styles.mainContent}>
            <div className={styles.updatesSection}>
              <h3 className={styles.updatesTitle}>Get the Latest Updates</h3>
              <p className={styles.updatesDescription}>
                Sign up to receive goal-setting tips, progress-tracking ideas, and the latest features from PlanBuddy—straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className={styles.emailInput}
                  required
                />
                <button
                  type="submit"
                  className={styles.subscribeButton}
                >
                  Get Updates
                </button>
              </form>
            </div>

            
            <div className={styles.contactSection}>
              <h3 className={styles.contactTitle}>Get in Touch</h3>
              
            
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <img src={mailIcon} alt="Mail" className={styles.contactIcon} />
                  <a href="mailto:apptiura@gmail.com" className={styles.contactLink}>
                    apptiura@gmail.com
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <img src={phoneIcon} alt="Phone" className={styles.contactIcon} />
                  <a href="tel:0720102135" className={styles.contactLink}>
                    0720102135
                  </a>
                </div>
              </div>

          
              <div className={styles.socialMedia}>
                <a
                  href="#"
                  className={`${styles.socialLink} ${styles.socialLinkLinkedin}`}
                  aria-label="LinkedIn"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
                </a>
                <a
                  href="#"
                  className={`${styles.socialLink} ${styles.socialLinkInstagram}`}
                  aria-label="Instagram"
                >
                  <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
                </a>
                <a
                  href="#"
                  className={`${styles.socialLink} ${styles.socialLinkTiktok}`}
                  aria-label="TikTok"
                >
                  <img src={tiktokIcon} alt="TikTok" className={styles.socialIcon} />
                </a>
              </div>

            
              <div className={styles.downloadSection}>
                <Button 
                variant="download" 
                text="Download App"
                className={styles.footerButton}
              />
                <img 
                  src={avatar}
                  alt="Avatar" 
                  className={styles.avatar}
                />
              </div>
            </div>
          </div>

          
          <div className={styles.copyright}>
            Copyright © 2025 PlanBuddy.  All rights reserved.
          </div>
        </div>
        
        {/* Bottom Vector */}
        <img src={bottomVector} className={styles.bottomVector} alt="Bottom decorative vector" />
      </div>
    </footer>
  );
}