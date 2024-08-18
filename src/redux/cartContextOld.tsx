// CartContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface CartState {
  productIds: number[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; productId: number }
  | { type: 'REMOVE_FROM_CART'; productId: number };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, productIds: [...state.productIds, action.productId] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        productIds: state.productIds.filter(id => id !== action.productId),
      };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { productIds: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
