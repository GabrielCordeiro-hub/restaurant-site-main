import React, { useState } from 'react';

const ReservationModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-brand-charcoal border border-brand-brown w-full max-w-lg rounded-sm shadow-2xl p-8 transform transition-all duration-300 scale-100 opacity-100">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-beige/50 hover:text-brand-gold transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl text-brand-gold mb-2">Reserve a Table</h2>
          <p className="text-brand-beige/70">Secure your spot for an unforgettable night.</p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 opacity-0 animate-[fadeIn_0.5s_forwards]">
            <div className="w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center mx-auto mb-4 text-brand-gold">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-brand-beige mb-2">Reservation Confirmed</h3>
            <p className="text-brand-beige/70 text-sm">We look forward to hosting you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-brand-beige/70 mb-1">Full Name</label>
              <input 
                required 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-brand-black border border-brand-brown rounded-sm px-4 py-3 text-brand-beige focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-beige/70 mb-1">Date</label>
                <input 
                  required 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-brand-black border border-brand-brown rounded-sm px-4 py-3 text-brand-beige focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-beige/70 mb-1">Time</label>
                <input 
                  required 
                  type="time" 
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full bg-brand-black border border-brand-brown rounded-sm px-4 py-3 text-brand-beige focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-beige/70 mb-1">Number of Guests</label>
              <select 
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                className="w-full bg-brand-black border border-brand-brown rounded-sm px-4 py-3 text-brand-beige focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors appearance-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
                <option value="9+">9+ People (Call Us)</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="mt-4 w-full bg-brand-gold text-brand-black font-semibold uppercase tracking-widest py-4 hover:bg-brand-orange transition-colors duration-300"
            >
              Confirm Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReservationModal;
