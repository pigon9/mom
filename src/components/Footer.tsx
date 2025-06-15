import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-b from-crystal-purple/5 to-crystal-purple/10 border-t border-crystal-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-crystal-purple-dark to-crystal-gold rounded-full animate-glow"></div>
              <span className="font-serif text-2xl font-semibold text-gray-900">Hoi sze trading</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              Transforming lives through the ancient wisdom and healing power of ethically sourced crystals. 
              Your journey to abundance, clarity, and spiritual alignment begins here.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white border border-crystal-purple/20 rounded-full flex items-center justify-center text-crystal-purple-dark hover:bg-crystal-purple-dark hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-crystal-purple-dark transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-gray-600 hover:text-crystal-purple-dark transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-crystal-purple-dark transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-crystal-purple-dark transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-crystal-purple-dark transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-crystal-purple-dark transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-crystal-purple-dark transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-crystal-purple-dark transition-colors">Crystal Care</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-crystal-purple/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Hoi sze trading. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-crystal-purple-dark text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-crystal-purple-dark text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
