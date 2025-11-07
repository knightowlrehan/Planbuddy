import StatCard from '../common/StatCard'
import styles from './StatsSection.module.css'
import Vector1 from '../../assets/images/vectors/Vector1.svg';
import Vector2 from '../../assets/images/vectors/Vector2.svg';

const StatsSection = () => {
  const stats = [
    { number: '538', label: 'Downloads' },
    { number: '620', label: 'Likes' },
    { number: '81', label: '5 star rating' },
    { number: '24', label: 'Reviews' },
  ]
  
  return (
    <section className={styles.statsSection}>
      <div className={styles.sectionContainer}>
        <img 
          className={styles.vectorBackground}
          src={Vector2}
          alt="Vector background"
        />
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection