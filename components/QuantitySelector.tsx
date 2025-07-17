
import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-1 border border-gray-300 rounded-full bg-white shadow-sm">
      <button 
        onClick={onDecrease} 
        className="p-2 md:p-2 text-brand-secondary hover:bg-red-100 rounded-full transition-colors touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4 md:h-4 md:w-4" />
      </button>
      <span className="font-bold text-base md:text-lg w-8 md:w-8 text-center select-none">{quantity}</span>
      <button 
        onClick={onIncrease} 
        className="p-2 md:p-2 text-brand-primary hover:bg-green-100 rounded-full transition-colors touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4 md:h-4 md:w-4" />
      </button>
    </div>
  );
};

export default QuantitySelector;
