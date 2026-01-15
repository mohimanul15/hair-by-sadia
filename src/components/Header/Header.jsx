import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Menu, X, Instagram, Calendar } from 'lucide-react';
import { Link, NavLink } from 'react-router';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${
        isScrolled ? 'mt-4' : 'mt-0'
      }`}
    >
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${
        isScrolled 
        ? 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl px-6 py-3' 
        : 'bg-transparent px-2 py-4'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-emerald-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Scissors size={20} className="text-slate-950" />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase text-white">
              Sadiya<span className="text-emerald-400">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-xs uppercase tracking-[0.2em] font-bold text-slate-300 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://instagram.com/hairbysadiya" className="text-slate-400 hover:text-rose-400 transition-colors" target='_blank'>
              <Instagram size={20} />
            </a>
            <button className="px-5 py-2.5 bg-white text-slate-950 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all active:scale-95 flex items-center gap-2">
              <Calendar size={14} />
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl md:hidden flex flex-col gap-6 text-center"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold tracking-tight text-white hover:text-emerald-400"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-white/10" />
            <button className="w-full py-4 bg-emerald-500 text-slate-950 font-black uppercase tracking-widest rounded-2xl">
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;