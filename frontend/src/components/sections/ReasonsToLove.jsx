import styles from './ReasonsToLove.module.css';
import FriendlyInterfaceIcon from '../../assets/images/vectors/business-vector.svg';
import PowerfulOptionsIcon from '../../assets/images/vectors/settings-vector.svg';
import SimpleSetupIcon from '../../assets/images/vectors/design-vector.svg';
import EasilyManageableIcon from '../../assets/images/vectors/document-vector.svg';
import CleanDesignIcon from '../../assets/images/vectors/quill-pen-vector.svg';
import purpleVector from '../../assets/images/vectors/reasons-to-love.svg';

export default function ReasonsToLove() {
    const reasons = [
        {
            icon: FriendlyInterfaceIcon,
            title: 'Friendly Interface',
            description: 'Enjoy a clean, intuitive design that makes setting goals effortless.'
        },
        {
            icon: PowerfulOptionsIcon,
            title: 'Powerful Options',
            description: 'Customize your goals, milestones, and reminders to suit your style.'
        },
        {
            icon: SimpleSetupIcon,
            title: 'Simple Setup',
            description: 'Get started in minutes — no complicated onboarding required.'
        },
        {
            icon: EasilyManageableIcon,
            title: 'Easily Manageable',
            description: 'Keep all your goals organized and easy to update anytime.'
        },
        {
            icon: CleanDesignIcon,
            title: 'Clean Design',
            description: 'A minimal look that\'s pleasant to use, day in and day out.'
        }
    ];

    return (
        <section className={styles.reasonsContainer}>
            <div className={styles.contentWrapper}>
                {/* Section Title */}
                <h2 className={styles.sectionTitle}>More Reasons to Love PlanBuddy</h2>

               
                <div className={styles.reasonsGrid}>
                    {reasons.slice(0, 3).map((reason, index) => (
                        <div key={index} className={styles.reasonCard}>
                            
                            <div className={styles.iconContainer}>
                                <img 
                                    src={purpleVector} 
                                    alt="Purple background"
                                    className={styles.purpleBlob}
                                />
                                <img 
                                    src={reason.icon} 
                                    alt={`${reason.title} icon`}
                                    className={styles.reasonIcon}
                                />
                            </div>

                            <div className={styles.textContent}>
                                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                                <p className={styles.reasonDescription}>{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

               
                <div className={styles.bottomReasonsContainer}>
                    {reasons.slice(3, 5).map((reason, index) => (
                        <div key={index + 3} className={styles.reasonCard}>
                           
                            <div className={styles.iconContainer}>
                                <img 
                                    src={purpleVector} 
                                    alt="Purple background"
                                    className={styles.purpleBlob}
                                />
                                <img 
                                    src={reason.icon} 
                                    alt={`${reason.title} icon`}
                                    className={styles.reasonIcon}
                                />
                            </div>

                            <div className={styles.textContent}>
                                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                                <p className={styles.reasonDescription}>{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}