import styles from './WhyChooseUs.module.css';

const Vector1 = '/images/vectors/Vector1.svg';
const Vector2 = '/images/vectors/Vector2.svg';
const whyChooseUsMobileVector = '/images/vectors/why-choose-us-mobile.svg';
const Avatar = '/images/avatar/avatar_2.png';
const AppScreenShot1 = '/images/app-screenshots/mockup_3.png';
const AppScreenShot2 = '/images/app-screenshots/mockup_4.png';

export default function WhyChooseUs() {
    return (
        <div className={styles.whyChooseUsContainer}>
            

           
            <div className={styles.avatarContainerDesktop}>
                <img src={Avatar} alt="Avatar" className={styles.avatarDesktop}/>
            </div>

            {/* Main Content Container */}
            <div className={styles.mainContainer}>
              
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Why Choose Us
                    </h2>
                    <p className={styles.description}>
                        PlanBuddy stands out with its balance of simplicity, motivation, and powerful features. Our intuitive design helps you organize your goals into categories, break them down into sub-goals and tasks, and track daily or weekly progress with easy-to-read visuals. With built-in reminders, dark mode support, and quick-view popups, PlanBuddy makes achieving your goals a seamless part of your daily life.
                    </p>
                </div>

                {/* Right Side - Phone Mockups with Vector Background */}
                <div className={styles.imageSection}>
                   
                    <div className={styles.vectorBackground}>
                        <img 
                            src={whyChooseUsMobileVector} 
                            alt="" 
                            className={styles.vectorImg}
                        />
                    </div>
                    
                    
                    <div className={styles.avatarContainerMobile}>
                        <img src={Avatar} alt="Avatar" className={styles.avatarMobile}/>
                    </div>
                    
                    {/* Phone Mockups */}
                    <div className={styles.phoneMockups}>
                       
                        <img 
                            src={AppScreenShot1} 
                            alt="App Screenshot 1" 
                            className={styles.phoneLeft}
                        />
                        
                        
                        <img 
                            src={AppScreenShot2} 
                            alt="App Screenshot 2" 
                            className={styles.phoneRight}
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Vectors - Desktop Only */}
            <img 
                src={Vector1} 
                alt="" 
                className={styles.decorativeVectorBottom}
            />
            <img 
                src={Vector2} 
                alt="" 
                className={styles.decorativeVectorTop}
            />
        </div>
    );
}