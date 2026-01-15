import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Scissors, ArrowRight, MapPin, Phone, Star, Clock, Globe } from 'lucide-react';
import Heroimage from '../../assets/hero.avif';
import Aboutimage from '../../assets/about.avif';

function Home() {
  // Safe animation settings
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-[#0f172a] text-white font-sans overflow-hidden">
      
      {/* --- HERO SECTION: MESH GRADIENT --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-28">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-rose-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Scissors size={14} className="text-emerald-400" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-100">Hair By Sadiya</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
              CATCH A <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-rose-400">VIBE</span> <br />
              & BE YOUR <br />
              <span className="italic font-serif">Hair Goals.</span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-md mb-10 leading-relaxed">
              Top-tier braids in the DMV. We celebrate every texture and empower your natural beauty.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-full transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2">
                Book Session <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full transition-all font-medium">
                View Styles
              </button>
            </div>
          </motion.div>

          {/* Hero Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src={Heroimage} 
                alt="Owner Sadiya" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 bg-purple-600 p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-[10px] uppercase tracking-widest opacity-80">Neat Edges</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT: VIBRANT CARDS --- */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Empowering <span className="text-purple-400">Every Texture</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Welcome to Hair by Sadiya! Your one-stop shop for top-tier braids in the local DMV area and beyond. 
                I strive to provide exceptional service and personalized care for the perfect braided hairstyle.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Star className="text-emerald-400 mb-2" />
                  <h4 className="font-bold">Quality</h4>
                  <p className="text-xs text-slate-500">Highest quality products and techniques.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Clock className="text-rose-400 mb-2" />
                  <h4 className="font-bold">Efficiency</h4>
                  <p className="text-xs text-slate-500">Speed that is still unmatched.</p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2 relative">
               <img 
                src={Aboutimage} 
                alt="Styling" 
                className="rounded-[2rem] shadow-2xl opacity-80"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: COLORFUL GRADIENT --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">The Love from DMV</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { name: "Kiera", text: "Great convo, and the braids are flawless! Customer 4 Life!", color: "from-emerald-500/20" },
            { name: "Brianna", text: "1000/10. The best braiding experience I've ever had!", color: "from-purple-500/20" },
            { name: "Ericka", text: "Always a great time. Super comfortable and unmatched speed.", color: "from-rose-500/20" }
          ].map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[2rem] bg-gradient-to-br ${t.color} to-transparent border border-white/10 backdrop-blur-sm`}
            >
              <div className="flex gap-1 mb-4 text-emerald-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg mb-6 leading-relaxed italic">"{t.text}"</p>
              <p className="font-bold uppercase tracking-widest text-sm">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SPOTLIGHT: IMAGE GRID --- */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <h2 className="text-5xl font-black tracking-tighter">STYLE SPOTLIGHT</h2>
            <div className="flex gap-4">
              <Instagram className="text-rose-400 hover:scale-110 transition-transform cursor-pointer" />
              <Globe className="text-emerald-400 hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="aspect-square rounded-2xl bg-slate-800 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img src={`https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=400&auto=format&fit=crop`} alt="Style" className="w-full h-full object-cover" />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER: BENTO CONTACT --- */}
      <footer className="py-20 px-6 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-emerald-400 font-bold tracking-widest text-sm uppercase">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Phone size={18} className="text-emerald-500" /> 202 - 487 - 4175
              </p>
              <p className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} className="text-rose-500" /> Silver Spring, MD 20910
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-purple-400 font-bold tracking-widest text-sm uppercase">Hours</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex justify-between"><span>Tue — Sun</span> <span className="text-white font-medium">9am - 5pm</span></p>
              <p className="flex justify-between"><span>Monday</span> <span className="text-white font-medium italic">Appointments Only</span></p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end">
             <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs text-center">
               Accepting Peak Season Appointments
             </div>
             <p className="text-[10px] uppercase tracking-[0.4em] text-slate-600 mt-8">© 2024 HAIR BY SADIYA</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;