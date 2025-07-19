import React from 'react';
import { Link } from 'react-router-dom';
import type { PoojaType } from '../types';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

interface PoojaCardProps {
  pooja: PoojaType;
  style?: React.CSSProperties;
}

const PoojaCard: React.FC<PoojaCardProps> = ({ pooja, style }) => {
  return (
    <div 
      style={style}
      className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 ease-out border-2 border-transparent hover:border-brand-accent opacity-0 animate-fadeInUp relative"
    >
      {/* Enhanced Image Section */}
      <div className="relative overflow-hidden">
        <div className="aspect-w-16 aspect-h-12 sm:aspect-h-10">
          <img 
            src={pooja.image} 
            alt={pooja.name} 
            className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <Star className="h-3 w-3 text-yellow-500 fill-current" />
            <span className="text-xs font-bold text-gray-800">Authentic</span>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          <Sparkles className="h-6 w-6 text-brand-accent animate-pulse" />
        </div>
        
      </div>

      {/* Enhanced Content Section */}
      <div className="p-6 sm:p-7 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,103,0,0.5) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-heading text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors duration-300 leading-tight">
            {pooja.name}
          </h3>
          
          {/* Description */}
          <p className="font-body text-gray-600 text-sm sm:text-base leading-relaxed mb-6 h-12 sm:h-16 overflow-hidden">
            {pooja.description}
          </p>
          
          {/* Features Row */}
          <div className="flex items-center justify-between mb-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Complete Kit</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
            </div>
          </div>
          
          {/* Enhanced CTA Button */}
          <Link
            to={`/pooja/${pooja.id}`}
            state={{ poojaDetails: pooja }}
            className="block w-full"
          >
            <button className="w-full group/btn bg-brand-primary from-brand-primary to-brand-secondary text-white font-bold py-3 sm:py-4 px-4 rounded-xl hover:from-brand-secondary hover:to-brand-primary transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden">
              {/* Button Background Effect */}
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Button Content */}
              <div className="relative flex items-center justify-center gap-2">
                <span className="text-sm sm:text-base">View Samagri Kit</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </Link>
          
         
        </div>
      </div>
      
    </div>
  );
};

export default PoojaCard;