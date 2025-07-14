
import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-full">
      <button 
        onClick={onDecrease} 
        className="p-2 text-brand-secondary hover:bg-red-100 rounded-full transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="font-bold text-lg w-8 text-center">{quantity}</span>
      <button 
        onClick={onIncrease} 
        className="p-2 text-brand-primary hover:bg-green-100 rounded-full transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default QuantitySelector;
