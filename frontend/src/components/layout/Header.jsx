import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const logo = '/images/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Contact Us', href: '#contact' }
  ]
  
  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerTransparent}`}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
        
          <div className={styles.logoContainer}>
            <div className={`${styles.logoCircle} ${isScrolled ? styles.logoCircleScrolled : styles.logoCircleDefault}`}>
              <img 
                src={logo} 
                alt="PlanBuddy Logo" 
                className={`${styles.logoImage} ${isScrolled ? styles.logoImageScrolled : styles.logoImageDefault}`}
              />
            </div>
            <a href='#' className={styles.brandText}>PlanBuddy</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <div key={item.label} className={styles.navItemContainer}>
                <a 
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header