
import React from 'react';
import { Link } from 'react-router-dom';
import type { PoojaType } from '../types';
import { ArrowRight } from 'lucide-react';

interface PoojaCardProps {
  pooja: PoojaType;
  style?: React.CSSProperties;
}

const PoojaCard: React.FC<PoojaCardProps> = ({ pooja, style }) => {
  return (
    <div 
      style={style}
      className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group border-2 border-transparent hover:border-brand-accent hover:shadow-2xl opacity-0 animate-fadeInUp"
    >
      <div className="relative">
        <img src={pooja.image} alt={pooja.name} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-3xl font-heading text-brand-secondary">{pooja.name}</h3>
        <p className="font-body text-gray-600 mt-2 h-16">{pooja.description}</p>
        <Link
          to={`/pooja/${pooja.id}`}
          state={{ poojaDetails: pooja }}
          className="mt-4 inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-2 px-4 rounded-full group-hover:bg-brand-secondary transition-colors duration-300"
        >
          View Samagri Kit
          <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default PoojaCard;