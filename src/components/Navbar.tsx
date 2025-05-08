import React, { useState, useEffect } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  // Nav links config
  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/destinations', label: 'DESTINATIONS' },
    { to: '/packages', label: 'PACKAGES' },
    { to: '/blog', label: 'BLOG' },
    { to: '/contact', label: 'CONTACT' },
  ];

  // Helper to check if link is active
  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md py-4' : ''
    }`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.PNG"
              alt="Getaway Xpeditions Logo"
              className="h-10 w-auto mr-2"
              style={{ maxHeight: '40px' }}
            />
            <span className="hidden md:inline text-white text-lg font-bold tracking-wider">Getaway Xpeditions</span>
          </Link>
        </div>
        
        <div className={`
          md:flex items-center space-x-8
          ${isMenuOpen ? 
            'flex flex-col absolute top-full left-0 w-full bg-black/95 p-6 space-y-4 shadow-md animate-slide-down' : 
            'hidden'}
        `}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link transition-colors px-2 py-1 rounded-md font-medium uppercase tracking-wide
                ${isActive(link.to)
                  ? 'text-travel-secondary border-b-2 border-travel-primary bg-travel-primary/10'
                  : 'text-travel-white hover:text-travel-primary hover:bg-travel-primary/10'}
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-travel-white hover:text-travel-secondary transition-colors">
            <Search size={20} />
          </button>
          <button className="text-travel-white hover:text-travel-secondary transition-colors">
            <User size={20} />
          </button>
          <button 
            className="text-travel-white hover:text-travel-secondary transition-colors md:hidden"
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
