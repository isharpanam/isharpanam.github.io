import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, IndianRupee, Star } from 'lucide-react';
import type { VratType } from '../types';

interface VratCardProps {
  vrat: VratType;
  style?: React.CSSProperties;
}

const VratCard: React.FC<VratCardProps> = ({ vrat, style }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-brand-accent/20 opacity-0 animate-fadeInUp group"
      style={style}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={vrat.image} 
          alt={vrat.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
        <div className="absolute top-4 right-4">
          <div className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            <IndianRupee className="h-4 w-4" />
            {vrat.kitPrice}
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-brand-secondary/90 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {vrat.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-heading text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors">
          {vrat.name}
        </h3>
        <p className="text-gray-600 font-body text-sm mb-4 leading-relaxed">
          {vrat.description}
        </p>
        
        <div className="space-y-2 mb-4">
          {vrat.duration && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4 text-brand-primary" />
              <span>Duration: {vrat.duration}</span>
            </div>
          )}
          {vrat.bestTime && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4 text-brand-primary" />
              <span>Best Time: {vrat.bestTime}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 mb-4">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-xs text-gray-500 ml-1">Complete Kit</span>
        </div>
        
        <Link 
          to={`/vrat/${vrat.id}`}
          state={{ vratDetails: vrat }}
          className="block w-full bg-brand-primary text-white text-center font-bold py-3 px-4 rounded-lg hover:bg-brand-secondary transition-colors duration-300 transform hover:scale-105"
        >
          Order Vrat Kit - ₹{vrat.kitPrice}
        </Link>
      </div>
    </div>
  );
};

export default VratCard;