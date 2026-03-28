import React from 'react';

const reviewsData = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Food Critic',
    text: "An absolute masterclass in flavor balancing. The ambiance pairs perfectly with the meticulous culinary execution. La Tavola is the city's best-kept secret.",
    rating: 5,
  },
  {
    id: 2,
    name: 'James Harrison',
    role: 'Local Guide',
    text: "From the moment you step through the doors, you are treated like royalty. The artisan pasta was reminiscent of my travels through Italy. Highly recommended.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophia Patel',
    role: 'Regular Guest',
    text: "We celebrate every anniversary here, and they never cease to amaze us. The dark, elegant mood lighting and exceptional service make every visit special.",
    rating: 5,
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans text-brand-orange uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-gold mb-6">Words from our Guests</h2>
          <div className="w-24 h-px bg-brand-brown mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <div 
              key={review.id} 
              className="bg-brand-charcoal border border-brand-brown p-8 hover:border-brand-gold/50 transition-colors duration-300 relative group flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 text-6xl font-serif text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors duration-300 pointer-events-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-brand-beige/80 italic font-light leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="mt-auto border-t border-brand-brown pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg text-brand-gold">{review.name}</h4>
                  <p className="text-sm font-sans text-brand-beige/50 uppercase tracking-widest mt-1">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
