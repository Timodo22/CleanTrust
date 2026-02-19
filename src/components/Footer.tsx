import React from 'react';
import { COMPANY_INFO } from '../constants';

// BELANGRIJK: Importeer hier ook het logo voor een betrouwbare weergave op Cloudflare/GitHub
import footerLogo from '/assets/LogoCT.png';

export function Footer() {
  return (
    <footer className="bg-olive-900 text-olive-100 py-12 border-t border-olive-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo & Tagline Sectie */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={footerLogo} // Gebruikt de geïmporteerde variabele
                alt="Clean Trust Logo" 
                className="h-20 w-auto object-contain" 
              />
            </div>
            <p className="text-olive-300 text-sm max-w-xs leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
          </div>
          
          {/* Snelle Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Snelle links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#diensten" className="hover:text-white transition-colors">Diensten</a></li>
              <li><a href="#over-ons" className="hover:text-white transition-colors">Over ons</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Informatie */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                Tel: <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li>
                Email: <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </li>
              <li className="pt-2 text-olive-400 text-xs">
                KVK: {COMPANY_INFO.kvk || '[Nummer]'}
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright balk */}
        <div className="border-t border-olive-800 pt-8 text-center text-xs text-olive-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}