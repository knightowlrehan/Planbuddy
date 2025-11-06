import { useState, useEffect, useRef } from 'react'
import styles from './StatCard.module.css'

const StatCard = ({ number, label }) => {
  const [displayNumber, setDisplayNumber] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()
  const targetNumber = parseInt(number)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      const currentRef = ref.current
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // 2 seconds
      const steps = 60 // FPS
      const increment = targetNumber / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= targetNumber) {
          setDisplayNumber(targetNumber)
          clearInterval(timer)
        } else {
          setDisplayNumber(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, targetNumber])

  return (
    <div ref={ref} className={styles.statCard}>
      <div className={styles.number}>
        {displayNumber}
      </div>
      <div className={styles.label}>
        {label}
      </div>
    </div>
  )
}

export default StatCard