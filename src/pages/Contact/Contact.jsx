import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  MessageCircle, 
  Send, 
  Clock,
  ExternalLink
} from 'lucide-react';

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-purple-500/30 overflow-hidden">
      
      {/* --- BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-6">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-purple-400 to-rose-400 italic font-serif">TOUCH</span>
          </h1>
          <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-bold">
            Based in Silver Spring — Serving the DMV Area
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* --- LEFT: CONTACT INFO (2 Cols) --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-6"
          >
            {/* Direct Line Card */}
            <motion.div variants={itemVariants} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all">
              <Phone className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" size={28} />
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Give us a shout out</p>
              <a href="tel:2024874175" className="text-2xl font-bold tracking-tight hover:text-emerald-400 transition-colors">202 - 487 - 4175</a>
            </motion.div>

            {/* Email Card */}
            <motion.div variants={itemVariants} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all">
              <Mail className="text-purple-400 mb-6 group-hover:scale-110 transition-transform" size={28} />
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Electronic Mail</p>
              <a href="mailto:hairbysadiya@gmail.com" className="text-xl font-bold tracking-tight hover:text-purple-400 transition-colors">hairbysadiya@gmail.com</a>
            </motion.div>

            {/* Location Card */}
            <motion.div variants={itemVariants} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all">
              <MapPin className="text-rose-400 mb-6 group-hover:scale-110 transition-transform" size={28} />
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">The Studio</p>
              <p className="text-xl font-bold tracking-tight leading-relaxed">Downtown, Silver Spring,<br />MD 20910</p>
              <button className="mt-4 flex items-center gap-2 text-xs font-bold text-rose-400 hover:underline">
                Open in Maps <ExternalLink size={12} />
              </button>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: MESSAGE FORM (3 Cols) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 bg-white/5 border border-white/10 backdrop-blur-xl p-8 lg:p-12 rounded-[3rem]"
          >
            <h3 className="text-3xl font-bold mb-8 italic font-serif tracking-tight">Send a quick inquiry</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-2">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-2">Phone Number</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500 transition-colors" placeholder="(202) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-2">Desired Braid Style</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-rose-400 transition-colors appearance-none">
                  <option className="bg-zinc-900">Beach Boho Braids</option>
                  <option className="bg-zinc-900">Diya Locs</option>
                  <option className="bg-zinc-900">Knotless Braids</option>
                  <option className="bg-zinc-900">Other / Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-2">Message</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Tell me about your hair goals..."></textarea>
              </div>

              <button className="w-full py-5 bg-gradient-to-r from-emerald-500 via-purple-500 to-rose-500 text-slate-950 font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>

        {/* --- BOTTOM SECTION: SOCIAL & HOURS --- */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center border-t border-white/5 pt-12">
          <div className="flex gap-8">
             <a href="#" className="flex items-center gap-2 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                  <Instagram className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">Follow</p>
                  <p className="text-sm font-bold">@hairbysadiya</p>
                </div>
             </a>
             <a href="#" className="flex items-center gap-2 group">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                  <MessageCircle className="text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">TikTok</p>
                  <p className="text-sm font-bold">@hairbysadiya</p>
                </div>
             </a>
          </div>

          <div className="flex flex-col md:items-end">
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
              <Clock size={14} className="text-rose-400" />
              <span>Tue — Sun: 9:00 AM — 5:00 PM</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Peak season appointments available on Mondays</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;