import { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';
import customer1 from '../../assets/images/customer-1.png';
import customer2 from '../../assets/images/customer-2.png';
const testimonials = [
    {
        id: 1,
        name: 'Sarah M.',
        avatar:customer1,
        text: 'This app transformed the way I approach my goals. Breaking them into small tasks keeps me motivated every day!',
        rating: 5
    },
    {
        id: 2,
        name: 'Kasan T.',
        avatar: customer2,
        text: 'I love how the app organizes everything visually. Seeing my completed goals motivates me to aim higher.',
        rating: 5
    },
    {
        id: 3,
        name: 'Sarah M.',
        avatar: customer1,
        text: 'This app transformed the way I approach my goals. Breaking them into small tasks keeps me motivated every day!',
        rating: 5
    },
    {
        id: 4,
        name: 'John D.',
        avatar: customer2,
        text: 'Finally, a goal tracking app that actually works! The reminders and progress tracking keep me on track.',
        rating: 5
    },
    {
        id: 5,
        name: 'Emma L.',
        avatar: customer1,
        text: 'PlanBuddy has completely changed how I manage my daily tasks. Highly recommend!',
        rating: 5
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const autoPlayRef = useRef(null);


    const [itemsPerView, setItemsPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerView(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerView(2);
            } else {
                setItemsPerView(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    useEffect(() => {
        if (isAutoPlaying && !isPaused) {
            autoPlayRef.current = setInterval(() => {
                handleNext();
            }, 5000); // Change slide every 5 seconds
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [currentIndex, isAutoPlaying, isPaused, itemsPerView]);

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex >= maxIndex) {
                return 0; // Loop back to start
            }
            return prevIndex + 1;
        });
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(true); 
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    
    const renderStars = (rating) => {
        return (
            <div className={styles.stars}>
                {[...Array(5)].map((_, index) => (
                    <span 
                        key={index} 
                        className={index < rating ? styles.starFilled : styles.starEmpty}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };


    const totalDots = maxIndex + 1;

    return (
        <section className={styles.testimonialsContainer}>
            <div className={styles.contentWrapper}>
                
                <h2 className={styles.sectionTitle}>Our Customer Say It Best</h2>

                <div 
                    className={styles.carouselWrapper}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div 
                        className={styles.carouselTrack}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div 
                                key={testimonial.id} 
                                className={styles.testimonialCard}
                                style={{
                                    minWidth: `${100 / itemsPerView}%`,
                                }}
                            >
                                <div className={styles.cardContent}>
                                    
                                    <p className={styles.testimonialText}>
                                        {testimonial.text}
                                    </p>

                                    
                                    <div className={styles.userInfo}>
                                        <img 
                                            src={testimonial.avatar} 
                                            alt={testimonial.name}
                                            className={styles.avatar}
                                        />
                                        <div className={styles.userDetails}>
                                            <h4 className={styles.userName}>{testimonial.name}</h4>
                                            {renderStars(testimonial.rating)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            
                <div className={styles.dotNavigation}>
                    {[...Array(totalDots)].map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${currentIndex === index ? styles.dotActive : ''}`}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}