import React, { useState, useEffect } from 'react';
import { Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import checkoutdata from '../../data/checkoutdata';

const Checkout = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % checkoutdata.images.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % checkoutdata.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + checkoutdata.images.length) % checkoutdata.images.length
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column - Image carousel */}
        <div className="relative">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg shadow-lg">
            <img
              src={checkoutdata.images[currentImageIndex]}
              alt={`Product image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          <button 
            onClick={prevImage} 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextImage} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {checkoutdata.images.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              />
            ))}
          </div>
        </div>

        {/* Right column - Product details */}
        <div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="text-xs font-semibold text-gray-500 mb-2">ENQUÊTE DE SATISFACTION LIMITÉE</div>
            <h1 className="text-2xl font-bold mb-4">Sauvage - Eau de Parfum 200 ml</h1>
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold">€ 9.99</span>
              <span className="text-lg text-gray-500 line-through">€ 212.00</span>
              <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">- 95.29%</span>
            </div>
            <button className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg mb-4 hover:bg-green-600 transition duration-300">
              ÉCHANGEZ MAINTENANT
            </button>
            <div className="text-sm text-gray-600 mb-4">MÉTHODES DE PAIEMENT</div>
            <div className="flex justify-around mb-6">
              {checkoutdata.creditCardLogos.map((logo) => (
                <img key={logo.name} src={logo.src} alt={logo.name} className="h-8" />
              ))}
            </div>
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 mr-2 text-gray-600" />
              <span className="text-sm text-gray-600">Les paiements et les informations sont sécurisés</span>
            </div>
            <div className="text-xs text-gray-500">Site officiel avec tous droits réservés.</div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Retours sans frais</h3>
              <p className="text-sm text-gray-600">Remboursement à 100% de votre argent 7 jours après réception de la marchandise.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product description */}
      <div className="mt-8 text-gray-700">
        <p className="mb-4">
          Une nouvelle interprétation extrêmement concentrée de Sauvage où la fraîcheur est extrême avec des tons chauds,
          colorés et orientaux dont la beauté farouche demande à vivre sur la peau. Inspiré par les grands espaces sous une
          nuit bleue où émergent les arômes intenses d'un feu crépitant. Le parfum d'une nouvelle frontière : une variation
          d'aura enrichie et enivrante qui célèbre la magie du plein air dans les grands espaces.
        </p>
      </div>

      {/* Payment methods footer */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">MÉTHODES DE PAYMENT</h3>
        <div className="flex space-x-4">
          {checkoutdata.creditCardLogos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} className="h-8" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;