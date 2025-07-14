import React, { useState } from 'react';
import { VRAT_TYPES } from '../constants';
import VratCard from '../components/VratCard';
import { Calendar, Filter, Star } from 'lucide-react';

const VratListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(VRAT_TYPES.map(vrat => vrat.category)))];
  
  // Filter vrats based on selected category
  const filteredVrats = selectedCategory === 'all' 
    ? VRAT_TYPES 
    : VRAT_TYPES.filter(vrat => vrat.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12 opacity-0 animate-fadeInUp">
        <h1 className="text-5xl md:text-6xl font-heading text-brand-secondary mb-4 flex items-center justify-center gap-3">
          <Calendar className="h-12 w-12 text-brand-primary" />
          Sacred Vrat Kits
        </h1>
        <p className="text-lg font-body text-gray-700 max-w-4xl mx-auto mb-8">
          Discover our complete collection of traditional vrat kits. Each kit contains all the essential items required for your sacred fasting rituals, blessed and prepared with devotion.
        </p>
        
        {/* Featured Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center justify-center gap-2 text-green-800 mb-2">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-semibold">Complete Kits</span>
            </div>
            <p className="text-sm text-green-700">All items included for hassle-free vrat observance</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center justify-center gap-2 text-blue-800 mb-2">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Traditional Authentic</span>
            </div>
            <p className="text-sm text-blue-700">Following age-old traditions and customs</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="flex items-center justify-center gap-2 text-purple-800 mb-2">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-semibold">Blessed Items</span>
            </div>
            <p className="text-sm text-purple-700">Each item blessed for spiritual purity</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
        <div className="flex items-center gap-3 mb-4">
          <Filter className="h-5 w-5 text-brand-primary" />
          <h3 className="text-lg font-heading text-brand-secondary">Filter by Category:</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-primary text-white shadow-lg'
                  : 'bg-white text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white'
              }`}
            >
              {category === 'all' ? 'All Vrats' : category}
              {category !== 'all' && (
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {VRAT_TYPES.filter(v => v.category === category).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Vrat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVrats.map((vrat, index) => (
          <VratCard 
            key={vrat.id} 
            vrat={vrat} 
            style={{ animationDelay: `${400 + index * 100}ms` }}
          />
        ))}
      </div>

      {/* No results message */}
      {filteredVrats.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No vrats found in this category.</p>
        </div>
      )}

      {/* Additional Information */}
      <div className="mt-16 bg-brand-bg p-8 rounded-xl shadow-lg opacity-0 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
        <h3 className="text-2xl font-heading text-brand-secondary mb-4 text-center">Why Choose Our Vrat Kits?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-brand-dark mb-2">🌟 Complete & Convenient</h4>
            <p className="text-sm text-gray-600 mb-4">
              Each kit contains all the essential items needed for your vrat, saving you time and ensuring nothing is missed.
            </p>
            
            <h4 className="font-semibold text-brand-dark mb-2">🙏 Traditionally Prepared</h4>
            <p className="text-sm text-gray-600">
              Our kits follow authentic traditions passed down through generations, maintaining the sanctity of your rituals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-dark mb-2">✨ Quality Assured</h4>
            <p className="text-sm text-gray-600 mb-4">
              All items are sourced from trusted suppliers and checked for quality and purity before packaging.
            </p>
            
            <h4 className="font-semibold text-brand-dark mb-2">🚚 Fast Delivery</h4>
            <p className="text-sm text-gray-600">
              Quick and reliable delivery to ensure your kit reaches you in time for your vrat observance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VratListPage;