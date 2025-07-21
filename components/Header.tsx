import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, ShoppingCart, Menu, X, Home, Calendar } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { state } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior - hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/vrats', label: 'Vrat Kits', icon: Calendar },
  ];

  return (
    <>
      <header className={`
        bg-brand-secondary/90 from-brand-secondary via-brand-secondary to-brand-primary 
        text-white shadow-xl fixed top-0 left-0 right-0 z-50 
        transform transition-all duration-300 ease-in-out
        ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}
        backdrop-blur-md bg-opacity-95
      `}>
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            {/* Logo - Enhanced */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group relative">
              <div className="relative">
                <img 
                  src="/images/logo.png" 
                  alt="Isharpanam Logo" 
                  className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 animate-pulseSlow group-hover:scale-110 transition-all duration-300 object-contain"
                />
                <div className="absolute inset-0 bg-brand-accent/20 rounded-full animate-ping opacity-75 group-hover:opacity-100"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl lg:text-3xl xl:text-4xl font-heading tracking-wider text-brand-accent group-hover:text-white transition-colors duration-300 leading-tight">
                  <span className="hidden xs:inline">Isharpanam</span>
                  <span className="xs:hidden">ISH</span>
                </h1>
                <span className="hidden sm:block text-xs lg:text-sm text-brand-accent/80 group-hover:text-white/80 transition-colors duration-300 -mt-1">
                  Divine Rituals
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation - Enhanced */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.to;
                return (
                  <Link 
                    key={item.to}
                    to={item.to} 
                    className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-base lg:text-lg font-body transition-all duration-300 group ${
                      isActive 
                        ? 'text-brand-accent bg-white/10 shadow-lg' 
                        : 'text-white hover:text-brand-accent hover:bg-white/5'
                    }`}
                  >
                    <IconComponent className="h-4 w-4 lg:h-5 lg:w-5" />
                    {item.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-brand-accent rounded-full"></div>
                    )}
                  </Link>
                );
              })}
              
              <Link 
                to="/cart" 
                className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-base lg:text-lg font-body transition-all duration-300 group ${
                  location.pathname === '/cart'
                    ? 'text-brand-accent bg-white/10 shadow-lg'
                    : 'text-white hover:text-brand-accent hover:bg-white/5'
                }`}
              >
                <div className="relative">
                  <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6 group-hover:scale-110 transition-transform duration-300" />
                  {state.totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse shadow-lg">
                      {state.totalItems > 99 ? '99+' : Math.ceil(state.totalItems)}
                    </span>
                  )}
                </div>
                <span className="hidden lg:inline">Cart</span>
                {location.pathname === '/cart' && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-brand-accent rounded-full"></div>
                )}
              </Link>
            </nav>

            {/* Mobile Cart & Menu Button - Enhanced */}
            <div className="flex items-center gap-2 md:hidden">
              <Link 
                to="/cart" 
                className={`relative p-2 rounded-lg transition-all duration-300 ${
                  location.pathname === '/cart'
                    ? 'text-brand-accent bg-white/10'
                    : 'text-white hover:text-brand-accent hover:bg-white/10'
                }`}
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {state.totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold animate-pulse">
                      {state.totalItems > 99 ? '99+' : Math.ceil(state.totalItems)}
                    </span>
                  )}
                </div>
              </Link>
              
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 touch-manipulation"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      <div className={`
        fixed inset-0 z-40 md:hidden
        transform transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}>
        {/* Enhanced Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={toggleMenu}
        />
        
        {/* Enhanced Menu Panel */}
        <div className={`
          absolute right-0 top-0 h-full w-80 max-w-[85vw] 
          bg-transparent backdrop-blur-md border-l border-white/20
          shadow-2xl transform transition-all duration-300 ease-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col h-full">
            {/* Enhanced Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20 bg-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-heading text-brand-accent">Menu</h2>
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Enhanced Navigation Links */}
            <nav className="flex-1 px-4 py-6 overflow-y-auto">
              <ul className="space-y-3">
                {navigationItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = location.pathname === item.to;
                  return (
                    <li key={item.to} className="opacity-0 animate-fadeInMenu" style={{ animationDelay: `${index * 100}ms` }}>
                      <Link
                        to={item.to}
                        className={`
                          flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-body
                          transition-all duration-200 transform hover:scale-105
                          ${isActive 
                            ? 'bg-brand-accent/20 text-brand-accent border-l-4 border-brand-accent shadow-lg' 
                            : 'text-white hover:bg-white/10 hover:text-brand-accent'
                          }
                        `}
                      >
                        <IconComponent className="h-6 w-6 flex-shrink-0" />
                        <span className="flex-1">{item.label}</span>
                        {isActive && (
                          <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                        )}
                      </Link>
                    </li>
                  );
                })}
                
                <li className="opacity-0 animate-fadeInMenu" style={{ animationDelay: '200ms' }}>
                  <Link
                    to="/cart"
                    className={`
                      flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-body
                      transition-all duration-200 transform hover:scale-105
                      ${location.pathname === '/cart' 
                        ? 'bg-brand-accent/20 text-brand-accent border-l-4 border-brand-accent shadow-lg' 
                        : 'text-white hover:bg-white/10 hover:text-brand-accent'
                      }
                    `}
                  >
                    <div className="relative flex-shrink-0">
                      <ShoppingCart className="h-6 w-6" />
                      {state.totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold text-[10px]">
                          {state.totalItems > 99 ? '99+' : Math.ceil(state.totalItems)}
                        </span>
                      )}
                    </div>
                    <span className="flex-1">Cart</span>
                    {state.totalItems > 0 && (
                      <span className="text-sm text-brand-accent/80">
                        ₹{state.totalAmount.toFixed(0)}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>

              {/* Quick Stats */}
              {state.totalItems > 0 && (
                <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-sm font-semibold text-brand-accent mb-2">Cart Summary</h4>
                  <div className="text-sm text-white/80 space-y-1">
                    <div className="flex justify-between">
                      <span>Items:</span>
                      <span>{Math.ceil(state.totalItems)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total:</span>
                      <span className="text-brand-accent font-semibold">₹{state.totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </nav>

          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-14 sm:h-16 lg:h-18"></div>
    </>
  );
};

export default Header;