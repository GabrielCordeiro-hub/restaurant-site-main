import React, { useState, useEffect } from 'react';

const Navbar = ({ onReserveClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'} px-6 md:px-12`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="font-serif text-2xl md:text-3xl font-bold text-brand-gold hover:text-brand-orange transition-colors">
          La Tavola
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`text-sm tracking-widest uppercase hover:text-brand-gold transition-colors ${scrolled ? 'text-brand-beige' : 'text-white text-shadow-md'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button 
            onClick={onReserveClick}
            className="px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 font-serif"
          >
            Reserve Table
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center gap-1.5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-brand-gold transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-brand-gold transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-brand-gold transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <ul className="flex flex-col gap-6 text-center mb-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-2xl font-serif text-brand-beige hover:text-brand-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => {
              setMenuOpen(false);
              onReserveClick();
            }}
            className="px-8 py-3 bg-brand-gold text-brand-black font-semibold uppercase tracking-widest hover:bg-brand-orange transition-colors"
          >
            Reserve Table
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
