import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Scissors, 
  ArrowUpRight, 
  Heart 
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0f1d] pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-500 rounded-lg">
                <Scissors size={20} className="text-slate-950" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-white">
                Sadiya<span className="text-emerald-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Exceptional braiding service in the DMV area. Empowering you to embrace your natural beauty and become your own hair goals.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/hairbysadiya" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-rose-500/20 hover:text-rose-400 transition-all duration-300">
                <Instagram size={20} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-400">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Style Spotlight', 'Testimonials', 'Booking'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white flex items-center gap-2 group transition-colors text-sm">
                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-purple-400">Get In Touch</h4>
            <div className="space-y-4 text-sm">
              <a href="tel:2024874175" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone size={14} className="text-emerald-400" />
                </div>
                202 - 487 - 4175
              </a>
              <a href="mailto:hairbysadiya@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail size={14} className="text-purple-400" />
                </div>
                hairbysadiya@gmail.com
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mt-1">
                  <MapPin size={14} className="text-rose-400" />
                </div>
                <span>Downtown, Silver Spring,<br />MD 20910</span>
              </div>
            </div>
          </div>

          {/* Opening Hours Column */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-rose-400">Studio Hours</h4>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
              <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                <span className="text-slate-400">Tue — Sun</span>
                <span className="text-white font-bold">9am - 5pm</span>
              </div>
              <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                <span className="text-slate-400">Monday</span>
                <span className="text-rose-400 font-bold italic">Appt. Only</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight pt-2 italic">
                *Peak season Mondays are available for bookings.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500">
            © {currentYear} Hair By Sadiya. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-slate-600">
            Made with <Heart size={10} className="text-rose-500 fill-rose-500" /> for the DMV
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;