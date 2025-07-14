
import React from 'react';
import { Loader2, Flower } from 'lucide-react';

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      {/* Main spinning loader */}
      <div className="relative">
        <Loader2 
          size={64} 
          className="text-brand-primary animate-spin"
        />
        {/* Decorative flower in center for spiritual theme */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Flower 
            size={24} 
            className="text-brand-secondary animate-pulse"
          />
        </div>
      </div>
      
      {/* Loading dots animation */}
      <div className="flex space-x-2 mt-6">
        <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
      
      <p className="mt-4 text-xl font-body text-brand-secondary tracking-wide">{message}</p>
    </div>
  );
};

export default Loader;