import React from 'react';
import { USPS } from '../constants'; // Let op: TEAM_MEMBERS halen we hier weg, die staat nu lokaal
import { motion } from 'motion/react';
import { Quote, Phone } from 'lucide-react';

// Importeer de lokale afbeeldingen
import TroyImage from '/assets/Troy.jpeg';
import HopeImage from '/assets/Hope.jpeg';

// Lokale data voor het team
const TEAM_MEMBERS = [
  {
    name: "Hope Dubach",
    role: "Eigenaar & Specialist",
    image: HopeImage,
    phone: "+31 6 18700528",
    phoneLink: "tel:+31618700528",
    description: "Schoonmaak kan anders: persoonlijker, betrouwbaarder en duurzamer. Dat is de visie waarmee ik Clean Trust stuur en waar ik elke dag voor sta."
  },
  {
    name: "Troy",
    role: "Planning",
    image: TroyImage,
    phone: "+31 6 48391378",
    phoneLink: "tel:+31648391378",
    description: "Kwaliteit zit in de details. Als specialist zorg ik ervoor dat elke klus met de grootste zorg en perfectie wordt uitgevoerd, precies zoals afgesproken."
  }
];

export function About() {
  return (
    <section id="over-ons" className="py-24 bg-olive-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-olive-600 font-bold tracking-wide uppercase text-sm mb-3">Wie zijn wij</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-olive-900 mb-6">
              Het gezicht achter Clean Trust
            </h3>
            <p className="text-olive-700 text-lg">
              Korte lijntjes, heldere communicatie en vakmanschap. Maak kennis met het vaste team dat altijd voor u klaarstaat.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative flex flex-col"
            >
              {/* Responsive Image Container */}
              <div className="relative h-[350px] sm:h-[450px] w-full rounded-3xl overflow-hidden mb-8 shadow-xl">
                <div className="absolute inset-0 bg-olive-900/10 group-hover:bg-olive-900/0 transition-colors duration-500 z-10" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Name & Contact Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-lg border border-olive-100 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h4 className="font-heading text-2xl font-bold text-olive-900">{member.name}</h4>
                      <p className="text-olive-600 font-medium text-sm uppercase tracking-wider mb-3 sm:mb-0">{member.role}</p>
                    </div>
                    <a 
                      href={member.phoneLink}
                      className="flex items-center gap-2 bg-olive-50 hover:bg-olive-100 text-olive-800 px-3 py-2 rounded-lg transition-colors text-sm font-semibold border border-olive-200"
                    >
                      <Phone size={16} className="text-olive-600" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Quote Section */}
              <div className="relative pl-8 border-l-4 border-olive-300 mt-auto">
                <Quote className="absolute -top-4 -left-3 bg-olive-50 text-olive-400" size={24} />
                <p className="text-olive-800 text-lg leading-relaxed italic">
                  "{member.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* USPs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USPS.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-olive-100 hover:shadow-md hover:border-olive-300 transition-all group"
            >
              <div className="w-12 h-12 bg-olive-100 rounded-xl flex items-center justify-center text-olive-700 mb-4 group-hover:bg-olive-600 group-hover:text-white transition-colors">
                <usp.icon size={24} />
              </div>
              <h4 className="font-heading font-bold text-lg text-olive-900 mb-2">{usp.title}</h4>
              <p className="text-olive-600 text-sm">{usp.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}