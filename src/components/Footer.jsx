import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-black py-12 px-6 border-t border-brand-brown/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-serif text-2xl text-brand-gold mb-4">La Tavola</h3>
          <p className="text-brand-beige/70 max-w-sm mb-6">
            An unforgettable dining experience where tradition meets modern culinary artistry, served in an environment of uncompromising elegance.
          </p>
          <div className="flex gap-4">
            <a href="#!" className="w-10 h-10 rounded-full border border-brand-brown/50 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-brand-gold/20" title="Instagram">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#!" className="w-10 h-10 rounded-full border border-brand-brown/50 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-brand-gold/20" title="Facebook">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#!" className="w-10 h-10 rounded-full border border-brand-brown/50 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-brand-gold/20" title="Twitter">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2.17-2 4a10 10 0 1 1-3 10c0-6 3.16-9.16 3.16-9.16l-1.07-1.1s-2.73 1.1-3.66 2.07c-2.43 2.5-4.48 4.6-5.43 5.43c-1.3.1.53 1.43 0 2.23Z"></path></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-brand-beige border-b border-brand-brown pb-2 mb-4 inline-block">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-brand-beige/70">
            <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
            <li><a href="#menu" className="hover:text-brand-gold transition-colors">Our Menu</a></li>
            <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
            <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-brand-beige border-b border-brand-brown pb-2 mb-4 inline-block">Visit Us</h4>
          <address className="not-italic text-brand-beige/70 flex flex-col gap-2">
            <p>123 Culinary Avenue</p>
            <p>New York, NY 10012</p>
            <p className="mt-2 font-serif text-brand-gold">(555) 123-4567</p>
            <a href="mailto:reservations@latavola.com" className="hover:text-brand-gold transition-colors">reservations@latavola.com</a>
          </address>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-brand-brown/50 text-center text-brand-beige/50 text-sm">
        <p>&copy; {new Date().getFullYear()} La Tavola. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
