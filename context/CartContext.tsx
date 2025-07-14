import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import type { PoojaItem, PoojaType } from '../types';

// Extended cart item with pooja information
export interface CartItem extends PoojaItem {
  poojaId: string;
  poojaName: string;
  poojaImage: string;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { item: PoojaItem; pooja: PoojaType } }
  | { type: 'REMOVE_FROM_CART'; payload: { itemId: string; poojaId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; poojaId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'CLEAR_POOJA_ITEMS'; payload: { poojaId: string } };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { item, pooja } = action.payload;
      const existingItemIndex = state.items.findIndex(
        cartItem => cartItem.id === item.id && cartItem.poojaId === pooja.id
      );

      let newItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        newItems = state.items.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // Add new item to cart
        const cartItem: CartItem = {
          ...item,
          poojaId: pooja.id,
          poojaName: pooja.name,
          poojaImage: pooja.image,
        };
        newItems = [...state.items, cartItem];
      }

      return calculateTotals({ ...state, items: newItems });
    }

    case 'REMOVE_FROM_CART': {
      const { itemId, poojaId } = action.payload;
      const newItems = state.items.filter(
        item => !(item.id === itemId && item.poojaId === poojaId)
      );
      return calculateTotals({ ...state, items: newItems });
    }

    case 'UPDATE_QUANTITY': {
      const { itemId, poojaId, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        return cartReducer(state, { 
          type: 'REMOVE_FROM_CART', 
          payload: { itemId, poojaId } 
        });
      }

      const newItems = state.items.map(item =>
        item.id === itemId && item.poojaId === poojaId
          ? { ...item, quantity }
          : item
      );
      return calculateTotals({ ...state, items: newItems });
    }

    case 'CLEAR_CART':
      return initialState;

    case 'CLEAR_POOJA_ITEMS': {
      const { poojaId } = action.payload;
      const newItems = state.items.filter(item => item.poojaId !== poojaId);
      return calculateTotals({ ...state, items: newItems });
    }

    default:
      return state;
  }
}

function calculateTotals(state: CartState): CartState {
  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  return {
    ...state,
    totalItems,
    totalAmount,
  };
}

interface CartContextType {
  state: CartState;
  addToCart: (item: PoojaItem, pooja: PoojaType) => void;
  removeFromCart: (itemId: string, poojaId: string) => void;
  updateQuantity: (itemId: string, poojaId: string, quantity: number) => void;
  clearCart: () => void;
  clearPoojaItems: (poojaId: string) => void;
  getItemQuantity: (itemId: string, poojaId: string) => number;
  getPoojaItems: (poojaId: string) => CartItem[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: PoojaItem, pooja: PoojaType) => {
    dispatch({ type: 'ADD_TO_CART', payload: { item, pooja } });
  };

  const removeFromCart = (itemId: string, poojaId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { itemId, poojaId } });
  };

  const updateQuantity = (itemId: string, poojaId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, poojaId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const clearPoojaItems = (poojaId: string) => {
    dispatch({ type: 'CLEAR_POOJA_ITEMS', payload: { poojaId } });
  };

  const getItemQuantity = (itemId: string, poojaId: string): number => {
    const item = state.items.find(item => item.id === itemId && item.poojaId === poojaId);
    return item ? item.quantity : 0;
  };

  const getPoojaItems = (poojaId: string): CartItem[] => {
    return state.items.filter(item => item.poojaId === poojaId);
  };

  const value: CartContextType = {
    state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    clearPoojaItems,
    getItemQuantity,
    getPoojaItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}