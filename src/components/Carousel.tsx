import React, { useState, useEffect } from 'react';

const carouselImages = [
  {
    url: 'https://i.ibb.co/wZwdRNpS/carousel-bg-1.png',
  },
  {
    url: 'https://i.ibb.co/k6sTpctY/carousel-bg-2.png',
  },
  {
    url: 'https://i.ibb.co/chdJ9j2z/carousel-bg-3.png',
  }
];

export const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % carouselImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="relative h-[27vh] overflow-hidden bg-white rounded-lg shadow-md">
        
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={`Carousel Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
        
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};