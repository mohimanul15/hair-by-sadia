import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Tag, ArrowRight, Plus, Minus, Sparkles, ChevronDown } from 'lucide-react';

const services = [
  { title: "Beach Boho Braids", price: "$250+", time: "5-6 hrs", img: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800", desc: "Effortless, vacation-ready braids with loose human hair curls throughout." },
  { title: "Diya Locs MINK Hair", price: "$350+", time: "7 hrs", img: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800", desc: "Our signature luxury locs using premium mink-texture hair for a natural finish." },
  { title: "The Ari", price: "$220+", time: "4 hrs", img: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800", desc: "A sleek, defined look inspired by modern DMV chic. Perfect for any occasion." },
  { title: "Bre Braids", price: "$200+", time: "4.5 hrs", img: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800", desc: "Traditional technique meets modern precision. Neat, long-lasting, and lightweight." },
  { title: "Ryan Braids", price: "$180+", time: "3.5 hrs", img: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800", desc: "Bold, thicker sections for a powerful statement look with minimal chair time." },
  { title: "Knotless Braids", price: "$210+", time: "5 hrs", img: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800", desc: "Seamless, painless, and flexible. Our most popular style for scalp health." },
];

const faqs = [
  { q: "What hair should I buy?", a: "For most boho styles, I recommend 100% human hair curls to prevent tangling. For standard braids, pre-stretched braiding hair is best." },
  { q: "How long do these styles last?", a: "With proper maintenance and a silk scarf at night, most styles last between 6 to 8 weeks." },
  { q: "Do you provide the hair?", a: "Hair is not included in the base price unless specified (like Diya Locs). I can provide hair for an additional fee upon request." },
];

function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* --- SERVICE HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/10 blur-[150px] rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-emerald-400 uppercase tracking-[0.4em] text-xs font-bold mb-4 block">The Menu</span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none italic mb-4">
            ICONIC <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500">STYLES</span>
          </h1>
          <p className="text-zinc-500 max-w-lg mx-auto uppercase tracking-widest text-[10px] font-bold">
            Premium Braiding Studio — Serving the DMV & Beyond
          </p>
        </motion.div>
      </section>

      {/* --- FLUID SERVICE GRID --- */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-amber-50/10 p-6 rounded-3xl hover:bg-amber-50/20 transition-colors duration-500"
            >
              {/* Fluid Image Wrapper */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <span className="text-2xl font-bold">{service.price}</span>
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-emerald-400 font-bold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                    <Clock size={10} /> {service.time}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors uppercase tracking-tighter">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm mb-6 line-clamp-2 font-light leading-relaxed">
                {service.desc}
              </p>
              
              <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 group-hover:text-white transition-colors">
                Read More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION: BOLD & MINIMAL --- */}
      <section className="bg-zinc-950 py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Common Questions</h2>
            <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-lg font-bold tracking-tight">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                  >
                    <ChevronDown className={openFaq === i ? "text-emerald-400" : "text-zinc-600"} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-zinc-400 leading-relaxed font-light border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-24 text-center px-6">
        <h3 className="text-3xl font-light mb-8">Ready for your <span className="italic font-serif text-emerald-400">transformation?</span></h3>
        <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors rounded-full">
          Book Your Slot
        </button>
      </section>
    </div>
  );
};

export default Services;