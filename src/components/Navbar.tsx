import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Diensten', href: '#diensten' },
    { name: 'Projecten', href: '#projecten' },
    { name: 'Over ons', href: '#over-ons' },
    { name: 'Werkgebied', href: '#werkgebied' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-olive-100 py-2 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${scrolled ? 'bg-olive-700 text-white' : 'bg-white text-olive-900'}`}>
              <span className="font-heading font-bold text-xl">C</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-heading text-xl font-bold tracking-wide transition-colors ${scrolled ? 'text-olive-900' : 'text-white'}`}>CLEAN TRUST</span>
              <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${scrolled ? 'text-olive-600' : 'text-white/80'}`}>Schoon. Rust. Focus.</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm uppercase tracking-wider transition-colors hover:text-olive-400 ${
                  scrolled ? 'text-olive-800' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-full transition-all flex items-center gap-2 text-sm font-bold shadow-lg hover:scale-105 ${
                scrolled 
                  ? 'bg-olive-700 text-white hover:bg-olive-800' 
                  : 'bg-white text-olive-900 hover:bg-olive-50'
              }`}
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${scrolled ? 'text-olive-800' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-olive-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-olive-800 hover:bg-olive-50 rounded-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-3 text-olive-700 font-medium flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp Direct
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
