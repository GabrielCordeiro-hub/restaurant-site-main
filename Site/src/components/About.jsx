import React from 'react';

const About = ({ aboutImage }) => {
  return (
    <section id="about" className="py-24 px-6 bg-brand-charcoal text-brand-beige">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 lg:order-2 space-y-8">
          <div className="flex flex-col">
            <span className="font-sans text-brand-orange uppercase tracking-[0.2em] text-sm font-semibold mb-2">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-gold relative inline-block">
              Tradition & Quality
              <span className="block w-24 h-1 bg-brand-orange mt-4"></span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-brand-beige/80 leading-relaxed font-light">
            Founded with a passion for authentic culinary experiences, La Tavola brings the warmth of traditional dining to the heart of the city. We believe that every meal is an opportunity to create unforgettable memories.
          </p>
          
          <p className="text-brand-beige/60 leading-relaxed">
            Our master chefs carefully select the finest seasonal ingredients, combining classic techniques with modern innovation. From hand-crafted pasta to perfectly seared cuts, our commitment to excellence is tasted in every bite.
          </p>
          
          <div className="pt-4 grid grid-cols-2 gap-8">
            <div className="border-l-2 border-brand-gold pl-4">
              <h4 className="font-serif text-3xl text-brand-gold mb-1">15+</h4>
              <p className="text-sm text-brand-beige/60 uppercase tracking-wider">Years of Excellence</p>
            </div>
            <div className="border-l-2 border-brand-gold pl-4">
              <h4 className="font-serif text-3xl text-brand-gold mb-1">50+</h4>
              <p className="text-sm text-brand-beige/60 uppercase tracking-wider">Signature Dishes</p>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 lg:order-1 relative w-full group">
          <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
            <img 
              src={aboutImage} 
              alt="Restaurant interior" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
          {/* Decorative behind-image border */}
          <div className="absolute -inset-4 border border-brand-brown z-0 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>
          {/* Decorative accent square */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-black z-20 flex items-center justify-center border border-brand-brown">
             <div className="w-16 h-16 border border-brand-gold flex items-center justify-center transform rotate-45">
                <span className="font-serif text-brand-gold transform -rotate-45 text-2xl">LT</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
