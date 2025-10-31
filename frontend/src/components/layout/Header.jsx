import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../../public/images/logo.png';

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
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md mt-0' : 'bg-transparent mt-10'}`}>
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex justify-between items-center h-20">
        
          <div className="flex items-center gap-2">
            <div className={`bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-12 h-12 m-3' : 'w-20 h-20 m-0'}`}>
              <img 
                src={logo} 
                alt="PlanBuddy Logo" 
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-198px' : 'h-20'}`}
              />
            </div>
            <a href='#'><span className="text-4xl font-semibold font-weight-600 text-black planbuddy-text">PlanBuddy</span></a>
          </div>
          
          {/* Desktop  */}
          <div className="hidden md:flex items-center gap-10 ml-auto">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-stone-800 hover:text-purple-600 transition-colors uppercase nav-item"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="block py-3 text-neutral-700 hover:text-primary-600 nav-item"
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