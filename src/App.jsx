import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Calendar, MapPin, Phone, Clock, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-charcoal selection:bg-copper selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-charcoal/90 backdrop-blur-sm border-b border-copper/20">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-slab font-bold text-copper tracking-wider border-2 border-copper p-2"
          >
            BH
          </motion.div>
          <div className="hidden md:flex space-x-12 text-sm font-semibold tracking-[0.2em] uppercase text-cream/80">
            <a href="#about" className="hover:text-copper transition-colors">Philosophy</a>
            <a href="#services" className="hover:text-copper transition-colors">Services</a>
            <a href="#booking" className="text-copper hover:text-white transition-colors">Book Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-befbb6470521?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
            alt="Barber Shop" 
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-copper uppercase tracking-[0.4em] mb-6 text-sm md:text-base font-bold">Est. 2013 • Munich</h2>
            <h1 className="font-slab text-6xl md:text-8xl lg:text-9xl font-bold text-cream mb-8 leading-none">
              BARBER<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-copper to-leather">HOUSE</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 font-light mb-12 leading-relaxed">
              Kein Schnickschnack. Keine Kompromisse. <br/>
              Nur echtes Handwerk für echte Männer.
            </p>
            <a 
              href="#booking" 
              className="inline-block px-10 py-4 border border-copper text-copper hover:bg-copper hover:text-charcoal transition-all duration-300 font-bold uppercase tracking-widest text-sm"
            >
              Termin Vereinbaren
            </a>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 bg-charcoal relative">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-copper/30 translate-x-4 translate-y-4 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Shaving" 
              className="relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-copper font-bold uppercase tracking-widest mb-4 text-sm">Unsere Philosophie</h3>
            <h2 className="font-slab text-4xl md:text-5xl text-cream mb-8 font-bold">Mehr als nur ein Haarschnitt.</h2>
            <p className="text-gray-400 leading-loose mb-8">
              Im Barberhouse zelebrieren wir die Tradition des klassischen Barbierhandwerks. 
              Hier geht es nicht um Trends von morgen, sondern um Stil, der bleibt. 
              Lehnen Sie sich zurück, genießen Sie einen Single Malt und lassen Sie die Welt draußen.
            </p>
            <ul className="space-y-4">
              {['Meisterbarbiere mit Erfahrung', 'Klassische Nassrasur', 'Exklusive Pflegeprodukte'].map((item, i) => (
                <li key={i} className="flex items-center text-cream/80">
                  <Star className="w-4 h-4 text-copper mr-4" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-slab text-5xl text-cream mb-6">Service Menu</h2>
            <div className="w-16 h-1 bg-copper mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Haircut", price: "55€", desc: "Beratung, Wäsche, Schnitt, Styling & Nackenrasur." },
              { title: "Hot Towel Shave", price: "45€", desc: "Die Königsklasse. Heiße Kompressen, Pre-Shave Oil, Rasiermesser." },
              { title: "Beard Trim", price: "35€", desc: "Formgebung, Konturen und Pflege für den gepflegten Bart." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-charcoal p-10 border border-white/5 hover:border-copper/50 transition-colors"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-slab text-2xl font-bold">{service.title}</h3>
                  <span className="text-copper font-bold text-xl">{service.price}</span>
                </div>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info & Booking */}
      <section id="booking" className="py-32 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-slab text-5xl text-cream mb-16">Visit Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-copper mb-4">
                <MapPin size={32} />
              </div>
              <h4 className="font-bold text-lg uppercase tracking-wider">Location</h4>
              <p className="text-gray-400">Pacellistraße 5<br/>80333 München</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-copper mb-4">
                <Clock size={32} />
              </div>
              <h4 className="font-bold text-lg uppercase tracking-wider">Hours</h4>
              <p className="text-gray-400">Mo - Fr: 10:00 - 20:00<br/>Sa: 09:00 - 18:00</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-copper mb-4">
                <Phone size={32} />
              </div>
              <h4 className="font-bold text-lg uppercase tracking-wider">Contact</h4>
              <p className="text-gray-400">+49 89 22846985<br/>info@barberhouse.com</p>
            </div>
          </div>

          <div className="mt-20">
            <button className="bg-copper text-charcoal px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-colors text-lg">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black text-center text-gray-600 text-sm">
        <p>&copy; 2026 Barberhouse München. Concept by Broski.</p>
      </footer>

    </div>
  );
}

export default App;
