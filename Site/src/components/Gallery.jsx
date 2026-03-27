import React from 'react';

// Using a mix of user-provided photos and brand assets for the gallery
import pastaImg from '@brain/media__1773708180124.png';
import skewersImg from '@brain/media__1773711215545.jpg';
import interiorPhoto2 from '@brain/media__1773711726072.png';
import oldFashionedImg from '@brain/media__1773708268414.jpg';
import cheesecakeImg from '@brain/media__1773708359158.png';
// New Lifestyle and Ambiance Photos
import chefImg from '@brain/media__1773709971744.jpg';
import chefImg2 from '@brain/media__1773709979084.jpg';
import interiorImg from '@brain/media__1773709957297.jpg';
import ambianceDrinkImg from '@brain/media__1773710322835.jpg';
import ribsImg from '@brain/media__1773709962610.jpg';

const Gallery = ({ onImageClick }) => {
  // Corrected list for clean render
  const galleryItems = [
    { src: interiorImg, span: "col-span-1 md:col-span-2 row-span-2" },
    { src: chefImg2, span: "col-span-1 row-span-2" },
    { src: ribsImg, span: "col-span-1 row-span-1" },
    { src: ambianceDrinkImg, span: "col-span-1 row-span-1" },
    { src: skewersImg, span: "col-span-1 row-span-1" },
    { src: interiorPhoto2, span: "col-span-1 row-span-1" },
    { src: oldFashionedImg, span: "col-span-1 md:col-span-2 row-span-1" }
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-sans text-brand-orange uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">Atmosphere</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-gold mb-6">A Feast for the Eyes</h2>
          <div className="w-24 h-px bg-brand-brown mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group cursor-pointer border border-brand-brown/50 ${item.span}`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-colors duration-500 z-10 pointer-events-none"></div>
              
              {/* Image */}
              <img 
                src={item.src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                onClick={() => onImageClick(item.src)}
              />
              
              {/* Gold border on hover */}
              <div className="absolute inset-4 border border-brand-gold/0 group-hover:border-brand-gold/50 transition-colors duration-500 z-20 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
