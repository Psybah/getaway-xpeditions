
import React, { useState, useEffect } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md py-4' : ''
    }`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-travel-white text-xl font-display font-bold tracking-wider">
            GETAWAY XPEDITIONS
          </Link>
        </div>
        
        <div className={`
          md:flex items-center space-x-8
          ${isMenuOpen ? 
            'flex flex-col absolute top-full left-0 w-full bg-black/95 p-6 space-y-4 shadow-md animate-slide-down' : 
            'hidden'}
        `}>
          <Link to="/" className="nav-link active">HOME</Link>
          <Link to="/destinations" className="nav-link">DESTINATIONS</Link>
          <Link to="/packages" className="nav-link">PACKAGES</Link>
          <Link to="/blog" className="nav-link">BLOG</Link>
          <Link to="/contact" className="nav-link">CONTACT</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-travel-white hover:text-travel-accent transition-colors">
            <Search size={20} />
          </button>
          <button className="text-travel-white hover:text-travel-accent transition-colors">
            <User size={20} />
          </button>
          <button 
            className="text-travel-white hover:text-travel-accent transition-colors md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
