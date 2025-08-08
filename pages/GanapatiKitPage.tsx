import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { WHATSAPP_BUSINESS_NUMBER } from '../constants';
import type { PoojaItem, PoojaType } from '../types';
import { 
  ShoppingCart, 
  Star, 
  Package, 
  Heart, 
  Shield, 
  Sparkles, 
  ArrowLeft,
  Send,
  Check,
  Plus,
  Minus,
  Gift
} from 'lucide-react';

const GanapatiKitPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const kitPrice = 999;
  const totalPrice = kitPrice * quantity;

  const kitData = {
    id: 'ganapati-pooja-kit',
    name: 'Ganapati Pooja Saman Kit',
    price: kitPrice,
    description: 'Complete traditional Ganapati worship kit with all essential items',
    image: 'images/pojaa1.jpeg'
  };

  const poojaItems = [
    {
      section: 'આસન અને મૂર્તિ માટે | For Aasan & Idol',
      emoji: '1️⃣',
      items: [
        { gujarati: 'ગણપતિની માટીની મૂર્તિ', english: 'Ganapati Clay Idol' },
        { gujarati: 'લાલ કપડું આસન માટે', english: 'Red Cloth for Aasan' }
      ]
    },
    {
      section: 'પૂજા માટેની આવશ્યક વસ્તુઓ | Essential Pooja Items',
      emoji: '2️⃣',
      items: [
        { gujarati: 'કંકુ', english: 'Kanku' },
        { gujarati: 'ચોખા', english: 'Rice' },
        { gujarati: 'અબિલ', english: 'Abil' },
        { gujarati: 'ગુલાલ', english: 'Gulal' },
        { gujarati: 'સિંદૂર', english: 'Sindoor' },
        { gujarati: 'નાડાછડીનો દોરો', english: 'Nadachhadi Thread' },
        { gujarati: 'જનોઈ', english: 'Sacred Thread (Janoi)' },
        { gujarati: 'દુર્વા', english: 'Durva Grass' }
      ]
    },
    {
      section: 'નૈવેદ્ય અને ભોગ માટે | For Naivedyam & Bhog',
      emoji: '3️⃣',
      items: [
        { gujarati: 'ગોળ ભોગ માટે', english: 'Jaggery for Bhog' },
        { gujarati: 'મિક્સ સુકા મેવા', english: 'Mix Dry Fruits' },
        { gujarati: 'સુપારી', english: 'Betel Nut' },
        { gujarati: 'તજ-લવિંગ-એલચી', english: 'Cinnamon, Clove & Cardamom' }
      ]
    },
    {
      section: 'સુગંધ અને વાતાવરણ માટે | For Fragrance & Ambience',
      emoji: '4️⃣',
      items: [
        { gujarati: 'અત્તરની બોટલ', english: 'Scent Bottle' },
        { gujarati: 'ધૂપ', english: 'Dhoop' }
      ]
    },
    {
      section: 'દીવો પ્રજ્વલિત કરવા માટે | For Lighting the Lamp',
      emoji: '5️⃣',
      items: [
        { gujarati: 'માટીનો દીવો', english: 'Clay Lamp (Mati no Divo)' },
        { gujarati: 'વાટ', english: 'Vat (Cotton Wick)' },
        { gujarati: 'કપૂર', english: 'Camphor' },
        { gujarati: 'ઘી', english: 'Ghee' },
        { gujarati: 'માચિસનું બોક્સ', english: 'Matchbox' }
      ]
    }
  ];

  const handleAddToCart = () => {
    const cartItem: PoojaItem = {
      id: kitData.id,
      name: kitData.name,
      description: kitData.description,
      quantity: quantity,
      price: kitData.price,
      unit: 'kit'
    };
    
    const poojaType: PoojaType = {
      id: 'ganapati-kit',
      name: 'Ganapati Pooja Kit',
      description: 'Complete traditional Ganapati worship kit',
      image: kitData.image
    };
    
    // Add to cart using the proper cart context
    addToCart(cartItem, poojaType);
    
    // Show feedback
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleWhatsAppOrder = () => {
    const message = `🙏 *Ganapati Pooja Kit Order* 🙏\n\n` +
      `*Product:* ${kitData.name}\n` +
      `*Quantity:* ${quantity} kit(s)\n` +
      `*Total Price:* ₹${totalPrice}\n\n` +
      `*Kit Includes:*\n` +
      `🪔 Complete traditional Ganapati pooja items\n` +
      `📿 All essential worship materials\n` +
      `🎁 Blessed and quality assured\n\n` +
      `Please confirm my order. Thank you! 🙏`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-8 lg:space-y-12">
      {/* Back Button */}
      <div className="opacity-0 animate-fadeInUp">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors duration-300 font-semibold"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-orange-600 rounded-3xl shadow-2xl opacity-0 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-12">
          {/* Image */}
          <div className="relative">
            <img
              src={kitData.image}
              alt={kitData.name}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute top-4 left-4">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-bold text-gray-800">Premium Kit</span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="text-white flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 self-start">
              <Package className="h-5 w-5" />
              <span className="font-semibold text-sm">Complete Kit</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4 leading-tight">
              🪔 ગણપતિ પૂજા સામાન સૂચિ
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading mb-6 text-brand-accent leading-tight">
              Ganapati Pooja Saman Kit
            </h2>
            
            <p className="text-lg sm:text-xl mb-6 text-white/90 leading-relaxed">
              Complete traditional Ganapati worship kit with all essential items for removing obstacles and ensuring success in all endeavors.
            </p>
            
            {/* Price & Quantity */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-brand-accent">₹{kitPrice}</span>
                <span className="text-sm bg-green-500 text-white px-3 py-1 rounded-full">In Stock</span>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-white font-semibold">Quantity:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decreaseQuantity}
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="bg-white text-gray-800 px-4 py-2 rounded-lg font-bold min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="text-xl font-bold text-white">
                Total: ₹{totalPrice}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  isAddedToCart 
                    ? 'bg-green-500 text-white' 
                    : 'bg-white text-brand-primary hover:bg-gray-100'
                }`}
              >
                {isAddedToCart ? <Check className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
                {isAddedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              
              <button
                onClick={handleWhatsAppOrder}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                <Send className="h-5 w-5" />
                Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Kit Contents */}
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
        <div className="text-center mb-8">
          <h3 className="text-3xl sm:text-4xl font-heading text-brand-secondary mb-4">
            Complete Kit Contents
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This comprehensive kit includes all traditional items required for authentic Ganapati worship
          </p>
        </div>

        <div className="space-y-8">
          {poojaItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-gradient-to-r from-brand-bg to-yellow-50 rounded-2xl p-6 border border-brand-accent/20">
              <h4 className="text-xl font-heading text-brand-secondary mb-4 flex items-center gap-3">
                <span className="text-2xl">{section.emoji}</span>
                {section.section}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-brand-primary font-semibold text-base mb-1">
                      {item.gujarati}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {item.english}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose This Kit */}
      <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 text-white opacity-0 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
        <h3 className="text-3xl sm:text-4xl font-heading text-center mb-8">
          Why Choose Our Ganapati Kit?
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: "Quality Assured",
              description: "All items carefully selected and quality tested"
            },
            {
              icon: Heart,
              title: "Blessed Items",
              description: "Every item blessed by experienced priests"
            },
            {
              icon: Package,
              title: "Complete Kit",
              description: "Everything you need in one package"
            },
            {
              icon: Gift,
              title: "Traditional",
              description: "Following authentic Ganapati worship traditions"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-heading text-brand-secondary mb-4">
            Start Your Sacred Ganapati Worship
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands who trust our authentic pooja kits for their spiritual needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppOrder}
              className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Send className="h-5 w-5" />
              Order Now - ₹{totalPrice}
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary font-bold py-4 px-8 rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Package className="h-5 w-5" />
              Browse Other Kits
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanapatiKitPage;