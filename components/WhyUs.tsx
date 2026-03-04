'use client';
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Eye, Zap } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    { icon: Cpu, title: "AI-Driven Diagnostics", description: "Our proprietary AI analyzes sensor data to predict mechanical failures before they happen, saving you time and money.", delay: 0.1 },
    { icon: Eye, title: "Absolute Transparency", description: "No more 'mystery' repairs. Watch your vehicle's service via live stream and approve every quote digitally.", delay: 0.2 },
    { icon: ShieldCheck, title: "Precision Standards", description: "We combine aerospace-grade diagnostic tools with master-level mechanical expertise for unparalleled accuracy.", delay: 0.3 },
    { icon: Zap, title: "Digital-First Workflow", description: "From instant booking to contactless payments, every interaction is optimized for the modern driver.", delay: 0.4 }
  ];
  return (
    <section id="about" className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-sm font-bold tracking-[0.2em] text-secondary/60 uppercase mb-4 font-poppins">
            Why Choose GoGarage
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-prompt font-bold text-secondary leading-tight max-w-3xl mx-auto">
            We&apos;re not just a garage. <br />
            <span className="text-secondary/60">We&apos;re an innovation hub.</span>
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {reasons.map((reason, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: reason.delay }} className="flex gap-6 group">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-light flex items-center justify-center group-hover:bg-accent transition-all duration-500 shadow-sm border border-secondary/5">
                  <reason.icon className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-prompt font-bold text-secondary mb-3">{reason.title}</h3>
                <p className="text-secondary/70 text-lg leading-relaxed font-poppins">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}