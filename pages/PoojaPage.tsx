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
  AlertCircle,
  Sparkles,
  Heart,
  Shield,
  Gift,
  RefreshCw
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
    message += `📦 Total Items: ${itemCount.toFixed(1)}\n`;
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
      <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl opacity-0 animate-fadeInUp">
        <div className="aspect-w-16 aspect-h-9 sm:aspect-h-8 lg:aspect-h-6">
          <img 
            src={poojaDetails.image} 
            alt={poojaDetails.name} 
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
          {/* Trust Badge */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-sm font-semibold">100% Authentic & Blessed</span>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-heading text-white drop-shadow-lg mb-3 leading-tight">
            {poojaDetails.name}
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl font-body max-w-3xl text-gray-200 drop-shadow-md mb-6 leading-relaxed">
            {poojaDetails.description}
          </p>
          
          {/* Rating & Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-200 ml-2">Authentic & Blessed</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-gray-200">Complete Kit Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart notification */}
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
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100 opacity-0 animate-fadeInUp" style={{animationDelay: '200ms'}}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl lg:text-3xl font-heading text-brand-secondary flex items-center gap-3">
                <Leaf className="text-brand-primary h-8 w-8"/>
                Pooja Samagri List
              </h2>
              <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-xl">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-700 font-medium">{items.length} Essential Items</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {items.map((item, index) => {
                const isInCart = getItemQuantity(item.id, poojaDetails.id) > 0;
                const isJustAdded = addedToCartItems.has(item.id);
                
                return (
                  <div 
                    key={item.id} 
                    className="p-4 lg:p-5 bg-gradient-to-r from-brand-bg/30 to-brand-bg/50 rounded-xl border border-brand-accent/20 opacity-0 animate-fadeInUp hover:shadow-lg transition-all duration-300"
                    style={{animationDelay: `${index * 50}ms`}}
                  >
                    {/* Mobile Layout */}
                    <div className="block lg:hidden">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1 pr-3">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-base text-brand-dark">{item.name}</h3>
                            {isInCart && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                                In Cart ({getItemQuantity(item.id, poojaDetails.id)})
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 italic mb-2 leading-relaxed">{item.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-brand-primary font-semibold">
                              ₹{item.price.toFixed(2)}
                            </span>
                            <span className="text-xs text-gray-500">per {item.unit}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleAddToCart(item)}
                          disabled={item.quantity === 0}
                          className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
                            isJustAdded 
                              ? 'bg-green-500 text-white' 
                              : item.quantity === 0
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              : 'bg-brand-primary text-white hover:bg-brand-secondary hover:scale-110'
                          }`}
                          aria-label="Add to cart"
                        >
                          {isJustAdded ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <QuantitySelector 
                          quantity={item.quantity} 
                          onDecrease={() => handleQuantityChange(item.id, item.quantity - 1)} 
                          onIncrease={() => handleQuantityChange(item.id, item.quantity + 1)}
                          // size="sm"
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
                    <div className="hidden lg:flex items-center justify-between">
                      <div className="flex-grow pr-6">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg text-brand-dark">{item.name}</h3>
                          {isInCart && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                              In Cart ({getItemQuantity(item.id, poojaDetails.id)})
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 italic mb-2 leading-relaxed">{item.description}</p>
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
                          onDecrease={() => handleQuantityChange(item.id, item.quantity - 1)} 
                          onIncrease={() => handleQuantityChange(item.id, item.quantity + 1)}
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
                          onClick={() => handleAddToCart(item)}
                          disabled={item.quantity === 0}
                          className={`p-3 rounded-xl transition-all duration-300 ${
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
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <h4 className="font-heading text-lg text-green-800 mb-2 flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Our Promise
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Authentic and blessed samagri items</li>
                  <li>• Fresh ingredients from trusted suppliers</li>
                  <li>• Complete kit for hassle-free preparation</li>
                  <li>• Fast delivery to your doorstep</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <h4 className="font-heading text-lg text-blue-800 mb-2 flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  Special Benefits
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Free delivery above ₹500</li>
                  <li>• Same day delivery available</li>
                  <li>• Customer support included</li>
                  <li>• Satisfaction guaranteed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1 opacity-0 animate-fadeInUp" style={{animationDelay: '400ms'}}>
             <div className="lg:sticky lg:top-24 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 space-y-6">
                <h3 className="text-2xl lg:text-3xl font-heading text-brand-secondary flex items-center gap-2">
                    <Package className="h-6 w-6 lg:h-8 lg:w-8 text-brand-primary"/>
                    Order Summary
                </h3>
                
                {/* Order Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-brand-bg to-yellow-50 rounded-xl border border-brand-accent/30">
                    <div className="text-2xl lg:text-3xl font-bold text-brand-primary">{itemCount.toFixed(1)}</div>
                    <div className="text-xs text-gray-600">Items</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-brand-bg rounded-xl border border-blue-200">
                    <div className="text-2xl lg:text-3xl font-bold text-blue-600">{items.filter(item => item.quantity > 0).length}</div>
                    <div className="text-xs text-gray-600">Types</div>
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
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="h-5 w-5 text-blue-600" />
                      <p className="text-sm text-blue-800 font-semibold">🚚 Delivery Information</p>
                    </div>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Same day delivery available</li>
                      <li>• Free delivery above ₹500</li>
                      <li>• COD & UPI payments accepted</li>
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