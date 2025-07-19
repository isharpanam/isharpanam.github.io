import React, { useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import type { VratType } from '../types';
import { WHATSAPP_BUSINESS_NUMBER } from '../constants';
import { useCart } from '../context/CartContext';
import QRCodeModal from '../components/QRCodeModal';
import {
  Send,
  ShoppingCart,
  ArrowLeft,
  Calendar,
  Package,
  Star,
  Clock,
  IndianRupee,
  Check,
  AlertCircle,
  Sparkles,
  Heart,
  Shield,
  Gift,
  Plus,
  Minus
} from 'lucide-react';

const VratPage: React.FC = () => {
  const [customRequest, setCustomRequest] = useState('');
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

    let message = `🙏 *Vrat Kit Order - Isharpanam* 🙏\n\n`;
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
    message += `🌟 Thank you for choosing Isharpanam! 🌟`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(true);
  };

  if (!vratDetails) {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center p-8 bg-red-50 border-2 border-red-200 text-red-700 rounded-2xl opacity-0 animate-fadeInUp">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading mb-3">Oops! Something Went Wrong</h2>
          <p className="font-body mb-6 leading-relaxed">Vrat details could not be found. This can happen if you refresh the page or access it directly.</p>
          <Link to="/vrats" className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-brand-secondary transition-colors duration-300">
            <ArrowLeft className="h-5 w-5" />
            Return to Vrat List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 space-y-6 lg:space-y-8">
      {/* Enhanced Hero Section */}
      <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl opacity-0 animate-fadeInUp">
        <div className="aspect-w-16 aspect-h-9 sm:aspect-h-8 lg:aspect-h-6">
          <img
            src={vratDetails.image}
            alt={vratDetails.name}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <Sparkles className="absolute top-1/4 right-1/4 h-6 w-6 text-brand-accent animate-pulse opacity-70" />
          <Heart className="absolute top-3/4 left-1/4 h-5 w-5 text-red-400 animate-pulse opacity-60" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12 text-white">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="bg-brand-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold border border-white/20">
              {vratDetails.category}
            </div>
            <div className="flex items-center gap-1 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              <IndianRupee className="h-4 w-4" />
              <span className="text-sm font-bold">{vratDetails.kitPrice}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
              <span className="text-sm font-semibold">Complete Kit</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-heading text-white drop-shadow-lg mb-3 leading-tight">
            {vratDetails.name}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl font-body max-w-3xl text-gray-200 drop-shadow-md mb-6 leading-relaxed">
            {vratDetails.description}
          </p>

          {/* Rating & Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-200 ml-2">Complete Authentic Kit</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-sm text-gray-200">100% Authentic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Notification */}
      {cartState.totalItems > 0 && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-2xl opacity-0 animate-fadeInUp">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-green-600" />
              <span className="text-green-800 font-semibold">
                {Math.ceil(cartState.totalItems)} items in your cart (₹{cartState.totalAmount.toFixed(2)})
              </span>
            </div>
            <Link
              to="/cart"
              className="text-green-600 hover:text-green-800 font-bold underline transition-colors"
            >
              View Cart
            </Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Enhanced Kit Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl lg:text-3xl font-heading text-brand-secondary flex items-center gap-3">
                <Package className="text-brand-primary h-8 w-8" />
                Complete Vrat Kit
              </h2>
              <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-xl">
                <Calendar className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-700 font-medium">All Essentials</span>
              </div>
            </div>

            {/* Enhanced Vrat Information */}
            <div className="space-y-6">
              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vratDetails.duration && (
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-blue-800 text-sm">Duration</span>
                        <p className="text-blue-700 font-medium">{vratDetails.duration}</p>
                      </div>
                    </div>
                  </div>
                )}

                {vratDetails.bestTime && (
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-purple-800 text-sm">Best Time</span>
                        <p className="text-purple-700 font-medium">{vratDetails.bestTime}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Kit Contents */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-brand-bg rounded-2xl border border-blue-200">
                <h3 className="font-heading text-xl text-blue-800 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Kit Includes:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    `Sacred items for ${vratDetails.name}`,
                    'Traditional puja accessories',
                    'Essential offerings & materials',
                    'Detailed instruction guide',
                    'Blessed items for purity',
                    'Premium quality ingredients'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-blue-700">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <h4 className="font-heading text-lg text-green-800 mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Our Promise
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Authentic & traditional</li>
                    <li>• Fresh & pure ingredients</li>
                    <li>• Complete hassle-free kit</li>
                    <li>• Quality guaranteed</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <h4 className="font-heading text-lg text-yellow-800 mb-3 flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    Benefits
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Fast delivery service</li>
                    <li>• Blessed by priests</li>
                    <li>• Traditional preparation</li>
                    <li>• Customer support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Order Section */}
        <div className="lg:col-span-1 opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
          <div className="lg:sticky lg:top-24 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 space-y-6">
            <h3 className="text-2xl lg:text-3xl font-heading text-brand-secondary flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 lg:h-8 lg:w-8 text-brand-primary" />
              Order Kit
            </h3>

            {/* Enhanced Kit Price */}
            <div className="text-center p-6 bg-gradient-to-br from-brand-bg to-yellow-50 rounded-2xl border border-brand-accent/30">
              <div className="text-3xl lg:text-4xl font-bold text-brand-primary flex items-center justify-center gap-2 mb-2">
                <IndianRupee className="h-7 w-7 lg:h-8 lg:w-8" />
                {vratDetails.kitPrice}
              </div>
              <p className="text-sm text-gray-600">per complete kit</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
                <span className="text-xs text-gray-500 ml-1">Premium Quality</span>
              </div>
            </div>

            {/* Enhanced Quantity Selector */}
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

            {/* Enhanced Total Cost */}
            <div className="text-center p-6 bg-yellow-50 text-brand-primary rounded-2xl shadow-lg">
              <div className="text-sm text-gray-600 mb-1">Total Amount</div>
              <div className="text-3xl lg:text-4xl font-bold flex items-center justify-center gap-2">
                <IndianRupee className="h-7 w-7" />
                {totalCost.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500 mt-1">Including all items</div>
              {isInCart && (
                <div className="mt-2 text-xs bg-white/20 px-3 py-1 rounded-full inline-block text-gray-700">
                  ✓ {getItemQuantity(`vrat-kit-${vratDetails.id}`, 'vrat-kits')} kits in cart
                </div>
              )}
            </div>



            {/* Enhanced Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={quantity === 0}
                className={`w-full flex items-center justify-center gap-3 font-bold py-4 px-4 rounded-xl transition-all duration-300 ${addedToCart
                    ? 'bg-green-500 text-white'
                    : quantity === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-brand-primary from-brand-primary to-brand-secondary text-white hover:from-brand-secondary hover:to-brand-primary hover:scale-105 shadow-lg'
                  }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="h-5 w-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </button>

              <button
                onClick={handleSendToWhatsApp}
                disabled={quantity === 0}
                className="w-full bg-green-600 text-white font-bold py-4 px-4 rounded-xl hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-3 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                Order via WhatsApp
              </button>
            </div>

            {/* Enhanced Custom Request */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-accent" />
                Special Instructions (Optional):
              </label>
              <textarea
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
                placeholder="Any special requirements or customizations..."
                className="w-full p-3 border-2 border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary font-body text-sm transition-all duration-300"
                rows={3}
              />
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-center gap-2 text-blue-800 text-sm font-semibold">
                  <Shield className="h-4 w-4" />
                  100% Authentic Guarantee
                </div>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2 text-green-800 text-sm font-semibold">
                  <Gift className="h-4 w-4" />
                  Free Delivery Above ₹500
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QRCodeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} totalAmount={totalCost} />
    </div>
  );
};

export default VratPage;