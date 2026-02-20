import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Send, Loader2 } from 'lucide-react';
import { REGIONS, COMPANY_INFO } from '../constants';
import { motion } from 'motion/react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Verzamel alle data uit het formulier
    const formData = new FormData(e.currentTarget);
    
    // --- BELANGRIJK: VUL HIER JE WEB3FORMS ACCESS KEY IN ---
    formData.append("access_key", "bde54898-3ca0-4f8b-8b0a-2f24fe92b879");
    
    // Instellingen voor een mooie weergave in de mailbox van CleanTrust
    formData.append("subject", "Nieuwe contactaanvraag via de Clean Trust website 🌟");
    formData.append("from_name", "Clean Trust Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage("Er ging iets mis bij het versturen. Probeer het later opnieuw of neem telefonisch contact op.");
      }
    } catch (error) {
      setErrorMessage("Kan geen verbinding maken. Controleer uw internetverbinding en probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Regions */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-olive-900 mb-6">
              Neem contact op
            </h2>
            <p className="text-olive-700 text-lg mb-12">
              Klaar voor een schone start? Vraag vrijblijvend een offerte aan of neem contact op voor meer informatie.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-olive-600 shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-olive-900 mb-1">Telefoon & WhatsApp</h4>
                  <p className="text-olive-700 mb-2">Bereikbaar voor al uw vragen</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-olive-900 font-bold hover:text-olive-600 block transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                  <a 
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 font-medium mt-2 hover:text-green-700 hover:underline transition-all"
                  >
                    <MessageCircle size={16} />
                    Stuur een WhatsApp bericht
                  </a>
                </div>
              </div>
            </div>

            <div id="werkgebied" className="bg-white p-8 rounded-2xl shadow-sm border border-olive-100">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-olive-600" />
                <h3 className="font-bold text-xl text-olive-900">Ons Werkgebied</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {REGIONS.map((region) => (
                  <div key={region} className="flex items-center gap-2 text-olive-700">
                    <div className="w-2 h-2 rounded-full bg-olive-400" />
                    {region}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-olive-100 relative">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-olive-900 mb-4">Bedankt voor uw bericht!</h3>
                <p className="text-olive-600">Wij hebben uw aanvraag in goede orde ontvangen en nemen zo spoedig mogelijk contact met u op.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-olive-600 font-medium hover:text-olive-800 underline transition-colors"
                >
                  Nog een bericht sturen
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-olive-900 mb-6">Stuur ons een bericht</h3>
                
                {/* Honeypot om spam bots te vangen (onzichtbaar voor gebruikers) */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                {errorMessage && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-olive-700">Naam</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="Naam" // Bepaalt de weergave in de mail!
                      required
                      className="w-full px-4 py-3 rounded-xl bg-olive-50 border-transparent focus:border-olive-500 focus:bg-white focus:ring-2 focus:ring-olive-200 transition-all outline-none"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-olive-700">Bedrijf (optioneel)</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="Bedrijfsnaam"
                      className="w-full px-4 py-3 rounded-xl bg-olive-50 border-transparent focus:border-olive-500 focus:bg-white focus:ring-2 focus:ring-olive-200 transition-all outline-none"
                      placeholder="Bedrijfsnaam"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-olive-700">E-mailadres</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="E-mailadres"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-olive-50 border-transparent focus:border-olive-500 focus:bg-white focus:ring-2 focus:ring-olive-200 transition-all outline-none"
                    placeholder="naam@bedrijf.nl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-olive-700">Telefoonnummer</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="Telefoonnummer"
                    className="w-full px-4 py-3 rounded-xl bg-olive-50 border-transparent focus:border-olive-500 focus:bg-white focus:ring-2 focus:ring-olive-200 transition-all outline-none"
                    placeholder="06 12345678"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-olive-700">Uw bericht</label>
                  <textarea 
                    id="message" 
                    name="Bericht"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-olive-50 border-transparent focus:border-olive-500 focus:bg-white focus:ring-2 focus:ring-olive-200 transition-all resize-none outline-none"
                    placeholder="Waarmee kunnen we u helpen?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-olive-700 text-white rounded-xl font-bold hover:bg-olive-800 transition-all shadow-lg hover:shadow-olive-700/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Verzenden...
                    </>
                  ) : (
                    'Verstuur bericht'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}