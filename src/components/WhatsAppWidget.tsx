import React from "react";
import { COMPANY_INFO } from "../constants";

export function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">

      <div className="relative">

        {/* Glow ALLEEN achter groene knop */}
        <span
          className="
            absolute inset-0
            rounded-full
            bg-[#25D366]
            blur-xl
            opacity-60
            animate-pulse
            scale-150
            z-0
          "
        />

        {/* Groene WhatsApp knop */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative z-10
            bg-[#25D366]
            p-4
            rounded-full
            shadow-lg
            flex items-center justify-center
            hover:scale-110
            transition-transform duration-300
          "
        >
          {/* OFFICIEEL WhatsApp logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="white"
          >
            <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.52 0 .21 5.31.21 11.85c0 2.09.55 4.14 1.6 5.95L0 24l6.38-1.67a11.86 11.86 0 0 0 5.68 1.44h.01c6.54 0 11.85-5.31 11.85-11.85 0-3.17-1.23-6.15-3.4-8.44zm-8.46 18.3a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.88 9.88 0 1 1 8.4 4.67zm5.45-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
          </svg>
        </a>

        {/* Rode notificatie (GEEN glow hier) */}
        <div className="absolute -top-1 -right-1 z-20">
          <span
            className="
              flex items-center justify-center
              h-5 w-5
              rounded-full
              bg-red-500
              text-white
              text-xs font-bold
              animate-bounce
              shadow-md
            "
          >
            1
          </span>
        </div>

      </div>
    </div>
  );
}
