import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import Logo from '../../../public/images/logo.png';
import avatar from '../../../public/images/avatar/avatar_3.png';

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
    <footer className="relative h-auto w-full overflow-hidden">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
      
      <div className="relative">
        
        <svg 
          className="absolute"
          style={{
            width: '1689px',
            height: '2173px',
            transform: '',
            opacity: 1,
            top: '-500px',
            left: '-140px'
          }}
          width="1689.0875577259887" 
          height="2173.55985731974" 
          viewBox="0 0 1920 1242" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M-122.94 668.299C-64.4951 386.472 224.224 202.878 526.686 82.582C793.305 -23.4583 1098.28 -27.2999 1379.83 70.6136C1656.16 166.708 1883.66 349.854 1982.02 588.682C2080.88 828.736 2043.33 1089.84 1884.1 1295.06C1726.39 1498.34 1457.77 1599.68 1170.05 1635.21C844.638 1675.41 486.959 1688.94 232.952 1498.99C-43.3153 1292.4 -184.864 966.899 -122.94 668.299Z" 
            fill="#1a1a1a"
          />
        </svg>
        
        
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-20 pb-8">
          {/* Logo */}
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center">
                <img src={Logo} className="w-25 h-25 object-contain" alt="PlanBuddy Logo"/>
              </div>
              <span className="text-white font-semibold text-xl">PlanBuddy</span>
            </div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12 max-w-6xl mx-auto">
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Get the Latest Updates</h3>
              <p className="text-gray-300 mb-8 text-base leading-relaxed">
                Sign up to receive goal-setting tips, progress-tracking ideas, and the latest features from PlanBuddy—straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 px-6 py-3 rounded-l-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-r-lg transition-colors duration-200"
                >
                  Get Updates
                </button>
              </form>
            </div>

            
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h3>
              
            
              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:apptiura@gmail.com" className="hover:text-purple-400 transition-colors text-base">
                    apptiura@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a href="tel:0720102135" className="hover:text-purple-400 transition-colors text-base">
                    0720102135
                  </a>
                </div>
              </div>

          
              <div className="flex gap-4 mb-8">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.10z"/>
                  </svg>
                </a>
              </div>

            
              <div className="flex items-center gap-4">
                <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors duration-200">
                  Download App
                </button>
                <img 
                  src={avatar}
                  alt="Avatar" 
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>

          
          <div className="text-center text-gray-400 text-sm pt-8">
            Copyright © 2025 PlanBuddy.  All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}