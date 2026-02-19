import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
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
        <div className="absolute inset-0 bg-gradient-to-r from-olive-900/90 via-olive-900/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Startdatum: {COMPANY_INFO.startDate}
              </span>
            </div>
            
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
              Schoonmaak met <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-olive-200">
                karakter & zorg
              </span>
            </h1>
            
            <p className="text-xl text-olive-100 mb-10 leading-relaxed max-w-lg drop-shadow-md">
              Wij creëren een frisse, hygiënische werkomgeving waar uw team en klanten zich direct thuis voelen. 100% ecologisch, 100% betrouwbaar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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

            <div className="flex items-center gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="flex -space-x-2 mb-2">
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
                  <span className="text-xs font-bold text-white ml-1">Top Service</span>
                </div>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="font-heading font-bold text-3xl text-white">100%</p>
                <p className="text-xs text-olive-200 font-medium uppercase tracking-wide">Ecologisch</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Cards / Visuals */}
          <div className="relative h-[500px] hidden lg:block">
             <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Grondige Aanpak</h4>
                  <p className="text-olive-200 text-sm">Tot in de puntjes verzorgd</p>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-green-400"
                />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-0 bg-white p-6 rounded-3xl shadow-2xl max-w-xs border-4 border-white/50"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-olive-500 font-bold text-sm uppercase tracking-wider">Klanttevredenheid</span>
                <span className="text-olive-900 font-bold">9.8/10</span>
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-olive-600 text-sm mt-3 italic">"Fantastisch resultaat en super vriendelijk team!"</p>
            </motion.div>
          </div>
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
