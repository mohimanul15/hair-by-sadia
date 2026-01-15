import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Award, Star, Scissors, ArrowRight } from 'lucide-react';

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-emerald-500/30">
      
      {/* --- EDITORIAL HERO --- */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden">
        {/* Left: Content */}
        <div className="flex-1 px-6 lg:px-20 py-32 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-12 text-emerald-400 font-bold uppercase tracking-[0.4em] text-[10px]"
          >
            <span className="w-10 h-px bg-emerald-500/50" /> The Story
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl lg:text-[7rem] font-black tracking-tighter leading-[0.85] mb-12"
          >
            BEHIND THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500 italic font-serif">ARTISTRY.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-md text-zinc-400 text-lg font-light leading-relaxed border-l border-zinc-800 pl-6"
          >
            Welcome to Hair by Sadiya. Your one-stop shop for top-tier braids in the local DMV area and beyond. We don't just braid hair; we empower your natural beauty.
          </motion.p>
        </div>

        {/* Right: Owner Image (Large Editorial) */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex-1 relative h-[70vh] lg:h-screen w-full lg:w-1/2"
        >
          <img 
            src="https://images.unsplash.com/photo-1595476108010-b4d1f80d77d2?q=80&w=1000" 
            alt="Sadiya - Professional Braider"
            className="w-full h-full object-cover grayscale-[20%] brightness-75 hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* --- MISSION STATEMENT: BOLD --- */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl lg:text-5xl font-light text-zinc-200 leading-snug mb-20"
          >
            "My mission is to empower individuals of all hair types and textures to <span className="text-white font-bold">embrace their natural beauty</span> and become their own hair goals."
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 border-t border-zinc-800 pt-16">
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Heart className="text-emerald-400 mb-6" />
              <h4 className="text-xl font-bold mb-4">Personalized Care</h4>
              <p className="text-zinc-500 text-sm font-light">Every client is unique. I tailor my techniques to your specific hair health and lifestyle.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <Sparkles className="text-purple-400 mb-6" />
              <h4 className="text-xl font-bold mb-4">Precision Braiding</h4>
              <p className="text-zinc-500 text-sm font-light">From goddess braids to faux locs, I focus on neatness and careful attention to edges.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
              <Award className="text-rose-400 mb-6" />
              <h4 className="text-xl font-bold mb-4">High-End Products</h4>
              <p className="text-zinc-500 text-sm font-light">I only use the highest quality products to ensure your hair stays healthy and fabulous.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- THE EXPERIENCE: SPLIT CONTENT --- */}
      <section className="py-32 px-6 lg:px-20 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div {...fadeInUp} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1000" 
            alt="The Studio Vibe"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10">
            DMV Local & Beyond
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="space-y-8">
          <h3 className="text-5xl font-black uppercase tracking-tighter italic">More than just <br /> an appointment.</h3>
          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            I understand that hair care is an important part of self-care. In terms of the experience, I provide a welcoming environment for my clients to either unwind or chit-chat and share some laughs along the way. 
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed font-light">
            Hair by Sadiya is committed to providing exceptional customer service and building long-lasting relationships with my beautiful clients.
          </p>
          
          <div className="pt-8 flex items-center gap-12">
            <div>
              <p className="text-4xl font-black text-emerald-400">1k+</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-600">Braided Goals</p>
            </div>
            <div>
              <p className="text-4xl font-black text-purple-400">5/5</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-600">Client Rating</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-32 px-6 text-center bg-gradient-to-b from-[#050505] to-[#0a0f1d]">
        <motion.div {...fadeInUp}>
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-12">
            START YOUR <br /> <span className="text-zinc-600">JOURNEY</span>
          </h2>
          <button className="px-12 py-5 bg-emerald-500 text-slate-950 font-black uppercase tracking-widest hover:bg-white transition-all rounded-full flex items-center gap-4 mx-auto group">
            Book Sadiya Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default About;