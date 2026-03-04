'use client';
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Zap, Clock, Smartphone } from 'lucide-react';

export default function Features() {
  const features = [
    { title: "Smart Scheduling", description: "Book your slot in seconds. Our system optimizes workshop flow to minimize your wait time.", icon: Clock },
    { title: "Live Video Feed", description: "Watch our certified technicians work on your car through a secure live stream.", icon: Zap },
    { title: "Digital Health Report", description: "Receive a comprehensive digital inspection report with photos and expert recommendations.", icon: CheckCircle2 },
    { title: "Mobile Dashboard", description: "Manage your entire fleet or personal vehicle history from our intuitive mobile app.", icon: Smartphone }
  ];
  return (
    <section id="services" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-secondary/60 uppercase mb-4">Our Services</h2>
            <p className="text-4xl md:text-5xl font-prompt font-bold text-secondary leading-tight">
              Traditional Craftsmanship <br />
              <span className="text-secondary/60">Enhanced by Technology</span>
            </p>
          </div>
          <p className="max-w-md text-secondary/70 text-lg">
            We&apos;ve combined decades of mechanical expertise with cutting-edge software to create the ultimate service experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div key={idx} whileHover={{ y: -5 }} className="bg-primary p-8 rounded-[2rem] shadow-sm border border-secondary/5">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-8">
                <feature.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-prompt font-bold text-secondary mb-4">{feature.title}</h3>
              <p className="text-secondary/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}