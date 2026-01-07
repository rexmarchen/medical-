
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services/lab-booking' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 rounded-3xl ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg border border-white/20' : 'bg-transparent'}`}>
          <div className="flex justify-between h-16 items-center px-6">
            <div className="flex items-center">
              <Link to="/" className="flex flex-col group">
                <span className="text-[#005b82] font-extrabold text-xl leading-tight group-hover:text-[#00b2a9] transition-colors">M Health Fairview</span>
                <span className="text-[#00b2a9] text-xs font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">Clinic – Oxboro</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all rounded-xl hover:bg-white/50 ${
                    location.pathname === link.path ? 'text-[#005b82]' : 'text-gray-600 hover:text-[#005b82]'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div layoutId="nav-pill" className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#00b2a9]" />
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 bg-[#005b82] text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-[#00b2a9] transition-all shadow-[0_4px_14px_0_rgba(0,91,130,0.39)] hover:shadow-[#00b2a9]/40 transform hover:-translate-y-0.5 active:scale-95"
              >
                Book Now
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#005b82] focus:outline-none bg-white/50 rounded-xl"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#005b82] rounded-2xl font-bold transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-4 py-4 text-center bg-[#005b82] text-white rounded-2xl font-bold mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
