'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['home', 'about', 'formations', 'contact'];
      const scrollPosition = window.scrollY + 150;

      // Get the home section element
      const homeElement = document.getElementById('home');
      
      // Check if we're in the home section
      if (homeElement) {
        const homeBottom = homeElement.offsetTop + homeElement.offsetHeight;
        if (scrollPosition < homeBottom) {
          setActiveSection('home');
          return;
        }
      }

      // Check other sections
      for (const section of sections) {
        if (section === 'home') continue;
        
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll(); // Run on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openTelegram = () => {
    window.open('https://t.me/loicremy06', '_blank');
  };

  const navLinks = [
    { id: 'home', href: '#home', label: 'Accueil', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { id: 'about', href: '#about', label: 'À propos', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
    { id: 'formations', href: '#formations', label: 'Formations', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )},
    { id: 'contact', href: '#contact', label: 'Contact', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'pt-0 px-0' : 'pt-4 px-4'
    }`}>
      <div className={`mx-auto bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 ${
        isScrolled 
          ? 'w-full rounded-b-3xl' 
          : 'max-w-7xl rounded-full'
      }`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white dark:bg-gray-800 p-2 shadow-md border-2 border-[#005CD9]">
                <Image
                  src={theme === 'dark' ? '/assets/logoblack.JPG' : '/assets/logowhite.JPG'}
                  alt="Loïc Rémy Trading"
                  width={60}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 transition-all font-medium rounded-xl ${
                    activeSection === link.id
                      ? 'bg-[#005CD9] text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#005CD9] dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={openTelegram}
                className="flex items-center gap-2 bg-[#005CD9] hover:bg-[#0047a3] text-white px-6 py-2.5 rounded-full transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Nous rejoindre
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 rounded-b-3xl animate-fadeInDown">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-center gap-3 transition-all font-medium py-3 px-4 rounded-xl ${
                    activeSection === link.id
                      ? 'bg-[#005CD9] text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#005CD9] dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.icon}
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
              <button
                onClick={() => {
                  openTelegram();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#005CD9] hover:bg-[#0047a3] text-white px-6 py-3 rounded-full text-center font-semibold shadow-lg mt-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Nous rejoindre
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
