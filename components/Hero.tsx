'use client';
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Cpu, Gauge } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-light rounded-full blur-3xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-light text-secondary text-xs font-bold tracking-widest uppercase mb-8 border border-secondary/5">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Next-Gen Automotive Care
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-7xl font-prompt font-bold tracking-tight text-secondary mb-8 leading-[1.1]">
            Precision Engineering <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">Meets Digital Innovation</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-accent/60 -z-10 -rotate-1"></span>
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="max-w-2xl mx-auto text-lg md:text-xl text-secondary/70 mb-12 leading-relaxed">
            GoGarage is redefining vehicle maintenance with AI-driven diagnostics, real-time repair tracking, and a commitment to absolute transparency.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-accent text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all flex items-center justify-center gap-3 group shadow-sm">
              Book a Service <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-primary border-2 border-light text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-light transition-all">
              Explore Technology
            </button>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Cpu, title: "AI Diagnostics", desc: "Proprietary algorithms that predict issues before they happen." },
            { icon: Shield, title: "Digital Trust", desc: "Full video documentation of every repair, accessible via your dashboard." },
            { icon: Gauge, title: "Real-time Tracking", desc: "Track your vehicle's progress through our workshop in real-time." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-light border border-secondary/5 p-8 rounded-3xl hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-prompt font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-secondary/70 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}