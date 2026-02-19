import React from 'react';
import { COMPANY_INFO } from '../constants';
import { MessageCircle } from 'lucide-react';

export function WhatsAppWidget() {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Stuur ons een appje!
      </span>
    </a>
  );
}
