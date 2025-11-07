import { useState, useEffect, useRef } from 'react'
import styles from './StatCard.module.css'

const StatCard = ({ number, label }) => {
  const [displayNumber, setDisplayNumber] = useState(0)
  const [animationTrigger, setAnimationTrigger] = useState(0)
  const ref = useRef()
  const targetNumber = parseInt(number)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationTrigger(prev => prev + 1)
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
  }, [])

  useEffect(() => {
    if (animationTrigger > 0) {
      setDisplayNumber(0) // Reset to 0 first
      
      const duration = 3000 // 2 seconds
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
  }, [animationTrigger, targetNumber])

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