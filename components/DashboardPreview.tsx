'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Activity, Wrench, Calendar, CreditCard } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="technology" className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-light rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden border border-secondary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-secondary/60 font-bold tracking-widest uppercase text-sm mb-6">The GoGarage Dashboard</h2>
              <h3 className="text-4xl md:text-5xl font-prompt font-bold text-secondary mb-8 leading-tight">
                Your Vehicle&apos;s Health, <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10">At Your Fingertips.</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-accent/60 -z-10 -rotate-1"></span>
                </span>
              </h3>
              <p className="text-secondary/70 text-lg mb-10 leading-relaxed">
                Every GoGarage client gets access to a personalized digital portal. Monitor repairs, view diagnostic data, and approve quotes with a single tap.
              </p>
              <ul className="space-y-6">
                {["Real-time repair status updates", "Digital service history & records", "Instant quote approval system", "AI-powered maintenance alerts"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-secondary font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <motion.div initial={{ opacity: 0, scale: 0.9, x: 50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-primary rounded-3xl shadow-xl p-6 md:p-8 max-w-lg mx-auto border border-secondary/5">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-light rounded-full flex items-center justify-center">
                      <Activity className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-secondary/60 uppercase tracking-wider">Active Repair</p>
                      <p className="text-sm font-bold text-secondary">Tesla Model S • 2023</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-accent/20 text-secondary text-[10px] font-bold uppercase rounded-full">In Progress</span>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-light rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-xs font-bold text-secondary">Brake System Calibration</p>
                      <p className="text-xs font-bold text-secondary">75%</p>
                    </div>
                    <div className="w-full h-2 bg-primary rounded-full overflow-hidden border border-secondary/5">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-accent" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-light rounded-2xl">
                      <Calendar className="w-4 h-4 text-secondary mb-2" />
                      <p className="text-[10px] font-bold text-secondary/60 uppercase">Est. Completion</p>
                      <p className="text-sm font-bold text-secondary">Today, 4:30 PM</p>
                    </div>
                    <div className="p-4 bg-light rounded-2xl">
                      <CreditCard className="w-4 h-4 text-secondary mb-2" />
                      <p className="text-[10px] font-bold text-secondary/60 uppercase">Current Quote</p>
                      <p className="text-sm font-bold text-secondary">$420.00</p>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-secondary text-primary rounded-2xl text-sm font-bold hover:bg-secondary/90 transition-colors">
                    View Live Workshop Feed
                  </button>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-10 -left-10 hidden md:block">
                <div className="bg-primary p-4 rounded-2xl shadow-xl border border-secondary/5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-secondary/60 uppercase">AI Diagnostic</p>
                    <p className="text-sm font-bold text-secondary">All Systems Nominal</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}