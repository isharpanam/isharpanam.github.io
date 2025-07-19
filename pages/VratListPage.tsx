import React, { useState } from 'react';
import { VRAT_TYPES } from '../constants';
import VratCard from '../components/VratCard';
import { Calendar, Filter, Star, Sparkles, Package, Search, Grid, List } from 'lucide-react';

const VratListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(VRAT_TYPES.map(vrat => vrat.category)))];
  
  // Filter vrats based on selected category and search term
  const filteredVrats = VRAT_TYPES.filter(vrat => {
    const matchesCategory = selectedCategory === 'all' || vrat.category === selectedCategory;
    const matchesSearch = vrat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vrat.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 space-y-8 lg:space-y-12">
      {/* Enhanced Hero Section */}
      <div className="text-center opacity-0 animate-fadeInUp">
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 animate-float">
              <Sparkles className="h-8 w-8 text-brand-accent" />
            </div>
            <div className="absolute top-3/4 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
              <Calendar className="h-6 w-6 text-brand-primary" />
            </div>
          </div>
          
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100 mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 px-4 py-2 rounded-full border border-brand-accent/20 mb-6">
              <Calendar className="h-5 w-5 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-secondary">Sacred Collection</span>
              <Sparkles className="h-4 w-4 text-brand-accent" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-brand-secondary mb-4 flex items-center justify-center gap-3 leading-tight">
              <Calendar className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-brand-primary" />
              Sacred Vrat Kits
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our complete collection of traditional vrat kits. Each kit contains all the essential items required for your sacred fasting rituals, blessed and prepared with devotion.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">{VRAT_TYPES.length}+</div>
                <div className="text-xs sm:text-sm text-green-700">Vrat Types</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">100%</div>
                <div className="text-xs sm:text-sm text-blue-700">Authentic</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">₹250</div>
                <div className="text-xs sm:text-sm text-purple-700">Starting From</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-600">⚡</div>
                <div className="text-xs sm:text-sm text-yellow-700">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Search and Filter Section */}
      <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
        <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-100">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search vrat kits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary font-body text-sm transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="h-5 w-5 text-brand-primary" />
              <h3 className="text-lg font-heading text-brand-secondary">Filter by Category:</h3>
            </div>
            
            {/* Mobile Category Filter */}
            <div className="block sm:hidden mb-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary font-body text-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Vrats' : category}
                    {category !== 'all' && ` (${VRAT_TYPES.filter(v => v.category === category).length})`}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Category Filter */}
            <div className="hidden sm:flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-brand-primary from-brand-primary to-brand-secondary text-white shadow-lg'
                      : 'bg-gray-100 text-brand-secondary hover:bg-brand-primary hover:text-white border border-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Vrats' : category}
                  {category !== 'all' && (
                    <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category ? 'bg-white/20' : 'bg-brand-primary/10 text-brand-primary'
                    }`}>
                      {VRAT_TYPES.filter(v => v.category === category).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Toggle & Results Count */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <span className="font-semibold">{filteredVrats.length}</span> vrat kits found
              {searchTerm && <span> for "{searchTerm}"</span>}
            </div>
            
            <div className="hidden lg:flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-brand-primary' : 'text-gray-500'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-brand-primary' : 'text-gray-500'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Vrat Cards Grid */}
      <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
        {filteredVrats.length > 0 ? (
          <div className={`grid gap-6 lg:gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredVrats.map((vrat, index) => (
              <VratCard 
                key={vrat.id} 
                vrat={vrat} 
                style={{ animationDelay: `${600 + index * 100}ms` }}
              />
            ))}
          </div>
        ) : (
          /* Enhanced No Results State */
          <div className="text-center py-12 lg:py-20">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 max-w-md mx-auto">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                  <Search className="h-10 w-10 text-gray-400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-heading text-gray-600 mb-3">No Vrats Found</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                No vrats match your current filters. Try adjusting your search or category selection.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="w-full bg-brand-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-brand-secondary transition-colors duration-300"
                >
                  Clear All Filters
                </button>
                
                <div className="text-sm text-gray-500">
                  or browse our complete collection above
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Why Choose Us Section */}
      <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
        <div className="bg-gradient-to-br from-brand-bg via-yellow-50 to-brand-bg rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-brand-accent/20 shadow-xl">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-brand-secondary mb-4">
              Why Choose Our Vrat Kits?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the divine with our carefully curated spiritual essentials
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Package,
                title: "Complete & Convenient",
                description: "Each kit contains all the essential items needed for your vrat, saving you time and ensuring nothing is missed.",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200"
              },
              {
                icon: Star,
                title: "Traditionally Prepared",
                description: "Our kits follow authentic traditions passed down through generations, maintaining the sanctity of your rituals.",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200"
              },
              {
                icon: Calendar,
                title: "Quality Assured",
                description: "All items are sourced from trusted suppliers and checked for quality and purity before packaging.",
                color: "text-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200"
              },
              {
                icon: Sparkles,
                title: "Fast Delivery",
                description: "Quick and reliable delivery to ensure your kit reaches you in time for your vrat observance.",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.bgColor} ${feature.borderColor} p-6 rounded-2xl border text-center transform hover:scale-105 transition-all duration-300 group`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 lg:mt-12">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-lg border border-gray-200">
              <Sparkles className="h-5 w-5 text-brand-accent" />
              <span className="text-brand-secondary font-semibold">🙏 Blessed for Your Spiritual Journey</span>
              <Sparkles className="h-5 w-5 text-brand-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VratListPage;