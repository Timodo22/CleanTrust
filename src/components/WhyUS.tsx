import React from 'react';
import { motion } from 'motion/react';
import { 
  UserCheck, 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  Leaf, 
  ListChecks, 
  BadgeCheck 
} from 'lucide-react';

const UNIQUE_POINTS = [
  {
    icon: UserCheck,
    title: "Altijd persoonlijk",
    description: "Het is altijd wijzelf, u ziet dus nooit andere of onbekende personen."
  },
  {
    icon: ShieldCheck,
    title: "100% Betrouwbaar",
    description: "Op ons kunt u blind vertrouwen; wij zeggen namelijk nooit af."
  },
  {
    icon: Clock,
    title: "Duidelijke tijden",
    description: "Wij werken gestructureerd en houden ons strikt aan de afgesproken tijden."
  },
  {
    icon: MessageCircle,
    title: "Snel antwoord",
    description: "Heeft u een vraag? Wij reageren altijd gegarandeerd binnen 24 uur."
  },
  {
    icon: Leaf,
    title: "Ecologisch",
    description: "Voor een schone én veilige omgeving werken wij met ecologisch producten."
  },
  {
    icon: ListChecks,
    title: "Gestructureerd",
    description: "Wij werken standaard met een uitgebreide checklist zodat we niets missen."
  },
  {
    icon: BadgeCheck,
    title: "Garantie",
    description: "Niet helemaal tevreden? Dan lossen wij dit binnen 24 uur voor u op!"
  }
];

export function WhyUs() {
  return (
    <section id="waarom-wij" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-olive-600 font-bold tracking-wide uppercase text-sm mb-3">Onze Kracht</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-olive-900 mb-6">
              Wat ons uniek maakt?
            </h3>
            <p className="text-olive-700 text-lg">
              Kwaliteit en betrouwbaarheid staan bij ons voorop. Dit is wat u altijd van ons mag verwachten.
            </p>
          </motion.div>
        </div>

        {/* Centered Flexbox Grid voor 7 items */}
        <div className="flex flex-wrap justify-center gap-6">
          {UNIQUE_POINTS.map((point, index) => (
            <motion.div
              key={point.title}
              // Mobiele (en desktop) animatie: Spring effect van onderaf
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }} // Triggert net iets nadat hij in beeld komt
              transition={{ 
                type: "spring", 
                bounce: 0.4, 
                duration: 0.8,
                // Op mobiel (waar ze onder elkaar staan) voorkomt dit dat ze allemaal tegelijk inladen
                delay: index * 0.1 
              }}
              // Tailwind calc() zorgt voor perfecte breedtes mét een vaste gap, zodat de restruimte de items netjes centreert
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] bg-olive-50 p-6 rounded-2xl shadow-sm border border-olive-100 hover:shadow-md hover:border-olive-300 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-olive-600 mb-5 group-hover:bg-olive-600 group-hover:text-white transition-colors shadow-sm transform group-hover:scale-110 duration-300">
                <point.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-heading font-bold text-lg text-olive-900 mb-3">{point.title}</h4>
              <p className="text-olive-600 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}