import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-secondary rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-prompt font-bold tracking-tight text-secondary">
                GoGarage
              </span>
            </div>
            <p className="text-secondary/70 leading-relaxed mb-8 max-w-xs">
              Redefining automotive care through precision engineering and digital innovation. Experience the future of car maintenance.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-secondary/60 hover:bg-accent hover:text-secondary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-prompt font-bold text-secondary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Technology', 'About Us', 'Book Online', 'Client Login'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-secondary/70 hover:text-accent transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-prompt font-bold text-secondary mb-6">Services</h4>
            <ul className="space-y-4">
              {['AI Diagnostics', 'Precision Tuning', 'Electric Vehicle Care', 'Fleet Management', 'Performance Upgrades'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-secondary/70 hover:text-accent transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-prompt font-bold text-secondary mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary/70 font-medium">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>123 Innovation Drive, Tech City, TC 54321</span>
              </li>
              <li className="flex items-center gap-3 text-secondary/70 font-medium">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+1 (555) 000-TECH</span>
              </li>
              <li className="flex items-center gap-3 text-secondary/70 font-medium">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>hello@gogarage.tech</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary/50">
            © {new Date().getFullYear()} GoGarage Technologies. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-secondary/50 hover:text-accent">Privacy Policy</a>
            <a href="#" className="text-sm text-secondary/50 hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}