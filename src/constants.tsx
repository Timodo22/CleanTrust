import { Leaf, Shield, Clock, MapPin, Sparkles, Droplets, Building2, Stethoscope, Warehouse, Bath } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Clean Trust",
  tagline: "Schoon. Rust. Focus.",
  phone: "0618700528",
  whatsapp: "31618700528", // International format for link
  email: "info@cleantrust.nl", // Placeholder, user didn't provide email but good to have
  startDate: "1 maart",
};

export const SERVICES = [
  {
    title: "Kantoren",
    icon: Building2,
    description: "Professionele reiniging van kantoorruimtes voor een productieve werkomgeving.",
    details: ["Stofvrij maken van werkplekken", "Vloeronderhoud", "Prullenbakken legen", "Sanitair & pantry"]
  },
  {
    title: "Bedrijfspanden",
    icon: Warehouse,
    description: "Grondige schoonmaak van diverse soorten bedrijfspanden en hallen.",
    details: ["Vloerreiniging", "Stofverwijdering stellingen", "Glasbewassing binnen", "Entree onderhoud"]
  },
  {
    title: "Praktijkruimtes",
    icon: Stethoscope,
    description: "Hygiënische reiniging volgens de hoogste standaarden voor zorgpraktijken.",
    details: ["Desinfectie contactpunten", "Wachtruimte reiniging", "Behandelkamers", "Voldoet aan GGD-eisen"]
  },
  {
    title: "Algemene ruimtes",
    icon: Sparkles,
    description: "Schoonmaak van entrees, gangen, trappenhuizen en liften.",
    details: ["Trappenhuizen", "Liften & hallen", "Postbussen", "Ramen zemen", "kamer panden"]
  },
  {
    title: "Sanitair",
    icon: Bath,
    description: "Dieptereiniging en dagelijks onderhoud van sanitaire voorzieningen.",
    details: ["Dieptereiniging", "Ontkalken", "Aanvullen verbruiksartikelen", "Geurbeheersing"]
  }
];

export const EXTRA_SERVICES = [
  {
    title: "Dak- en gevelreiniging",
    icon: Droplets,
    description: "Specialistische reiniging voor een representatieve buitenkant van uw pand.",
    details: ["Hogedrukreiniging", "Softwash", "Mos- en algenverwijdering", "Impregneren"]
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Troy Dubach",
    role: "Mede-eigenaar & Specialist",
    description: "Met een passie voor het grovere werk en oog voor structuur zorg ik dat de basis altijd goed staat. Van dak- en gevelreiniging tot de logistieke planning; ik zorg dat we onze afspraken nakomen.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" // Placeholder
  },
  {
    name: "Hope Dubach",
    role: "Mede-eigenaar & Planning",
    description: "Mijn focus ligt op de details en het persoonlijke contact. Ik zorg ervoor dat uw wensen vertaald worden naar een helder schoonmaakplan en dat de puntjes op de i worden gezet.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" // Placeholder
  }
];

export const USPS = [
  {
    title: "Betrouwbaar en stipt",
    icon: Shield,
    description: "Afspraak is afspraak. Wij zijn er wanneer u ons verwacht."
  },
  {
    title: "Oog voor detail",
    icon: Sparkles,
    description: "Wij zien wat anderen missen en zorgen voor een perfect resultaat."
  },
  {
    title: "Flexibele planning",
    icon: Clock,
    description: "Schoonmaak op tijden die u het beste uitkomen, periodiek of vast."
  },
  {
    title: "Ecologische producten",
    icon: Leaf,
    description: "Wij werken uitsluitend met 100% ecologische en verantwoorde middelen."
  }
];

export const REGIONS = [
  "Noord-Brabant",
  "Midden Nederland",
  "Oost-Nederland / Gelderland",
  "Weert"
];
