import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Custom Cursor Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: { x: mousePosition.x - 16, y: mousePosition.y - 16 },
    text: { height: 150, width: 150, x: mousePosition.x - 75, y: mousePosition.y - 75, backgroundColor: "rgb(184, 115, 51)", mixBlendMode: "difference" }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] overflow-x-hidden font-sans selection:bg-copper selection:text-black cursor-none">
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-copper rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        variants={variants}
        animate={cursorVariant}
      />

      {/* Grain Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-40" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* Navigation */}
      <nav className="fixed w-full z-40 px-8 py-8 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-bold tracking-tighter text-white">BH.MUC</div>
        <button onMouseEnter={textEnter} onMouseLeave={textLeave} className="hidden md:block uppercase tracking-widest text-xs font-bold border-b border-transparent hover:border-white transition-all">
          Menu
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
        <div className="absolute right-0 top-0 w-full h-full md:w-1/2 md:opacity-100 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
            className="w-full h-full object-cover grayscale contrast-125"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] leading-[0.85] font-black tracking-tighter mix-blend-exclusion text-white"
            onMouseEnter={textEnter} onMouseLeave={textLeave}
          >
            BARBER<br/>HOUSE
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            <p className="max-w-xs text-sm text-gray-400 font-mono uppercase tracking-widest border-l border-copper pl-4">
              Est. 2013 <br/> Munich, Germany
            </p>
            <a href="#booking" onMouseEnter={textEnter} onMouseLeave={textLeave} className="bg-copper text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors">
              Book Appointment
            </a>
          </motion.div>
        </div>
      </header>

      {/* About / Broken Grid */}
      <section className="py-32 px-6 md:px-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Text overlaps image */}
          <div className="md:col-span-7 z-10 order-2 md:order-1">
            <h2 className="text-6xl md:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
              PURE <br/> CRAFT.
            </h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              We don't do trends. We do style. <br/>
              A sanctuary for the modern man in the heart of Munich. Whiskey included.
            </p>
          </div>

          {/* Image with parallax */}
          <motion.div style={{ y }} className="md:col-span-5 relative order-1 md:order-2">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Craft" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-10 -left-10 bg-[#1a1a1a] p-6 border border-white/10 hidden md:block">
              <span className="block text-4xl font-bold text-copper">4.9</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Google Rating</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Marquee */}
      <div className="py-12 border-y border-white/5 bg-white/5 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-9xl font-black text-transparent stroke-text opacity-20 inline-block"
          style={{ WebkitTextStroke: "2px #fff" }}
        >
          SHAVE • CUT • TRIM • STYLE • SHAVE • CUT • TRIM • STYLE •
        </motion.div>
      </div>

      {/* Services List */}
      <section id="services" className="py-32 px-6 md:px-20 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          {[
            { name: "Signature Haircut", price: "55€", time: "45 min" },
            { name: "Royal Shave", price: "45€", time: "30 min" },
            { name: "Beard Sculpting", price: "35€", time: "30 min" },
            { name: "The Full Package", price: "95€", time: "90 min" }
          ].map((item, i) => (
            <div key={i} className="group flex items-end justify-between border-b border-white/10 py-8 hover:px-4 transition-all duration-300 cursor-pointer" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-copper transition-colors">{item.name}</h3>
                <span className="text-sm text-gray-500 font-mono">{item.time}</span>
              </div>
              <span className="text-3xl font-light">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Image Grid Fix (The one that was broken) */}
      <section className="py-32 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
          <div className="h-full w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1593702295094-aea8c5c13d7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale"
              alt="Tools"
            />
          </div>
          <div className="h-full w-full bg-copper flex flex-col justify-center p-12 text-black">
            <h3 className="text-5xl font-black mb-6">PREMIUM <br/> PRODUCTS.</h3>
            <p className="text-xl mb-8 opacity-80">Only the best for your skin and hair. We use exclusive products you won't find anywhere else.</p>
            <ArrowRight size={48} />
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="booking" className="py-20 px-6 md:px-20 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-6 text-sm">Find Us</h4>
            <p className="text-2xl font-bold">Pacellistraße 5 <br/> 80333 München</p>
          </div>
          <div>
            <h4 className="text-gray-500 uppercase tracking-widest mb-6 text-sm">Contact</h4>
            <p className="text-2xl font-bold">+49 89 22846985 <br/> info@barberhouse.com</p>
          </div>
          <div className="flex items-end">
            <button onMouseEnter={textEnter} onMouseLeave={textLeave} className="w-full bg-white text-black py-6 font-bold uppercase tracking-widest hover:bg-copper transition-colors">
              Book Now
            </button>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          Broski Design © 2026
        </div>
      </footer>
    </div>
  );
}

export default App;
