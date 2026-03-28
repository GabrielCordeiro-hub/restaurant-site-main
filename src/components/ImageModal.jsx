import React from 'react';

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] text-brand-beige/70 hover:text-brand-gold transition-colors p-2 bg-brand-black/50 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <img 
          src={src} 
          alt="Enlarged view" 
          className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()} 
        />
      </div>
    </div>
  );
};

export default ImageModal;
