import React, { useState } from 'react';

// Using original user-provided images from brain folder
import skewersImg from '@brain/media__1773711215545.jpg';
import interiorPhoto2 from '@brain/media__1773711726072.png';
import oldFashionedImg from '@brain/media__1773708268414.jpg';
// Using previously identified menu assets
import menu1 from '@brain/menu_salad_1773704105483.png';
import pastaImg from '@brain/media__1773708180124.png';
import cheesecakeImg from '@brain/media__1773708359158.png';
import cocktailSunriseImg from '@brain/cocktail_sunrise.png';

const allItems = [
  {
    id: 1,
    title: 'Mixed Grill Platter',
    description: 'Assorted premium skewers of lamb, beef, and chicken served with grilled vegetables.',
    price: '$38',
    category: 'Main Courses',
    image: skewersImg
  },
  {
    id: 2,
    title: 'Grilled Organic Salad',
    description: 'Fresh locally sourced greens with a zesty, light dressing.',
    price: '$18',
    category: 'Starters',
    image: menu1
  },
  {
    id: 3,
    title: 'Artisan Herb Pasta',
    description: 'Handmade pasta tossed in earthy herbs and premium olive oil.',
    price: '$34',
    category: 'Main Courses',
    image: pastaImg
  },
  {
    id: 4,
    title: 'Pomegranate Sunrise',
    description: 'A refreshing signature cocktail blended with fresh pomegranate juice, citrus notes, and dried orange.',
    price: '$14',
    category: 'Drinks',
    image: cocktailSunriseImg
  },
  {
    id: 5,
    title: 'Vanilla Mint Cheesecake',
    description: 'Decadent slice of vanilla cheesecake with subtle mint garnish.',
    price: '$16',
    category: 'Desserts',
    image: cheesecakeImg
  },
  {
    id: 6,
    title: 'Signature Old Fashioned',
    description: 'Smoked bourbon, raw sugar, and aromatic bitters.',
    price: '$18',
    category: 'Drinks',
    image: oldFashionedImg
  }
];

const categories = ['All', 'Starters', 'Main Courses', 'Desserts', 'Drinks'];

const Menu = ({ onImageClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-brand-black text-brand-beige">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-sans text-brand-orange uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">Discover</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-gold mb-6">Our Culinary Offerings</h2>
          <div className="w-24 h-px bg-brand-brown mx-auto"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 uppercase tracking-wider text-sm transition-all duration-300 border 
                ${activeCategory === category 
                  ? 'border-brand-gold text-brand-black bg-brand-gold' 
                  : 'border-brand-brown text-brand-beige hover:border-brand-gold'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredItems.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-6 border border-brand-brown bg-brand-charcoal/50 hover:bg-brand-charcoal hover:border-brand-gold/50 transition-all duration-300 group rounded-sm shadow-md">
              {/* Image */}
              <div className="w-full sm:w-32 h-32 overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-110 cursor-pointer" 
                  onClick={() => onImageClick(item.image)}
                />
              </div>
              
              {/* Text Info */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-baseline mb-2 border-b border-brand-brown border-dashed pb-2">
                  <h3 className="font-serif text-xl text-brand-gold group-hover:text-brand-orange transition-colors">{item.title}</h3>
                  <span className="font-serif text-lg text-white ml-4">{item.price}</span>
                </div>
                <p className="text-brand-beige/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
