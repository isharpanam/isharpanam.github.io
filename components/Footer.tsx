
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary/90 text-white mt-16 pt-8 pb-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4 gap-6">
            <a href="https://www.facebook.com/share/1Hrtht8hdx" aria-label="Facebook" className="text-brand-accent hover:text-white transition-colors"><Facebook size={24} /></a>
            <a href="https://www.instagram.com/isharpanam" aria-label="Instagram" className="text-brand-accent hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="https://x.com/isharpanam" aria-label="Twitter" className="text-brand-accent hover:text-white transition-colors"><Twitter size={24} /></a>
        </div>
        <p className="font-body">&copy; {new Date().getFullYear()} Isharpanam. All Rights Reserved.</p>
        <p className="text-sm text-gray-300 mt-2">Your one-stop solution for divine rituals.</p>
      </div>
    </footer>
  );
};

export default Footer;