import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Clean modern office background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-olive-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-olive-900/40 via-olive-900/80 to-olive-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Geoptimaliseerde layout: Gecentreerd voor focus */}
        <div className="flex flex-col items-center text-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >

            
            <h1 className="font-heading text-5xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
              Schoonmaak met <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-olive-200">
                karakter & zorg
              </span>
            </h1>
            
            <p className="text-xl text-olive-100 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              Wij creëren een frisse, hygiënische werkomgeving waar uw team en klanten zich direct thuis voelen. 100% ecologisch, 100% betrouwbaar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
              <a 
                href="#contact"
                className="group inline-flex justify-center items-center px-8 py-4 bg-white text-olive-900 rounded-2xl font-bold hover:bg-olive-50 transition-all shadow-xl hover:shadow-white/20 hover:-translate-y-1"
              >
                Offerte aanvragen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#diensten"
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-2xl font-bold hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
              >
                Onze diensten
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 border-t border-white/10 pt-12">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex -space-x-2 mb-3">
                  {[1,2,3,4].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-olive-900" src={`https://randomuser.me/api/portraits/men/${i*10}.jpg`} alt="Client" />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-white ml-2">Top Service</span>
                </div>
              </div>
              <div className="hidden md:block h-12 w-px bg-white/20" />
              <div className="text-center md:text-left">
                <p className="font-heading font-bold text-4xl text-white">100%</p>
                <p className="text-xs text-olive-200 font-medium uppercase tracking-widest">Ecologisch & Duurzaam</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
}