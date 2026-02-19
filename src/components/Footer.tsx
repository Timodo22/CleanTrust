import React from 'react';
import { COMPANY_INFO } from '../constants';

export function Footer() {
  return (
    <footer className="bg-olive-900 text-olive-100 py-12 border-t border-olive-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-olive-700 rounded-full flex items-center justify-center text-white">
                  <span className="font-heading font-bold">C</span>
                </div>
              <span className="font-heading text-xl font-bold text-white tracking-wide">CLEAN TRUST</span>
            </div>
            <p className="text-olive-300 text-sm max-w-xs">
              {COMPANY_INFO.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Snelle links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#diensten" className="hover:text-white transition-colors">Diensten</a></li>
              <li><a href="#over-ons" className="hover:text-white transition-colors">Over ons</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Tel: <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">{COMPANY_INFO.phone}</a></li>
              <li>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a></li>
              <li className="pt-2 text-olive-400 text-xs">KVK: [Nummer]</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-olive-800 pt-8 text-center text-xs text-olive-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
