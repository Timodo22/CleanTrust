import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

// BELANGRIJK: Importeer je logo hier. 
// Dit zorgt ervoor dat Cloudflare/GitHub het bestand altijd kan vinden.
import logoImg from '/assets/LogoCT.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Achtergrondkleur logica
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Smart Header logica (verbergen bij omlaag, tonen bij omhoog)
      if (currentScrollY < 10 || isOpen) {
        setIsVisible(true);
      } 
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); 
      } else {
        setIsVisible(true);  
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  const navLinks = [
    { name: 'Diensten', href: '#diensten' },
    { name: 'Projecten', href: '#projecten' },
    { name: 'Over ons', href: '#over-ons' },
    { name: 'Werkgebied', href: '#werkgebied' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        (scrolled || isOpen) 
          ? 'bg-white/95 backdrop-blur-md border-b border-olive-100 py-1 shadow-sm' 
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo Sectie - Gebruikt nu de geïmporteerde 'logoImg' */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="relative z-50">
              <img 
                src={logoImg} 
                alt="Clean Trust Logo" 
                className="h-24 md:h-32 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm uppercase tracking-wider transition-colors hover:text-olive-400 ${
                  (scrolled || isOpen) ? 'text-olive-800' : 'text-white'
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
                (scrolled || isOpen) 
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
              className={`p-2 transition-colors ${ (scrolled || isOpen) ? 'text-olive-800' : 'text-white'}`}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-olive-100 overflow-hidden shadow-2xl md:hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-xl text-olive-800 border-b border-olive-50 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 w-full py-4 bg-olive-700 text-white rounded-xl font-bold"
              >
                <MessageCircle size={24} />
                WhatsApp Direct
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}