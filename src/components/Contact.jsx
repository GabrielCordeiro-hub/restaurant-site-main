import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-black border-t border-brand-brown">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-sans text-brand-orange uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">Get in Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-gold mb-6">Contact Us</h2>
          <div className="w-24 h-px bg-brand-brown mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Information & Map Placeholder */}
          <div className="flex-1 space-y-8">
            <h3 className="font-serif text-3xl text-brand-beige mb-6">Find La Tavola</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-brand-brown rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-gold mb-1">Location</h4>
                  <p className="text-brand-beige/70">123 Culinary Avenue, New York, NY 10012</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-brand-brown rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-gold mb-1">Hours</h4>
                  <p className="text-brand-beige/70">Mon-Thu: 5:00 PM - 10:00 PM</p>
                  <p className="text-brand-beige/70">Fri-Sun: 4:00 PM - 11:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-brand-brown rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-gold mb-1">Phone</h4>
                  <p className="text-brand-beige/70">(555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-48 bg-brand-charcoal border border-brand-brown rounded-sm flex items-center justify-center overflow-hidden group">
              <div className="text-center group-hover:scale-105 transition-transform duration-500">
                <svg className="w-10 h-10 text-brand-gold mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-brand-beige/50 font-serif tracking-widest text-sm">INTERACTIVE MAP</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-brand-charcoal border border-brand-brown p-8 lg:p-10">
            <h3 className="font-serif text-3xl text-brand-gold mb-8">Send a Message</h3>
            
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-[fadeIn_0.5s_forwards] py-12">
                <div className="w-16 h-16 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-serif text-2xl text-brand-beige mb-2">Message Sent</h4>
                <p className="text-brand-beige/70">We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-beige/70 mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-brand-black border border-brand-brown rounded-sm px-4 py-3 text-brand-beige focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-beige/70 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-brand-black border border-brand-brown rounded-sm px-4 py-3 text-brand-beige focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-beige/70 mb-2">Message</label>
                  <textarea 
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-brand-black border border-brand-brown rounded-sm px-4 py-3 text-brand-beige focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-brand-gold text-brand-black font-semibold uppercase tracking-widest py-4 hover:bg-brand-orange transition-colors duration-300 mt-2"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
