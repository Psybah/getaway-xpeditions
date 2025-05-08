
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-xl font-display font-bold tracking-wider text-travel-white mb-6 inline-block">
              GETAWAY XPEDITIONS
            </Link>
            <p className="text-travel-gray mb-6 text-sm">
              Crafting unforgettable journeys and luxury experiences for the discerning traveler since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-travel-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-travel-primary transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-travel-primary transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-travel-primary transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-travel-primary font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/destinations" className="text-travel-gray hover:text-travel-primary transition-colors">Destinations</Link></li>
              <li><Link to="/packages" className="text-travel-gray hover:text-travel-primary transition-colors">Travel Packages</Link></li>
              <li><Link to="/blog" className="text-travel-gray hover:text-travel-primary transition-colors">Travel Blog</Link></li>
              <li><Link to="/about" className="text-travel-gray hover:text-travel-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-travel-gray hover:text-travel-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Destinations */}
          <div>
            <h3 className="text-travel-primary font-display font-bold mb-4">Top Destinations</h3>
            <ul className="space-y-3">
              <li><Link to="/destinations/bali" className="text-travel-gray hover:text-travel-primary transition-colors">Bali, Indonesia</Link></li>
              <li><Link to="/destinations/santorini" className="text-travel-gray hover:text-travel-primary transition-colors">Santorini, Greece</Link></li>
              <li><Link to="/destinations/kyoto" className="text-travel-gray hover:text-travel-primary transition-colors">Kyoto, Japan</Link></li>
              <li><Link to="/destinations/marrakech" className="text-travel-gray hover:text-travel-primary transition-colors">Marrakech, Morocco</Link></li>
              <li><Link to="/destinations/costa-rica" className="text-travel-gray hover:text-travel-primary transition-colors">Costa Rica</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-travel-primary font-display font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-travel-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-travel-gray">123 Adventure Lane, Travel City, TC 10100</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-travel-primary mr-3 flex-shrink-0" />
                <span className="text-travel-gray">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-travel-primary mr-3 flex-shrink-0" />
                <span className="text-travel-gray">info@getawayxpeditions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-travel-gray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Getaway Xpeditions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-travel-gray text-sm hover:text-travel-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-travel-gray text-sm hover:text-travel-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/faq" className="text-travel-gray text-sm hover:text-travel-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
