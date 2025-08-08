import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { CarouselItem } from '../config/carouselConfig';

interface CarouselProps {
  images?: string[];
  items?: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  onItemClick?: (item: CarouselItem) => void;
}

const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  items,
  autoPlay = true, 
  interval = 4000,
  onItemClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use items if provided, otherwise fallback to images
  const displayItems = items || (images?.map(img => ({ image: img })) || []);
  const totalItems = displayItems.length;

  useEffect(() => {
    if (!autoPlay || totalItems === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalItems - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, totalItems]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalItems - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === totalItems - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleItemClick = (item: any) => {
    if (onItemClick && items) {
      onItemClick(item as CarouselItem);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
      <div className="relative h-64 md:h-80 lg:h-96">
        {displayItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="relative w-full h-full cursor-pointer group"
              onClick={() => handleItemClick(item)}
            >
              <img
                src={item.image}
                alt={items ? item.title || `Carousel image ${index + 1}` : `Carousel image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay for clickable items */}
              {items && (
                <>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  
                  {/* Product Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                    <div className="text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm md:text-base mb-3 opacity-90">{item.description}</p>
                      
                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl md:text-3xl font-bold text-brand-accent">
                          ₹{item.price}
                        </div>
                        <div className="flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary px-4 py-2 rounded-full transition-colors duration-300">
                          <ShoppingCart className="h-4 w-4" />
                          <span className="text-sm font-semibold">View Kit</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {displayItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;