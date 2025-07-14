
import React from 'react';
import { Link } from 'react-router-dom';
import { POOJA_TYPES } from '../constants';
import PoojaCard from '../components/PoojaCard';
import { Calendar, Package, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
        <h2 className="text-5xl md:text-6xl font-heading text-brand-secondary mb-4">Select a Pooja</h2>
        <p className="text-lg font-body text-gray-700 max-w-3xl mx-auto mb-12">
          Welcome to Isharpanam! Your sacred rituals, simplified. Choose a pooja to view a complete, customizable list of required items (samagri). We've prepared everything you need for a divine experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POOJA_TYPES.map((pooja, index) => (
          <PoojaCard 
            key={pooja.id} 
            pooja={pooja} 
            style={{ animationDelay: `${200 + index * 100}ms` }}
          />
        ))}
      </div>

      {/* Vrat Kits Section */}
      <div className="mt-20 opacity-0 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-heading mb-3 flex items-center gap-3">
                <Calendar className="h-10 w-10" />
                Sacred Vrat Kits Available!
              </h3>
              <p className="text-lg font-body mb-4 max-w-2xl">
                Complete traditional vrat kits for all your fasting rituals. From Bij to Chaturthi - all essential items included with authentic preparation.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  <span>Complete Kits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span>Traditional & Blessed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>100+ Vrat Types</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Link 
                to="/vrats"
                className="bg-white text-brand-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Vrat Kits
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;