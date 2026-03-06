import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoComponents } from "../../assets/icons";

const NavbarComponents = ({ homeRef, aboutRef, experienceRef, educationRef, skillRef }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref, section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    if (ref && ref.current) {
      const yOffset = -80; // Offset for fixed header
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', ref: homeRef, id: 'home' },
    { name: 'About', ref: aboutRef, id: 'about' },
    { name: 'Skills', ref: skillRef, id: 'skill' },
    { name: 'Experience', ref: experienceRef, id: 'experience' },
    { name: 'Education', ref: educationRef, id: 'education' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <LogoComponents fill="#fbbf24" width="40" height="40" />
            </motion.div>
            <span className="ml-3 text-xl font-bold text-white tracking-wide group-hover:text-primary transition-colors">
              Hafizoddin<span className="text-primary">.dev</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.ref, link.id)}
                className={`text-sm font-medium transition-colors relative group ${
                  activeSection === link.id ? 'text-primary' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${activeSection === link.id ? 'w-full' : ''}`}></span>
              </button>
            ))}
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/muhammad-hafizoddin-roslan-538a67bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-orange-500 text-black font-bold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-shadow"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.ref, link.id)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                    activeSection === link.id 
                      ? 'bg-surface text-primary' 
                      : 'text-gray-300 hover:bg-surface hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarComponents;
