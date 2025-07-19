import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, IndianRupee, Star, Sparkles, Heart } from 'lucide-react';
import type { VratType } from '../types';

interface VratCardProps {
  vrat: VratType;
  style?: React.CSSProperties;
}

const VratCard: React.FC<VratCardProps> = ({ vrat, style }) => {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500 border-2 border-brand-accent/20 opacity-0 animate-fadeInUp relative"
      style={style}
    >
      {/* Enhanced Image Section */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img 
          src={vrat.image} 
          alt={vrat.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
        
        {/* Floating Price Badge */}
        <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
          <div className="bg-brand-primary from-brand-primary to-brand-secondary text-white px-3 py-2 rounded-xl text-sm font-bold flex items-center gap-1 shadow-lg">
            <IndianRupee className="h-4 w-4" />
            <span>{vrat.kitPrice}</span>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm text-brand-secondary px-3 py-1 rounded-full text-xs font-semibold border border-brand-accent/30">
            {vrat.category}
          </div>
        </div>
        
        {/* Sparkle Effect on Hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          <Sparkles className="h-6 w-6 text-brand-accent animate-pulse" />
        </div>
        
        {/* Special Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-1 bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-bold">
            <Heart className="h-3 w-3 fill-current" />
            <span>Blessed</span>
          </div>
        </div>
        
      </div>
      
      {/* Enhanced Content Section */}
      <div className="p-5 sm:p-6 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,103,0,0.5) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-heading text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors duration-300 leading-tight">
            {vrat.name}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 font-body text-sm leading-relaxed mb-4 h-12 overflow-hidden">
            {vrat.description}
          </p>
          
          {/* Enhanced Info Grid */}
          <div className="space-y-2 mb-4">
            {vrat.duration && (
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-50 rounded-lg">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <span className="text-gray-500 text-xs">Duration:</span>
                  <p className="text-gray-700 font-medium">{vrat.duration}</p>
                </div>
              </div>
            )}
            
            {vrat.bestTime && (
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-50 rounded-lg">
                  <Calendar className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <span className="text-gray-500 text-xs">Best Time:</span>
                  <p className="text-gray-700 font-medium">{vrat.bestTime}</p>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Star Rating */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-4 w-4 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform duration-300" 
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
              <span className="text-xs text-gray-500 ml-2 font-medium">Complete Kit</span>
            </div>
            
            {/* Kit Indicator */}
            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-700 font-semibold">Ready</span>
            </div>
          </div>
          
          {/* Enhanced CTA Button */}
          <Link 
            to={`/vrat/${vrat.id}`}
            state={{ vratDetails: vrat }}
            className="block w-full"
          >
            <button className="w-full group/btn bg-brand-primary from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-bold py-3 sm:py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden">
              {/* Button Background Effect */}
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Button Content */}
              <div className="relative flex items-center justify-center gap-2">
                <span className="text-sm sm:text-base">Order Vrat Kit</span>
                <div className="flex items-center gap-1">
                  <IndianRupee className="h-4 w-4" />
                  <span className="font-bold">{vrat.kitPrice}</span>
                </div>
              </div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -top-2 -bottom-2 w-full bg-brand-primary from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
            </button>
          </Link>
        
        </div>
      </div>
      
    </div>
  );
};

export default VratCard;