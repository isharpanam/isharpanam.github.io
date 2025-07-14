import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import type { PoojaItem, PoojaType } from '../types';
import { fetchPoojaItems } from '../services/staticService';
import { WHATSAPP_BUSINESS_NUMBER } from '../constants';
import { useCart } from '../context/CartContext';
import QuantitySelector from '../components/QuantitySelector';
import QRCodeModal from '../components/QRCodeModal';
import Loader from '../components/Loader';
import { 
  Send, 
  ShoppingCart, 
  Info, 
  ArrowLeft, 
  Leaf, 
  Package, 
  Star,
  Plus,
  Check,
  AlertCircle
} from 'lucide-react';

const PoojaPage: React.FC = () => {
  const [items, setItems] = useState<PoojaItem[]>([]);
  const [customRequest, setCustomRequest] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalFlash, setTotalFlash] = useState(false);
  const [addedToCartItems, setAddedToCartItems] = useState<Set<string>>(new Set());

  const location = useLocation();
  const { poojaId } = useParams<{ poojaId: string }>();
  const poojaDetails: PoojaType | undefined = location.state?.poojaDetails;
  const { addToCart, getItemQuantity, state: cartState } = useCart();

  const fetchItems = useCallback(async () => {
    if (!poojaDetails) {
      setError("Pooja details are missing. Please return to the homepage and select a pooja.");
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const fetchedItems = await fetchPoojaItems(poojaDetails.name);
      setItems(fetchedItems);
    } catch (err) {
      console.error(err);
      setError("Failed to load pooja items. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [poojaDetails]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);
  
  const handleQuantityChange = (id: string, newQuantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const totalCost = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const itemCount = useMemo(() => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);
  
  useEffect(() => {
    if (totalCost > 0) {
      setTotalFlash(true);
      const timer = setTimeout(() => setTotalFlash(false), 500);
      return () => clearTimeout(timer);
    }
  }, [totalCost]);

  const handleAddToCart = (item: PoojaItem) => {
    if (!poojaDetails || item.quantity === 0) return;
    
    addToCart(item, poojaDetails);
    
    // Show feedback
    setAddedToCartItems(prev => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedToCartItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 2000);
  };

  const handleAddAllToCart = () => {
    if (!poojaDetails) return;
    
    const itemsToAdd = items.filter(item => item.quantity > 0);
    itemsToAdd.forEach(item => {
      addToCart(item, poojaDetails);
    });
    
    // Show feedback for all items
    const itemIds = itemsToAdd.map(item => item.id);
    setAddedToCartItems(new Set(itemIds));
    setTimeout(() => {
      setAddedToCartItems(new Set());
    }, 2000);
  };

  const handleSendToWhatsApp = () => {
    if (!poojaDetails) return;
    
    let message = `🙏 *Pooja Samagri Order* 🙏\n\n`;
    message += `*Pooja Type:* ${poojaDetails.name}\n\n`;
    message += `*Items Ordered:*\n`;
    
    items.forEach(item => {
      if (item.quantity > 0) {
        message += `• ${item.name} (Qty: ${item.quantity} ${item.unit}) - ₹${(item.price * item.quantity).toFixed(2)}\n`;
      }
    });
    
    message += `\n*Order Summary:*\n`;
    message += `📦 Total Items: ${itemCount}\n`;
    message += `💰 *Total Amount: ₹${totalCost.toFixed(2)}*\n\n`;
    
    if (customRequest) {
      message += `*Special Instructions:*\n${customRequest}\n\n`;
    }
    
    message += `Please confirm this order and provide delivery details.\n\n`;
    message += `🌟 Thank you for choosing Pooja Samagri Hub! 🌟`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(true);
  };
  
  if (!poojaDetails) {
     return (
        <div className="text-center p-8 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg opacity-0 animate-fadeInUp">
            <h2 className="text-3xl font-heading mb-2">Oops! Something Went Wrong</h2>
            <p className="font-body">Pooja details could not be found. This can happen if you refresh the page or access it directly.</p>
            <Link to="/" className="mt-4 inline-flex items-center gap-2 bg-brand-primary text-white font-bold py-2 px-4 rounded-full hover:bg-brand-secondary transition-colors duration-300">
                <ArrowLeft className="h-5 w-5" />
                Return to Homepage
            </Link>
        </div>
     );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-8 shadow-lg opacity-0 animate-fadeInUp">
        <img src={poojaDetails.image} alt={poojaDetails.name} className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
        <div className="relative h-full flex flex-col justify-end p-8 text-white">
          <h2 className="text-5xl md:text-7xl font-heading text-white drop-shadow-lg">{poojaDetails.name}</h2>
          <p className="text-lg font-body max-w-2xl mt-2 text-gray-200 drop-shadow-md">{poojaDetails.description}</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-200 ml-2">Authentic & Blessed</span>
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
      
      {isLoading && <Loader message="Preparing your sacred samagri list..." />}
      {error && (
        <div className="text-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg mb-8">
          <Info className="inline-block mr-2"/>
          {error}
          <button 
            onClick={fetchItems}
            className="ml-4 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg opacity-0 animate-fadeInUp" style={{animationDelay: '200ms'}}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-heading text-brand-secondary flex items-center gap-2">
                <Leaf className="text-brand-primary"/>
                Pooja Samagri List
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Package className="h-4 w-4" />
                {items.length} Essential Items
              </div>
            </div>
            
            <div className="space-y-3">
              {items.map((item, index) => {
                const isInCart = getItemQuantity(item.id, poojaDetails.id) > 0;
                const isJustAdded = addedToCartItems.has(item.id);
                
                return (
                  <div 
                    key={item.id} 
                    className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gradient-to-r from-brand-bg/30 to-brand-bg/50 rounded-lg border border-brand-accent/20 opacity-0 animate-fadeInUp hover:shadow-md transition-shadow"
                    style={{animationDelay: `${index * 50}ms`}}
                  >
                    <div className="flex-grow mb-3 sm:mb-0">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-lg text-brand-dark">{item.name}</p>
                        {isInCart && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                            In Cart ({getItemQuantity(item.id, poojaDetails.id)})
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 italic">{item.description}</p>
                      <p className="text-xs text-brand-primary font-semibold mt-1">
                        ₹{item.price.toFixed(2)} per {item.unit}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <QuantitySelector 
                        quantity={item.quantity} 
                        onDecrease={() => handleQuantityChange(item.id, item.quantity - 1)} 
                        onIncrease={() => handleQuantityChange(item.id, item.quantity + 1)} 
                      />
                      <div className="text-right min-w-[80px]">
                        <p className="font-bold text-lg text-brand-dark">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-gray-500">
                            {item.quantity} × ₹{item.price.toFixed(2)}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={item.quantity === 0}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          isJustAdded 
                            ? 'bg-green-500 text-white' 
                            : item.quantity === 0
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-brand-primary text-white hover:bg-brand-secondary hover:scale-110'
                        }`}
                        aria-label="Add to cart"
                      >
                        {isJustAdded ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Add All to Cart */}
            {itemCount > 0 && (
              <div className="mt-6 p-4 bg-brand-bg border border-brand-accent rounded-lg">
                <button
                  onClick={handleAddAllToCart}
                  className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-secondary transition-colors duration-300"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add All Selected Items to Cart
                </button>
              </div>
            )}

            {/* Special Features */}
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-heading text-lg text-green-800 mb-2">✨ Our Promise</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Authentic and blessed samagri items</li>
                <li>• Fresh ingredients sourced from trusted suppliers</li>
                <li>• Complete kit for hassle-free pooja preparation</li>
                <li>• Fast delivery to your doorstep</li>
              </ul>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1 opacity-0 animate-fadeInUp" style={{animationDelay: '400ms'}}>
             <div className="sticky top-24 bg-white p-6 rounded-xl shadow-lg border-2 border-brand-accent/20">
                <h3 className="text-3xl font-heading text-brand-secondary flex items-center gap-2 mb-6">
                    <Package className="h-8 w-8 text-brand-primary"/>
                    Order Summary
                </h3>
                
                {/* Order Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-brand-bg rounded-lg">
                    <p className="text-2xl font-bold text-brand-primary">{itemCount}</p>
                    <p className="text-sm text-gray-600">Items</p>
                  </div>
                  <div className="text-center p-3 bg-brand-bg rounded-lg">
                    <p className="text-2xl font-bold text-brand-primary">{items.filter(item => item.quantity > 0).length}</p>
                    <p className="text-sm text-gray-600">Types</p>
                  </div>
                </div>

                {/* Custom Request */}
                <div className="mb-6">
                    <label htmlFor="customRequest" className="block text-lg font-bold text-gray-700 mb-2">
                      Special Instructions
                    </label>
                    <textarea 
                        id="customRequest"
                        value={customRequest}
                        onChange={(e) => setCustomRequest(e.target.value)}
                        placeholder="e.g., 'Need extra flowers for decoration', 'Add specific sweets', 'Urgent delivery required'"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg h-24 focus:ring-brand-primary focus:border-brand-primary font-body text-sm resize-none"
                    />
                </div>
                
                {/* Total */}
                <div className={`text-3xl font-bold text-center my-6 text-brand-dark p-4 rounded-lg border-2 border-brand-accent ${totalFlash ? 'animate-flash' : ''}`}>
                    Total: ₹{totalCost.toFixed(2)}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button 
                      onClick={handleSendToWhatsApp}
                      disabled={totalCost === 0}
                      className="w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-4 px-4 rounded-lg hover:bg-green-600 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none shadow-lg"
                  >
                      <Send className="h-6 w-6"/>
                      {totalCost === 0 ? 'Add Items to Order' : 'Order via WhatsApp'}
                  </button>

                  <div className="text-center text-sm text-gray-500 py-2">or</div>

                  <button
                      onClick={handleAddAllToCart}
                      disabled={totalCost === 0}
                      className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-secondary transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                      <ShoppingCart className="h-5 w-5"/>
                      Add to Cart
                  </button>
                </div>

                {/* Delivery Info */}
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800 font-semibold">🚚 Delivery Information</p>
                  <ul className="text-xs text-blue-700 mt-1 space-y-1">
                    <li>• Same day delivery available</li>
                    <li>• Free delivery above ₹500</li>
                    <li>• COD & UPI payments accepted</li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* QR Code Modal */}
      <QRCodeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        totalAmount={totalCost}
      />
    </div>
  );
};

export default PoojaPage;