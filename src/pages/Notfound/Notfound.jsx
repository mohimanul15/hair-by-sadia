import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Home, ArrowLeft } from 'lucide-react';

const Notfound = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Blobs (Same as Landing Page for consistency) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block mb-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-emerald-400"
        >
          <Scissors size={64} strokeWidth={1.5} />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
        >
          404
        </motion.h1>

        {/* Messaging */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
            Oops! This link is <span className="text-rose-400 italic">tangled.</span>
          </h2>
          <p className="text-slate-400 max-w-sm mx-auto text-lg font-light">
            We couldn't find the page you're looking for. It might have been moved or snip-snipped away.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/"
            className="group flex items-center gap-2 px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-full hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
          >
            <Home size={18} />
            Back to Home
          </a>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>
      </div>

      {/* Subtle Floating Labels */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
        <span className="absolute top-1/4 left-1/4 text-purple-400 text-sm tracking-[1em] uppercase -rotate-12">No Goals Here</span>
        <span className="absolute bottom-1/4 right-1/4 text-emerald-400 text-sm tracking-[1em] uppercase rotate-12">Wrong Vibe</span>
      </div>
    </div>
  );
};

export default Notfound;