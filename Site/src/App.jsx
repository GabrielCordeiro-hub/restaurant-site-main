import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import ImageModal from './components/ImageModal';
import { useState } from 'react';
import './index.css';

// Authentic Lifestyle and Ambiance Photos
import heroBg from '@brain/media__1773709957297.jpg'; // Interior
import aboutImg from '@brain/media__1773709971744.jpg'; // Chef Plating

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-brand-charcoal text-brand-beige selection:bg-brand-gold selection:text-brand-black">
      <Navbar onReserveClick={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <Hero bgImage={heroBg} onReserveClick={() => setIsModalOpen(true)} />
        <About aboutImage={aboutImg} />
        <Menu onImageClick={setSelectedImage} />
        <Gallery onImageClick={setSelectedImage} />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      
      {isModalOpen && (
        <ReservationModal onClose={() => setIsModalOpen(false)} />
      )}

      {selectedImage && (
        <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}

export default App;
