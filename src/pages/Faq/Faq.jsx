import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  Scissors, 
  ShieldCheck, 
  Timer, 
  MessageCircle,
  Search,
  ArrowRight
} from 'lucide-react';

const faqCategories = [
  {
    id: 'prep',
    name: 'Preparation',
    icon: <Sparkles size={18} />,
    questions: [
      { q: "How should I arrive for my appointment?", a: "Please arrive with your hair freshly washed, detangled, and blown out straight. If you need a blow-out service, please add it to your booking in advance." },
      { q: "What hair should I buy?", a: "For Boho styles, 100% human hair is highly recommended for longevity. For standard braids, I recommend X-pression pre-stretched braiding hair." }
    ]
  },
  {
    id: 'policy',
    name: 'Policies',
    icon: <ShieldCheck size={18} />,
    questions: [
      { q: "What is your late policy?", a: "There is a 15-minute grace period. After 15 minutes, a $20 late fee is applied. After 30 minutes, your appointment may be cancelled to respect the next client's time." },
      { q: "Do I need to pay a deposit?", a: "Yes, a non-refundable deposit is required to secure your slot. This goes towards your total service cost." }
    ]
  },
  {
    id: 'care',
    name: 'Aftercare',
    icon: <Scissors size={18} />,
    questions: [
      { q: "How do I maintain my edges?", a: "I recommend using a light edge control and wrapping your hair with a silk or satin scarf every single night to keep the tension low and the look neat." },
      { q: "Can I wash my braids?", a: "Yes, but focus on the scalp using a diluted shampoo. Ensure your braids are completely dry afterward to prevent any dampness at the roots." }
    ]
  }
];

function Faq() {
  const [activeTab, setActiveTab] = useState('prep');
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-emerald-500/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            GOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500 italic font-serif">QUESTIONS?</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-bold">Everything you need to know before your vibe check</p>
        </motion.div>
      </section>

      {/* --- FAQ CONTENT --- */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-2">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveTab(cat.id); setOpenIndex(null); }}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold uppercase tracking-widest text-[10px] ${
                  activeTab === cat.id 
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' 
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Questions Accordion */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                {faqCategories.find(c => c.id === activeTab).questions.map((faq, i) => (
                  <div 
                    key={i} 
                    className="group border border-white/5 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl overflow-hidden"
                  >
                    <button 
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full p-8 flex justify-between items-center text-left"
                    >
                      <span className="text-xl font-bold tracking-tight">{faq.q}</span>
                      <motion.div
                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                        className={`p-2 rounded-full ${openIndex === i ? 'bg-emerald-500 text-black' : 'bg-white/5 text-zinc-500'}`}
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <div className="px-8 pb-8 text-zinc-400 leading-relaxed font-light text-lg border-t border-white/5 pt-6">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- QUICK CONTACT BANNER --- */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="bg-gradient-to-br from-zinc-900 to-black p-12 rounded-[3rem] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-2">Still have a question?</h3>
            <p className="text-zinc-500">I'm here to help you achieve your hair goals.</p>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-purple-500 hover:text-white transition-all group">
            <MessageCircle size={18} /> DM me on Instagram <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Faq;