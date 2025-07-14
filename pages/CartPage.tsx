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
  Plus
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
    let message = `🛒 *Cart Order - Pooja Samagri Hub* 🛒\n\n`;
    
    Object.entries(groupedItems).forEach(([poojaId, items]) => {
      const poojaName = items[0].poojaName;
      message += `🙏 *${poojaName}*\n`;
      items.forEach(item => {
        message += `• ${item.name} (Qty: ${item.quantity} ${item.unit}) - ₹${(item.price * item.quantity).toFixed(2)}\n`;
      });
      message += `\n`;
    });
    
    message += `*Order Summary:*\n`;
    message += `📦 Total Items: ${state.totalItems}\n`;
    message += `🎯 Total Pooja Types: ${Object.keys(groupedItems).length}\n`;
    message += `💰 *Grand Total: ₹${state.totalAmount.toFixed(2)}*\n\n`;
    
    if (customRequest) {
      message += `*Special Instructions:*\n${customRequest}\n\n`;
    }
    
    message += `Please confirm this order and provide delivery details.\n\n`;
    message += `🌟 Thank you for choosing Pooja Samagri Hub! 🌟`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(true);
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <div className="opacity-0 animate-fadeInUp">
          <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-4xl font-heading text-gray-600 mb-4">Your Cart is Empty</h2>
          <p className="text-lg font-body text-gray-500 mb-8 max-w-md mx-auto">
            Start your spiritual journey by adding some sacred items to your cart.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-3 px-6 rounded-full hover:bg-brand-secondary transition-colors duration-300 transform hover:scale-105"
          >
            <Plus className="h-5 w-5" />
            Browse Pooja Types
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 opacity-0 animate-fadeInUp">
        <div>
          <h1 className="text-5xl font-heading text-brand-secondary flex items-center gap-3">
            <ShoppingCart className="h-12 w-12 text-brand-primary" />
            Your Sacred Cart
          </h1>
          <p className="text-lg font-body text-gray-600 mt-2">
            {state.totalItems} items from {Object.keys(groupedItems).length} pooja types
          </p>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors font-body"
        >
          <ArrowLeft className="h-5 w-5" />
          Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {Object.entries(groupedItems).map(([poojaId, items], groupIndex) => (
            <div 
              key={poojaId} 
              className="bg-white rounded-xl shadow-lg p-6 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${groupIndex * 100}ms` }}
            >
              {/* Pooja Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <img 
                    src={items[0].poojaImage} 
                    alt={items[0].poojaName}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-heading text-brand-secondary">{items[0].poojaName}</h3>
                    <p className="text-sm text-gray-500">{items.length} items in this pooja</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">Authentic</span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {items.map((item, itemIndex) => (
                  <div 
                    key={`${item.id}-${item.poojaId}`}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    style={{ animationDelay: `${(groupIndex * 100) + (itemIndex * 50)}ms` }}
                  >
                    <div className="flex-grow">
                      <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-600 italic">{item.description}</p>
                      <p className="text-sm text-brand-primary font-semibold mt-1">
                        ₹{item.price.toFixed(2)} per {item.unit}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <QuantitySelector
                        quantity={item.quantity}
                        onIncrease={() => updateQuantity(item.id, item.poojaId, item.quantity + 1)}
                        onDecrease={() => updateQuantity(item.id, item.poojaId, item.quantity - 1)}
                      />
                      
                      <div className="text-right min-w-[80px]">
                        <p className="font-bold text-lg text-gray-800">
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
                        className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <div className="sticky top-24 bg-white p-6 rounded-xl shadow-lg border-2 border-brand-accent/20">
            <h3 className="text-3xl font-heading text-brand-secondary flex items-center gap-2 mb-6">
              <Package className="h-8 w-8 text-brand-primary" />
              Order Summary
            </h3>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-brand-bg rounded-lg">
                <p className="text-2xl font-bold text-brand-primary">{state.totalItems}</p>
                <p className="text-sm text-gray-600">Total Items</p>
              </div>
              <div className="text-center p-3 bg-brand-bg rounded-lg">
                <p className="text-2xl font-bold text-brand-primary">{Object.keys(groupedItems).length}</p>
                <p className="text-sm text-gray-600">Pooja Types</p>
              </div>
            </div>

            {/* Breakdown by Pooja */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-700 mb-3">Order Breakdown</h4>
              {Object.entries(groupedItems).map(([poojaId, items]) => {
                const poojaTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
                return (
                  <div key={poojaId} className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 truncate">{items[0].poojaName}</span>
                    <span className="text-sm font-semibold">₹{poojaTotal.toFixed(2)}</span>
                  </div>
                );
              })}
            </div>

            {/* Special Instructions */}
            <div className="mb-6">
              <label htmlFor="cartCustomRequest" className="block text-lg font-bold text-gray-700 mb-2">
                Special Instructions
              </label>
              <textarea
                id="cartCustomRequest"
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
                placeholder="e.g., 'Need extra flowers', 'Rush delivery required', 'Special packaging'"
                className="w-full p-3 border-2 border-gray-300 rounded-lg h-24 focus:ring-brand-primary focus:border-brand-primary font-body text-sm resize-none"
              />
            </div>

            {/* Total */}
            <div className="text-3xl font-bold text-center my-6 text-brand-dark p-4 rounded-lg border-2 border-brand-accent bg-gradient-to-r from-brand-bg to-yellow-50">
              Grand Total: ₹{state.totalAmount.toFixed(2)}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-4 px-4 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send className="h-6 w-6" />
                Send Order on WhatsApp
              </button>

              <button
                onClick={clearCart}
                className="w-full flex items-center justify-center gap-2 bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition-all duration-300"
              >
                <Trash2 className="h-5 w-5" />
                Clear Cart
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
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

            {/* Trust Indicators */}
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-green-600" />
                <span className="text-xs text-green-800 font-semibold">100% Authentic Guarantee</span>
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