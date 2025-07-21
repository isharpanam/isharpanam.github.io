import React from 'react';
import { Link } from 'react-router-dom';
import { POOJA_TYPES } from '../constants';
import PoojaCard from '../components/PoojaCard';
import { Calendar, Package, Star, Sparkles, Heart, Shield } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12 lg:space-y-20">
      {/* Enhanced Hero Section */}
      <div className="text-center opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
        <div className="mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 px-4 py-2 rounded-full border border-brand-accent/20 mb-4">
            <Sparkles className="h-4 w-4 text-brand-primary" />
            <span className="text-sm font-semibold text-brand-secondary">Authentic • Blessed • Traditional</span>
            <Sparkles className="h-4 w-4 text-brand-primary" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-brand-secondary mb-4 lg:mb-6 leading-tight">
            Complete Pooja Kits &<br />
            <span className="text-brand-primary">Sacred Essentials</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-dark">
              🌿 Collected from Nature, Blessed by the Divine 🙏
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-body text-gray-700 leading-relaxed px-4">
              Your trusted source for authentic pooja kits and ritual essentials. We offer complete, traditional samagri sets for all your sacred ceremonies. Each kit contains carefully selected, blessed items to ensure your spiritual practices are performed with devotion and authenticity.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8 lg:mb-12 px-4">
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg border border-brand-accent/20 transform hover:scale-105 transition-transform duration-300">
            <Shield className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-semibold text-gray-800">100% Authentic</span>
            <span className="text-xs text-gray-600">Verified Quality</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg border border-brand-accent/20 transform hover:scale-105 transition-transform duration-300">
            <Heart className="h-8 w-8 text-red-500 mb-2" />
            <span className="text-sm font-semibold text-gray-800">Blessed Items</span>
            <span className="text-xs text-gray-600">Spiritually Pure</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg border border-brand-accent/20 transform hover:scale-105 transition-transform duration-300">
            <Package className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-semibold text-gray-800">Complete Kits</span>
            <span className="text-xs text-gray-600">Everything Included</span>
          </div>
        </div>
      </div>

      {/* Enhanced Pooja Cards Grid */}
      <div className="space-y-8">
        <div className="text-center opacity-0 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-brand-secondary mb-3">
            Choose Your Sacred Ritual
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Select from our collection of traditional pooja types, each with complete samagri kits
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
          {POOJA_TYPES.map((pooja, index) => (
            <PoojaCard 
              key={pooja.id} 
              pooja={pooja} 
              style={{ animationDelay: `${400 + index * 100}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Vrat Kits Section */}
      <div className="opacity-0 animate-fadeInUp px-4" style={{ animationDelay: '800ms' }}>
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary rounded-2xl lg:rounded-3xl shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
              <div className="text-center lg:text-left flex-1">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                  <Calendar className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold text-sm">New Collection</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4 text-white leading-tight">
                  Sacred Vrat Kits<br />
                  <span className="text-brand-accent">Available Now!</span>
                </h3>
                
                <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl leading-relaxed">
                  Complete traditional vrat kits for all your fasting rituals. From Bij to Chaturthi - all essential items included with authentic preparation.
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Package className="h-6 w-6 text-brand-accent flex-shrink-0" />
                    <div className="text-left">
                      <span className="text-white font-semibold text-sm block">Complete Kits</span>
                      <span className="text-white/70 text-xs">All Essentials</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Star className="h-6 w-6 text-brand-accent fill-current flex-shrink-0" />
                    <div className="text-left">
                      <span className="text-white font-semibold text-sm block">Traditional</span>
                      <span className="text-white/70 text-xs">Blessed Items</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="flex-shrink-0 text-center lg:text-right">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
                  <div className="text-3xl sm:text-4xl font-bold text-brand-accent mb-2">100+</div>
                  <div className="text-white text-sm">Vrat Types Available</div>
                </div>
                
                <Link 
                  to="/vrats"
                  className="inline-flex items-center gap-3 bg-white text-brand-primary font-bold py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <Calendar className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg">Explore Vrat Kits</span>
                </Link>
                
                <div className="mt-4 text-white/80 text-sm">
                  ✨ Starting from ₹250 only
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="opacity-0 animate-fadeInUp px-4" style={{ animationDelay: '1000ms' }}>
        <div className="bg-gradient-to-r from-brand-bg to-yellow-50 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-brand-accent/20">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-brand-secondary mb-4">
              Why Choose Isharpanam?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the divine with our carefully curated spiritual essentials
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assured",
                description: "Every item is carefully selected and quality tested",
                color: "text-green-600"
              },
              {
                icon: Heart,
                title: "Blessed by Priests",
                description: "All items are blessed for spiritual purity",
                color: "text-red-500"
              },
              {
                icon: Package,
                title: "Fast Delivery",
                description: "Fast delivery available in most areas",
                color: "text-blue-600"
              },
              {
                icon: Star,
                title: "Authentic Tradition",
                description: "Following age-old rituals and customs",
                color: "text-yellow-600"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4 group-hover:bg-gray-100 transition-colors duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="opacity-0 animate-fadeInUp px-4" style={{ animationDelay: '1200ms' }}>
        <div className="text-center bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-brand-secondary mb-4">
              Start Your Sacred Journey
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of devotees who trust Isharpanam for their spiritual needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Package className="h-5 w-5" />
                Browse Pooja Kits
              </Link>
              <Link
                to="/vrats"
                className="inline-flex items-center gap-2 border-2 border-brand-primary text-brand-primary font-bold py-4 px-8 rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                View Vrat Kits
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              🚚 Free delivery on orders above ₹500 • 📱 Easy WhatsApp ordering • ⚡ Fast delivery available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;