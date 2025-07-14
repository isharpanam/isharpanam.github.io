import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import type { VratType } from '../types';
import { WHATSAPP_BUSINESS_NUMBER } from '../constants';
import { useCart } from '../context/CartContext';
import QRCodeModal from '../components/QRCodeModal';
import { 
  Send, 
  ShoppingCart, 
  Info, 
  ArrowLeft, 
  Calendar, 
  Package, 
  Star,
  Clock,
  IndianRupee,
  Check,
  AlertCircle
} from 'lucide-react';

const VratPage: React.FC = () => {
  const [customRequest, setCustomRequest] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const { vratId } = useParams<{ vratId: string }>();
  const vratDetails: VratType | undefined = location.state?.vratDetails;
  const { addToCart, getItemQuantity, state: cartState } = useCart();

  const totalCost = vratDetails ? vratDetails.kitPrice * quantity : 0;
  const isInCart = vratDetails ? getItemQuantity(`vrat-kit-${vratDetails.id}`, 'vrat-kits') > 0 : false;

  const handleAddToCart = () => {
    if (!vratDetails || quantity === 0) return;
    
    // Create a virtual item for the vrat kit
    const vratKitItem = {
      id: `vrat-kit-${vratDetails.id}`,
      name: `${vratDetails.name} - Complete Kit`,
      description: `Complete vrat kit for ${vratDetails.name} including all essential items`,
      quantity: quantity,
      price: vratDetails.kitPrice,
      unit: 'kit'
    };

    // Create a virtual pooja type for vrat
    const vratPoojaType = {
      id: 'vrat-kits',
      name: 'Vrat Kits',
      description: 'Sacred Vrat Kits Collection',
      image: vratDetails.image
    };
    
    addToCart(vratKitItem, vratPoojaType);
    
    // Show feedback
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const handleSendToWhatsApp = () => {
    if (!vratDetails) return;
    
    let message = `🙏 *Vrat Kit Order* 🙏\n\n`;
    message += `*Vrat Type:* ${vratDetails.name}\n`;
    message += `*Category:* ${vratDetails.category}\n\n`;
    message += `*Kit Details:*\n`;
    message += `• Complete ${vratDetails.name} Kit\n`;
    message += `• Quantity: ${quantity} kit(s)\n`;
    message += `• Kit Price: ₹${vratDetails.kitPrice} per kit\n\n`;
    
    message += `*Order Summary:*\n`;
    message += `📦 Total Kits: ${quantity}\n`;
    message += `💰 *Total Amount: ₹${totalCost.toFixed(2)}*\n\n`;
    
    if (customRequest) {
      message += `*Special Instructions:*\n${customRequest}\n\n`;
    }
    
    message += `Please confirm this vrat kit order and provide delivery details.\n\n`;
    message += `🌟 Thank you for choosing Pooja Samagri Hub! 🌟`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(true);
  };
  
  if (!vratDetails) {
     return (
        <div className="text-center p-8 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg opacity-0 animate-fadeInUp">
            <h2 className="text-3xl font-heading mb-2">Oops! Something Went Wrong</h2>
            <p className="font-body">Vrat details could not be found. This can happen if you refresh the page or access it directly.</p>
            <Link to="/vrats" className="mt-4 inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-2 px-4 rounded-full hover:bg-brand-secondary transition-colors duration-300">
                <ArrowLeft className="h-5 w-5" />
                Return to Vrat List
            </Link>
        </div>
     );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-8 shadow-lg opacity-0 animate-fadeInUp">
        <img src={vratDetails.image} alt={vratDetails.name} className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
        <div className="relative h-full flex flex-col justify-end p-8 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-brand-primary/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {vratDetails.category}
            </span>
            <div className="flex items-center gap-1 bg-green-500/80 px-3 py-1 rounded-full">
              <IndianRupee className="h-4 w-4" />
              <span className="text-sm font-bold">{vratDetails.kitPrice}</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading text-white drop-shadow-lg">{vratDetails.name}</h2>
          <p className="text-lg font-body max-w-2xl mt-2 text-gray-200 drop-shadow-md">{vratDetails.description}</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-200 ml-2">Complete Kit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart notification */}
      {cartState.totalItems > 0 && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg opacity-0 animate-fadeInUp">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-semibold">
                {cartState.totalItems} items in your cart (₹{cartState.totalAmount.toFixed(2)})
              </span>
            </div>
            <Link 
              to="/cart" 
              className="text-green-600 hover:text-green-800 font-bold underline"
            >
              View Cart
            </Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kit Details */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg opacity-0 animate-fadeInUp" style={{animationDelay: '200ms'}}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-heading text-brand-secondary flex items-center gap-2">
              <Package className="text-brand-primary"/>
              Complete Vrat Kit
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              All Essentials Included
            </div>
          </div>
          
          {/* Kit Information */}
          <div className="space-y-6">
            {/* Vrat Details */}
            <div className="p-4 bg-gradient-to-r from-brand-bg/30 to-brand-bg/50 rounded-lg border border-brand-accent/20">
              <h4 className="font-heading text-xl text-brand-dark mb-3">Vrat Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vratDetails.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-brand-primary" />
                    <div>
                      <span className="font-semibold text-gray-700">Duration:</span>
                      <p className="text-gray-600">{vratDetails.duration}</p>
                    </div>
                  </div>
                )}
                {vratDetails.bestTime && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-brand-primary" />
                    <div>
                      <span className="font-semibold text-gray-700">Best Time:</span>
                      <p className="text-gray-600">{vratDetails.bestTime}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Kit Contents */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-heading text-lg text-blue-800 mb-3">✨ Kit Includes:</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• Sacred items required for {vratDetails.name}</li>
                <li>• Traditional puja accessories</li>
                <li>• Essential offerings and materials</li>
                <li>• Detailed instruction guide</li>
                <li>• Blessed items for spiritual purity</li>
                <li>• Premium quality ingredients</li>
              </ul>
            </div>

            {/* Special Features */}
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-heading text-lg text-green-800 mb-2">🌟 Our Promise</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Authentic and traditional vrat kit</li>
                <li>• Fresh and pure ingredients</li>
                <li>• Complete kit for hassle-free vrat observance</li>
                <li>• Fast delivery to your doorstep</li>
                <li>• Quality guaranteed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Order Section */}
        <div className="lg:col-span-1 opacity-0 animate-fadeInUp" style={{animationDelay: '400ms'}}>
          <div className="sticky top-24 bg-white p-6 rounded-xl shadow-lg border-2 border-brand-accent/20">
            <h3 className="text-3xl font-heading text-brand-secondary flex items-center gap-2 mb-6">
              <ShoppingCart className="h-8 w-8 text-brand-primary"/>
              Order Kit
            </h3>
            
            {/* Kit Price */}
            <div className="text-center mb-6 p-4 bg-brand-bg rounded-lg">
              <div className="text-2xl font-bold text-brand-primary flex items-center justify-center gap-1">
                <IndianRupee className="h-6 w-6" />
                {vratDetails.kitPrice}
              </div>
              <p className="text-sm text-gray-600">per complete kit</p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity:</label>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 font-bold transition-colors"
                >
                  -
                </button>
                <div className="flex-1 text-center py-2 font-bold bg-white">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 font-bold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Cost */}
            <div className="text-center mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="text-3xl font-bold text-yellow-800 flex items-center justify-center gap-1">
                <IndianRupee className="h-7 w-7" />
                {totalCost.toFixed(2)}
              </div>
              <p className="text-sm text-yellow-600">Total Amount</p>
              {isInCart && (
                <p className="text-xs text-green-600 mt-1 font-semibold">
                  ✓ Already in cart ({getItemQuantity(`vrat-kit-${vratDetails.id}`, 'vrat-kits')} kits)
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={handleAddToCart}
                disabled={quantity === 0}
                className={`w-full flex items-center justify-center gap-2 font-bold py-3 px-4 rounded-lg transition-all duration-300 ${
                  addedToCart 
                    ? 'bg-green-500 text-white' 
                    : quantity === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-brand-primary text-white hover:bg-brand-secondary hover:scale-105'
                }`}
              >
                {addedToCart ? <Check className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>

              <button
                onClick={handleSendToWhatsApp}
                disabled={quantity === 0}
                className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                Order via WhatsApp
              </button>
            </div>

            {/* Custom Request */}
            <div className="border-t pt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Special Instructions (Optional):
              </label>
              <textarea
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
                placeholder="Any special requirements or customizations..."
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                rows={3}
              />
            </div>
          </div>
        </div>
      </div>

      <QRCodeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} totalAmount={totalCost} />
    </div>
  );
};

export default VratPage;