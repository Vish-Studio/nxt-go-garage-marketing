'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-secondary rounded-sm rotate-45" />
              </div>
              <span className="text-2xl font-prompt font-bold tracking-tight text-secondary">GoGarage</span>
            </motion.div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'Technology', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-secondary/80 hover:text-secondary transition-colors">{item}</a>
            ))}
            <button className="bg-secondary text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent hover:text-secondary transition-all flex items-center gap-2 group">
              Client Login <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary hover:text-secondary/70 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-primary border-b border-light">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Services', 'Technology', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-2 rounded-md text-base font-bold text-secondary/80 hover:bg-light hover:text-secondary">{item}</a>
            ))}
            <button className="w-full mt-4 bg-secondary text-primary px-6 py-3 rounded-xl text-base font-bold hover:bg-accent hover:text-secondary transition-colors">Client Login</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}