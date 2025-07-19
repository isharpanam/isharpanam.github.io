import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart, CartItem } from '../context/CartContext';
import { WHATSAPP_BUSINESS_NUMBER } from '../constants';
import QuantitySelector from '../components/QuantitySelector';
import QRCodeModal from '../components/QRCodeModal';
import { 
  ShoppingCart, 
  Trash2, 
  Send, 
  ArrowLeft, 
  Package, 
  Star,
  AlertCircle,
  Gift,
  Plus,
  Sparkles,
  Heart,
  Shield
} from 'lucide-react';

const CartPage: React.FC = () => {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();
  const [customRequest, setCustomRequest] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Group cart items by pooja
  const groupedItems = useMemo(() => {
    const groups: Record<string, CartItem[]> = {};
    state.items.forEach(item => {
      if (!groups[item.poojaId]) {
        groups[item.poojaId] = [];
      }
      groups[item.poojaId].push(item);
    });
    return groups;
  }, [state.items]);

  const handleSendToWhatsApp = () => {
    let message = `🛒 *Cart Order - Isharpanam* 🛒\n\n`;
    
    Object.entries(groupedItems).forEach(([poojaId, items]) => {
      const poojaName = items[0].poojaName;
      message += `🙏 *${poojaName}*\n`;
      items.forEach(item => {
        message += `• ${item.name} (Qty: ${item.quantity} ${item.unit}) - ₹${(item.price * item.quantity).toFixed(2)}\n`;
      });
      message += `\n`;
    });
    
    message += `*Order Summary:*\n`;
    message += `📦 Total Items: ${state.totalItems.toFixed(1)}\n`;
    message += `🎯 Total Pooja Types: ${Object.keys(groupedItems).length}\n`;
    message += `💰 *Grand Total: ₹${state.totalAmount.toFixed(2)}*\n\n`;
    
    if (customRequest) {
      message += `*Special Instructions:*\n${customRequest}\n\n`;
    }
    
    message += `Please confirm this order and provide delivery details.\n\n`;
    message += `🌟 Thank you for choosing Isharpanam! 🌟`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(true);
  };

  if (state.items.length === 0) {
      return (
        <div className="max-w-4xl mx-auto text-center py-12 sm:py-16 lg:py-20 px-4">
          <div className="opacity-0 animate-fadeInUp">
            {/* Enhanced Empty State */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-gray-100">
              {/* Animated Cart Icon */}
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4">
                  <ShoppingCart className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-brand-accent animate-pulse" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-gray-600 mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-lg sm:text-xl font-body text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
                Start your spiritual journey by adding some sacred items to your cart.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-brand-primary from-brand-primary to-brand-secondary text-white font-bold py-4 px-8 rounded-xl hover:from-brand-secondary hover:to-brand-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Plus className="h-5 w-5" />
                  Browse Pooja Kits
                </Link>
                <Link
                  to="/vrats"
                  className="inline-flex items-center gap-3 border-2 border-brand-primary text-brand-primary font-bold py-4 px-8 rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Package className="h-5 w-5" />
                  View Vrat Kits
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      );
    }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 md:mb-8 opacity-0 animate-fadeInUp">
        {/* Mobile Header */}
        <div className="block md:hidden">
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 mb-6">
            <div className="flex items-center justify-between mb-3">
              <Link
                to="/"
                className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors font-body text-sm bg-brand-bg px-3 py-2 rounded-lg"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
              <div className="text-center">
                <h1 className="text-xl font-heading text-brand-secondary flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-brand-primary" />
                  My Cart
                </h1>
              </div>
              <div className="w-16"></div> {/* Spacer */}
            </div>
            <div className="text-center">
              <p className="text-sm font-body text-gray-600">
                {state.totalItems.toFixed(1)} items • {Object.keys(groupedItems).length} types • ₹{state.totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl lg:text-6xl font-heading text-brand-secondary flex items-center gap-4 mb-2">
                  <div className="relative">
                    <ShoppingCart className="h-12 w-12 lg:h-16 lg:w-16 text-brand-primary" />
                    <Sparkles className="absolute -top-1 -right-1 h-6 w-6 text-brand-accent animate-pulse" />
                  </div>
                  Your Sacred Cart
                </h1>
                <p className="text-lg font-body text-gray-600">
                  {state.totalItems.toFixed(1)} items from {Object.keys(groupedItems).length} pooja types • Total: ₹{state.totalAmount.toFixed(2)}
                </p>
              </div>
              <Link
                to="/"
                className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors font-body bg-brand-bg px-4 py-3 rounded-xl hover:bg-brand-primary hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
                  {Object.entries(groupedItems).map(([poojaId, items], groupIndex) => (
                    <div 
                      key={poojaId} 
                      className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 opacity-0 animate-fadeInUp hover:shadow-2xl transition-all duration-300"
                      style={{ animationDelay: `${groupIndex * 100}ms` }}
                    >
                      {/* Enhanced Pooja Header */}
                      <div className="mb-6 pb-4 border-b border-gray-200">
                        {/* Mobile Pooja Header */}
                        <div className="block md:hidden">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="relative">
                              <img 
                                src={items[0].poojaImage} 
                                alt={items[0].poojaName}
                                className="w-12 h-12 rounded-xl object-cover flex-shrink-0 border-2 border-brand-accent/20"
                              />
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-heading text-brand-secondary truncate">{items[0].poojaName}</h3>
                              <p className="text-xs text-gray-500">{items.length} items • ₹{items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center gap-2 bg-green-50 p-2 rounded-lg">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-green-700 font-medium">Complete Authentic Kit</span>
                          </div>
                        </div>
        
                        {/* Desktop Pooja Header */}
                        <div className="hidden md:flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <img 
                                src={items[0].poojaImage} 
                                alt={items[0].poojaName}
                                className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-accent/20"
                              />
                             
                            </div>
                            <div>
                              <h3 className="text-2xl lg:text-3xl font-heading text-brand-secondary">{items[0].poojaName}</h3>
                              <p className="text-sm text-gray-500">{items.length} items • Total: ₹{items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-xl">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-green-700 font-semibold">Complete Authentic Kit</span>
                          </div>
                        </div>
                      </div>
        
                      {/* Enhanced Items List */}
                      <div className="space-y-4">
                        {items.map((item, itemIndex) => (
                          <div 
                            key={`${item.id}-${item.poojaId}`}
                            className="p-4 bg-gradient-to-r from-gray-50 to-brand-bg/30 rounded-xl hover:from-brand-bg/50 hover:to-gray-50 transition-all duration-300 border border-gray-100"
                            style={{ animationDelay: `${(groupIndex * 100) + (itemIndex * 50)}ms` }}
                          >
                            {/* Mobile Layout */}
                            <div className="block md:hidden">
                              <div className="flex justify-between items-start mb-4">
                                <div className="flex-1 pr-3">
                                  <h4 className="font-bold text-base text-gray-800 leading-tight mb-1">{item.name}</h4>
                                  <p className="text-xs text-gray-600 italic mb-2 line-clamp-2">{item.description}</p>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm text-brand-primary font-semibold">
                                      ₹{item.price.toFixed(2)}
                                    </span>
                                    <span className="text-xs text-gray-500">per {item.unit}</span>
                                  </div>
                                </div>
                                <button
                                  onClick={() => removeFromCart(item.id, item.poojaId)}
                                  className="flex-shrink-0 p-2 text-red-500 hover:bg-red-100 rounded-xl transition-colors touch-manipulation group"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                </button>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <QuantitySelector
                                  quantity={item.quantity}
                                  onIncrease={() => updateQuantity(item.id, item.poojaId, item.quantity + 1)}
                                  onDecrease={() => updateQuantity(item.id, item.poojaId, item.quantity - 1)}
                                />
                                
                                <div className="text-right">
                                  <p className="font-bold text-lg text-gray-800">
                                    ₹{(item.price * item.quantity).toFixed(2)}
                                  </p>
                                  {item.quantity > 1 && (
                                    <p className="text-xs text-gray-500">
                                      {item.quantity} × ₹{item.price.toFixed(2)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
        
                            {/* Desktop Layout */}
                            <div className="hidden md:flex items-center justify-between">
                              <div className="flex-grow">
                                <h4 className="font-bold text-lg text-gray-800 mb-1">{item.name}</h4>
                                <p className="text-sm text-gray-600 italic mb-2">{item.description}</p>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-brand-primary font-semibold">
                                    ₹{item.price.toFixed(2)}
                                  </span>
                                  <span className="text-xs text-gray-500">per {item.unit}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-6">
                                <QuantitySelector
                                  quantity={item.quantity}
                                  onIncrease={() => updateQuantity(item.id, item.poojaId, item.quantity + 1)}
                                  onDecrease={() => updateQuantity(item.id, item.poojaId, item.quantity - 1)}
                                />
                                
                                <div className="text-right min-w-[100px]">
                                  <p className="font-bold text-xl text-gray-800">
                                    ₹{(item.price * item.quantity).toFixed(2)}
                                  </p>
                                  {item.quantity > 1 && (
                                    <p className="text-xs text-gray-500">
                                      {item.quantity} × ₹{item.price.toFixed(2)}
                                    </p>
                                  )}
                                </div>
                                
                                <button
                                  onClick={() => removeFromCart(item.id, item.poojaId)}
                                  className="p-3 text-red-500 hover:bg-red-100 rounded-xl transition-all duration-300 group"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                  <div className="lg:sticky lg:top-24 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-heading text-brand-secondary flex items-center gap-2 mb-4">
                      <Package className="h-6 w-6 lg:h-8 lg:w-8 text-brand-primary" />
                      Order Summary
                    </h3>
        
                    {/* Enhanced Summary Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gradient-to-br from-brand-bg to-yellow-50 rounded-xl border border-brand-accent/20">
                        <div className="text-2xl lg:text-3xl font-bold text-brand-primary">{state.totalItems.toFixed(1)}</div>
                        <div className="text-xs text-gray-600">Total Items</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-brand-bg rounded-xl border border-blue-200">
                        <div className="text-2xl lg:text-3xl font-bold text-blue-600">{Object.keys(groupedItems).length}</div>
                        <div className="text-xs text-gray-600">Pooja Types</div>
                      </div>
                    </div>
        
                    {/* Enhanced Breakdown */}
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Order Breakdown
                      </h4>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {Object.entries(groupedItems).map(([poojaId, items]) => {
                          const poojaTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
                          return (
                            <div key={poojaId} className="flex justify-between items-center py-1">
                              <span className="text-sm text-gray-600 truncate flex-1 pr-2">{items[0].poojaName}</span>
                              <span className="text-sm font-semibold text-brand-primary">₹{poojaTotal.toFixed(2)}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

            {/* Special Instructions */}
            <div>
              <label htmlFor="cartCustomRequest" className="block text-lg font-bold text-gray-700 mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-accent" />
                Special Instructions
              </label>
              <textarea
                id="cartCustomRequest"
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
                placeholder="e.g., 'Need extra flowers', 'Rush delivery required', 'Special packaging'"
                className="w-full p-3 border-2 border-gray-200 rounded-xl h-24 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary font-body text-sm resize-none transition-all duration-300"
              />
            </div>

            {/* Total */}
            <div className="text-xl md:text-3xl font-bold text-center my-4 md:my-6 text-brand-dark p-3 md:p-4 rounded-lg border-2 border-brand-accent bg-gradient-to-r from-brand-bg to-yellow-50">
              Grand Total: ₹{state.totalAmount.toFixed(2)}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                Send Order on WhatsApp
              </button>

              <button
                onClick={clearCart}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 px-4 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300"
              >
                <Trash2 className="h-4 w-4" />
                Clear Cart
              </button>
            </div>

            {/* Delivery Info */}
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="h-5 w-5 text-blue-600" />
                  <p className="text-sm text-blue-800 font-semibold">Delivery Benefits</p>
                </div>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Same day delivery available</li>
                  <li>• Free delivery above ₹500</li>
                  <li>• All items blessed by priests</li>
                  <li>• Freshness guarantee</li>
                </ul>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-green-600" />
                  <span className="text-xs text-green-800 font-semibold">100% Authentic Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        totalAmount={state.totalAmount}
      />
    </div>
  );
};

export default CartPage;