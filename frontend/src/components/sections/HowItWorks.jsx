import styles from './HowItWorks.module.css';
import PhoneMockup from '../../assets/images/app-screenshots/mockup_8.png';
import StepIcon1 from '../../assets/images/icons/step-1.svg';
import StepIcon2 from '../../assets/images/icons/step-2.svg';
import StepIcon3 from '../../assets/images/icons/step-3.svg';
import StepIcon4 from '../../assets/images/icons/step-4.svg';

export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            icon: StepIcon1,
            title: 'Download the App',
            description: 'Get started by downloading PlanBuddy from the App Store or Google Play in just a few seconds.',
            alignRight: false
        },
        {
            number: '02',
            icon: StepIcon2,
            title: 'Set Up Your Account',
            description: 'Create your profile and personalize your settings to match your goal-tracking style.',
            alignRight: true
        },
        {
            number: '03',
            icon: StepIcon3,
            title: 'Track & Stay Motivated',
            description: 'Log your progress daily and receive reminders to keep you focused until you achieve success.',
            alignRight: false
        },
        {
            number: '04',
            icon: StepIcon4,
            title: 'Create Your First Goal',
            description: 'Define your main goal, break it into sub-goals, and start tracking your progress right away.',
            alignRight: true
        }
    ];

    return (
        <section id="how-it-works" className={styles.howItWorksContainer}>
            <div className={styles.contentWrapper}>
                
                <h2 className={styles.sectionTitle}>How PlanBuddy Works?</h2>

                {/* Main Content */}
                <div className={styles.mainGrid}>
                    
                    <div className={styles.stepsContainer}>
                        {steps.map((step, index) => (
                            <div 
                                key={index} 
                                className={`${styles.stepItem} ${step.alignRight ? styles.stepItemRight : ''} ${styles[`stepItem${index + 1}`]}`}
                            >
                                <div className={styles.stepContent}>
                                 
                                    <div className={styles.stepIconContainer}>
                                        <img 
                                            src={step.icon} 
                                            alt={`${step.title} icon`}
                                            className={`${styles.stepIcon} ${styles[`stepIcon${index + 1}`]}`}
                                        />
                                    </div>
                                    
                                    
                                    <div className={`${styles.stepText} ${styles[`stepText${index + 1}`]}`}>
                                        <h3 className={`${styles.stepTitle} ${styles[`stepTitle${index + 1}`]}`}>{step.title}</h3>
                                        <p className={`${styles.stepDescription} ${styles[`stepDescription${index + 1}`]}`}>{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                 
                    <div className={styles.phoneContainer}>
                        <img 
                            src={PhoneMockup} 
                            alt="PlanBuddy App Interface"
                            className={styles.phoneMockup}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}