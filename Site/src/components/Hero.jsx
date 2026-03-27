import React from 'react';

const Hero = ({ bgImage, onReserveClick }) => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-charcoal"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center animate-[fadeIn_1.5s_ease-out_forwards]">
        <div className="w-16 h-[1px] bg-brand-gold mb-6 opacity-80"></div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-gold mb-4 leading-tight">
          La Tavola
        </h1>
        <p className="text-xl md:text-2xl text-brand-beige/90 font-light tracking-wide mb-10 max-w-2xl">
          An unforgettable dining experience
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a 
            href="#menu" 
            className="px-8 py-4 bg-brand-gold text-brand-black font-semibold uppercase tracking-widest hover:bg-brand-orange hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_20px_rgba(200,107,40,0.3)]"
          >
            View Menu
          </a>
          <button 
            onClick={onReserveClick}
            className="px-8 py-4 border border-brand-gold text-brand-gold font-semibold uppercase tracking-widest hover:bg-brand-gold/10 hover:-translate-y-1 transition-all duration-300"
          >
            Reserve a Table
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-brand-gold/50 hover:text-brand-gold transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
