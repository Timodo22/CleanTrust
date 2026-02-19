import React from 'react';
import { SERVICES, EXTRA_SERVICES } from '../constants';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Services() {
  return (
    <section id="diensten" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-olive-600 font-bold tracking-wide uppercase text-sm mb-3">Onze Expertise</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-olive-900 mb-6">
            Grondige en flexibele schoonmaakdiensten
          </h3>
          <p className="text-olive-700 text-lg">
            Of het nu gaat om periodieke schoonmaak of een eenmalige dieptereiniging, 
            wij leveren kwaliteit met oog voor mens en milieu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-olive-50 hover:bg-white transition-all border border-olive-100 hover:border-olive-200 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-olive-600 shadow-sm mb-6 group-hover:bg-olive-600 group-hover:text-white transition-all duration-300">
                <service.icon size={28} />
              </div>
              <h4 className="font-heading text-xl font-bold text-olive-900 mb-3">{service.title}</h4>
              <p className="text-olive-700 leading-relaxed mb-6 flex-grow">{service.description}</p>
              
              {/* Details List */}
              <ul className="space-y-2 pt-6 border-t border-olive-100">
                {service.details?.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-olive-600">
                    <Check size={14} className="text-green-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {/* Extra Service Highlight */}
          {EXTRA_SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group p-8 rounded-3xl bg-olive-900 text-white shadow-xl relative overflow-hidden hover:-translate-y-1 transition-transform flex flex-col h-full"
            >
              <div className="absolute -top-10 -right-10 p-4 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                <service.icon size={180} />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-block px-3 py-1 bg-olive-800 rounded-lg text-xs font-bold uppercase tracking-wider mb-6 border border-olive-700 w-fit">
                  Extra Optie
                </div>
                <h4 className="font-heading text-2xl font-bold mb-3">{service.title}</h4>
                <p className="text-olive-200 leading-relaxed mb-6 flex-grow">{service.description}</p>
                
                <ul className="space-y-2 pt-6 border-t border-olive-800">
                  {service.details?.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-olive-300">
                      <Check size={14} className="text-green-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
