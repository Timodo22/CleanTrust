import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "Kantoorpand Eindhoven",
    category: "Dieptereiniging",
    before: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", // Placeholder
    after: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", // Placeholder
    description: "Volledige reiniging van 500m2 kantoorruimte inclusief vloeronderhoud."
  },
  {
    id: 2,
    title: "Gevelreiniging Weert",
    category: "Exterieur",
    before: "https://images.unsplash.com/photo-1632923956387-2b36e3923306?auto=format&fit=crop&q=80&w=800", // Placeholder
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", // Placeholder
    description: "Verwijderen van groene aanslag en impregneren van de gevel."
  }
];

export function Projects() {
  return (
    <section id="projecten" className="py-24 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-olive-600 font-bold tracking-wide uppercase text-sm mb-3">Onze Resultaten</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-olive-900 mb-6">
            Voor & Na
          </h3>
          <p className="text-olive-700 text-lg">
            Beelden zeggen meer dan woorden. Bekijk hier enkele van onze recente transformaties.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-olive-100 group">
      <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={showAfter ? 'after' : 'before'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            src={showAfter ? project.after : project.before}
            alt={showAfter ? "Na schoonmaak" : "Voor schoonmaak"}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Slider Handle / Toggle */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center z-10">
          <div className="bg-white/90 backdrop-blur-md rounded-full p-1 flex shadow-xl border border-olive-100">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                !showAfter ? 'bg-olive-800 text-white shadow-md' : 'text-olive-600 hover:bg-olive-50'
              }`}
            >
              Voor
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                showAfter ? 'bg-green-600 text-white shadow-md' : 'text-olive-600 hover:bg-olive-50'
              }`}
            >
              Na
            </button>
          </div>
        </div>

        {/* Label */}
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-olive-800 shadow-sm">
          {project.category}
        </div>
      </div>

      <div className="p-8">
        <h4 className="font-heading text-2xl font-bold text-olive-900 mb-2">{project.title}</h4>
        <p className="text-olive-600">{project.description}</p>
      </div>
    </div>
  );
}
