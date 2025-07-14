import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, ShoppingCart, Menu, X } from 'lucide-react';
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
    { to: '/', label: 'Home' },
    { to: '/vrats', label: 'Vrat Kits' },
  ];

  return (
    <>
      <header className={`
        bg-brand-secondary/95 backdrop-blur-sm text-white shadow-lg 
        fixed top-0 left-0 right-0 z-50 
        transform transition-transform duration-300 ease-in-out
        ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}
      `}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo - Responsive */}
            <Link to="/" className="flex items-center gap-2 group">
              <Leaf className="text-brand-accent h-6 w-6 md:h-8 md:w-8 animate-pulseSlow group-hover:text-white transition-colors" />
              <h1 className="text-xl md:text-2xl lg:text-4xl font-heading tracking-wider text-brand-accent group-hover:text-white transition-colors">
                <span className="hidden sm:inline">Isharpanam</span>
                <span className="sm:hidden">ISH</span>
              </h1>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigationItems.map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className="text-lg font-body hover:text-brand-accent transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
              
              <Link 
                to="/cart" 
                className="relative flex items-center gap-2 text-lg font-body hover:text-brand-accent transition-colors duration-300 group"
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  {state.totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                      {state.totalItems > 99 ? '99+' : state.totalItems}
                    </span>
                  )}
                </div>
                <span className="hidden lg:inline">Cart</span>
              </Link>
            </nav>

            {/* Mobile Menu Button & Cart */}
            <div className="flex items-center gap-3 md:hidden">
              <Link 
                to="/cart" 
                className="relative flex items-center text-lg font-body hover:text-brand-accent transition-colors duration-300 group"
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  {state.totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                      {state.totalItems > 99 ? '99+' : state.totalItems}
                    </span>
                  )}
                </div>
              </Link>
              
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-brand-accent/20 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Menu */}
      <div className={`
        fixed inset-0 z-40 md:hidden
        transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        />
        
        {/* Menu Panel */}
        <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-brand-secondary border-l border-brand-accent/20 shadow-2xl">
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-accent/20">
              <div className="flex items-center gap-2">
                <Leaf className="text-brand-accent h-6 w-6" />
                <h2 className="text-xl font-heading text-brand-accent">Menu</h2>
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-brand-accent/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-4">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`
                        block px-4 py-3 rounded-lg text-lg font-body
                        transition-all duration-200
                        ${location.pathname === item.to 
                          ? 'bg-brand-accent/20 text-brand-accent border-l-4 border-brand-accent' 
                          : 'text-white hover:bg-brand-accent/10 hover:text-brand-accent'
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                
                <li>
                  <Link
                    to="/cart"
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-body
                      transition-all duration-200
                      ${location.pathname === '/cart' 
                        ? 'bg-brand-accent/20 text-brand-accent border-l-4 border-brand-accent' 
                        : 'text-white hover:bg-brand-accent/10 hover:text-brand-accent'
                      }
                    `}
                  >
                    <div className="relative">
                      <ShoppingCart className="h-5 w-5" />
                      {state.totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold text-[10px]">
                          {state.totalItems > 99 ? '99+' : state.totalItems}
                        </span>
                      )}
                    </div>
                    Cart
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Menu Footer */}
            <div className="p-6 border-t border-brand-accent/20">
              <div className="text-center text-sm text-gray-300">
                <p>© 2024 Isharpanam</p>
                <p className="text-brand-accent mt-1">Divine Rituals Made Easy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Header;