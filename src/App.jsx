import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight, ShoppingBag, Scissors } from 'lucide-react';

// --- Pages ---

const Home = () => (
  <div className="pt-32 px-6 md:px-20">
    <motion.h1 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-[12vw] leading-[0.85] font-black tracking-tighter mix-blend-exclusion text-white mb-12"
    >
      BARBER<br/>HOUSE
    </motion.h1>
    
    <div className="grid md:grid-cols-2 gap-8 mb-20">
      <div className="border-l border-copper pl-6">
        <h3 className="text-copper uppercase tracking-widest mb-4 font-bold">Munich</h3>
        <ul className="space-y-2 text-gray-400">
          <li>Pacellistraße (Stachus)</li>
          <li>Fraunhoferstraße (Glockenbach)</li>
          <li>Lenbachplatz (MINI Pavillon)</li>
          <li>Flughafen München (Terminal 2)</li>
        </ul>
      </div>
      <div className="border-l border-gray-700 pl-6">
        <h3 className="text-white uppercase tracking-widest mb-4 font-bold">Hamburg</h3>
        <ul className="space-y-2 text-gray-400">
          <li>Hohe Bleichen</li>
        </ul>
      </div>
    </div>

    <Link to="/treatments" className="inline-block bg-copper text-black px-12 py-6 font-bold uppercase tracking-widest hover:bg-white transition-colors">
      View Treatments
    </Link>
  </div>
);

const Treatments = () => (
  <div className="pt-32 px-6 md:px-20 max-w-5xl mx-auto">
    <h2 className="text-6xl font-black mb-16 text-white">MENU.</h2>
    <div className="space-y-12">
      {[
        { cat: "Hair", items: [
          { name: "Haircut", price: "55€", time: "45 min" },
          { name: "Machine Cut", price: "35€", time: "30 min" },
          { name: "Grey Blending", price: "40€", time: "30 min" }
        ]},
        { cat: "Beard", items: [
          { name: "Beard Trim", price: "35€", time: "30 min" },
          { name: "Hot Towel Shave", price: "45€", time: "30 min" },
          { name: "Royal Shave", price: "65€", time: "60 min" }
        ]},
        { cat: "Specials", items: [
          { name: "The Full Package", price: "95€", time: "90 min" },
          { name: "Facial Treatment", price: "45€", time: "30 min" }
        ]}
      ].map((section, i) => (
        <div key={i}>
          <h3 className="text-copper text-2xl font-bold mb-6 uppercase tracking-widest border-b border-gray-800 pb-2">{section.cat}</h3>
          <div className="grid gap-6">
            {section.items.map((item, j) => (
              <div key={j} className="flex justify-between items-baseline group hover:pl-4 transition-all duration-300 cursor-default">
                <div>
                  <span className="text-xl font-bold text-gray-200">{item.name}</span>
                  <span className="ml-4 text-xs text-gray-600 font-mono border border-gray-800 px-2 py-1 rounded">{item.time}</span>
                </div>
                <span className="text-xl font-light text-copper">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-20 text-center">
      <a href="https://buchung.barberhouse.com" target="_blank" className="bg-white text-black px-12 py-4 font-bold uppercase tracking-widest hover:bg-copper transition-colors">
        Book Online
      </a>
    </div>
  </div>
);

const Locations = () => (
  <div className="pt-32 px-6 md:px-20">
    <h2 className="text-6xl font-black mb-16 text-white">LOCATIONS.</h2>
    <div className="grid md:grid-cols-2 gap-12">
      {[
        { name: "Stachus", addr: "Pacellistraße 5", phone: "089 22846985", img: "https://images.unsplash.com/photo-1503951914875-befbb6470521?w=800" },
        { name: "Glockenbach", addr: "Fraunhoferstraße 20", phone: "089 22846986", img: "https://images.unsplash.com/photo-1599351431202-6e0c051cd6f8?w=800" },
        { name: "Hamburg", addr: "Hohe Bleichen 17", phone: "040 12345678", img: "https://images.unsplash.com/photo-1532710093739-9470acff878f?w=800" }
      ].map((loc, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="overflow-hidden h-64 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
            <img src={loc.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={loc.name} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">{loc.name}</h3>
          <p className="text-gray-400">{loc.addr}</p>
          <p className="text-copper mt-2">{loc.phone}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Layout ---

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans selection:bg-copper selection:text-black">
      
      {/* Nav */}
      <nav className="fixed w-full z-50 px-8 py-8 flex justify-between items-center mix-blend-difference bg-gradient-to-b from-black/50 to-transparent">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white border-2 border-white p-1">BH.</Link>
        <div className="hidden md:flex space-x-8 uppercase tracking-widest text-xs font-bold">
          <Link to="/treatments" className="hover:text-copper transition-colors">Treatments</Link>
          <Link to="/locations" className="hover:text-copper transition-colors">Locations</Link>
          <Link to="/shop" className="hover:text-copper transition-colors opacity-50 cursor-not-allowed">Shop</Link>
          <a href="https://buchung.barberhouse.com" className="border-b border-copper text-copper">Book Now</a>
        </div>
      </nav>

      {/* Page Transitions */}
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/treatments" element={<PageWrapper><Treatments /></PageWrapper>} />
          <Route path="/locations" element={<PageWrapper><Locations /></PageWrapper>} />
        </Routes>
      </AnimatePresence>

      <footer className="py-12 border-t border-white/5 mt-20 text-center text-gray-600 text-xs uppercase tracking-widest">
        &copy; 2026 Barberhouse. Concept by Broski.
      </footer>
    </div>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default App;
