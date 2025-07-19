import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ 
  quantity, 
  onIncrease, 
  onDecrease, 
  min = 0,
  max = 999,
  size = 'md',
  disabled = false
}) => {
  const [isIncreasing, setIsIncreasing] = useState(false);
  const [isDecreasing, setIsDecreasing] = useState(false);

  const handleIncrease = () => {
    if (disabled || quantity >= max) return;
    setIsIncreasing(true);
    onIncrease();
    setTimeout(() => setIsIncreasing(false), 150);
  };

  const handleDecrease = () => {
    if (disabled || quantity <= min) return;
    setIsDecreasing(true);
    onDecrease();
    setTimeout(() => setIsDecreasing(false), 150);
  };

  const sizeClasses = {
    sm: {
      container: 'gap-1',
      button: 'p-2 min-w-[36px] min-h-[36px]',
      icon: 'h-3 w-3',
      text: 'text-sm w-8'
    },
    md: {
      container: 'gap-1',
      button: 'p-2 min-w-[44px] min-h-[44px]',
      icon: 'h-4 w-4',
      text: 'text-base w-10'
    },
    lg: {
      container: 'gap-2',
      button: 'p-3 min-w-[52px] min-h-[52px]',
      icon: 'h-5 w-5',
      text: 'text-lg w-12'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${currentSize.container} bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${disabled ? 'opacity-50' : ''}`}>
      {/* Decrease Button */}
      <button 
        onClick={handleDecrease}
        disabled={disabled || quantity <= min}
        className={`
          ${currentSize.button} 
          text-brand-secondary hover:bg-red-50 hover:text-red-600 
          rounded-l-lg transition-all duration-200 transform
          disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-transparent
          touch-manipulation active:scale-95 relative overflow-hidden group
          ${isDecreasing ? 'scale-95 bg-red-100' : ''}
        `}
        aria-label="Decrease quantity"
      >
        {/* Ripple effect */}
        <div className="absolute inset-0 bg-red-100 rounded-l-lg opacity-0 group-active:opacity-50 transition-opacity duration-150"></div>
        <Minus className={`${currentSize.icon} relative z-10 transition-transform duration-200 ${isDecreasing ? 'scale-110' : ''}`} />
      </button>

      {/* Quantity Display */}
      <div className={`
        ${currentSize.text} text-center select-none font-bold text-gray-800 
        flex items-center justify-center relative
      `}>
        <span className={`transition-all duration-200 ${isIncreasing || isDecreasing ? 'scale-110' : ''}`}>
          {quantity}
        </span>
        
        {/* Visual feedback for changes */}
        {(isIncreasing || isDecreasing) && (
          <div className="absolute inset-0 bg-brand-accent/20 rounded animate-pulse"></div>
        )}
      </div>

      {/* Increase Button */}
      <button 
        onClick={handleIncrease}
        disabled={disabled || quantity >= max}
        className={`
          ${currentSize.button} 
          text-brand-primary hover:bg-green-50 hover:text-green-600 
          rounded-r-lg transition-all duration-200 transform
          disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-transparent
          touch-manipulation active:scale-95 relative overflow-hidden group
          ${isIncreasing ? 'scale-95 bg-green-100' : ''}
        `}
        aria-label="Increase quantity"
      >
        {/* Ripple effect */}
        <div className="absolute inset-0 bg-green-100 rounded-r-lg opacity-0 group-active:opacity-50 transition-opacity duration-150"></div>
        <Plus className={`${currentSize.icon} relative z-10 transition-transform duration-200 ${isIncreasing ? 'scale-110' : ''}`} />
      </button>
    </div>
  );
};

export default QuantitySelector;