import React, { FC, useState, createContext, ReactNode } from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from './utils/routes';
import { CartItems, CartContextType } from './types';

export const CartContext = createContext<CartContextType | null>({
  cartItemsArray: [],
  addToCart: () => {},
  removeFromCart: () => {}
});

const App: FC = () => {
  const [cartItemsArray, setCartItemsArray] = useState<CartItems[]>([]);
  const addToCart = (id: string) => {
    const existingItem = cartItemsArray.find((item) => item.id === id);
    if (existingItem) {
      setCartItemsArray(
        cartItemsArray.map((item) =>
          item.id === id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item
        )
      );
    } else {
      setCartItemsArray([...cartItemsArray, { id, quantity: 1 }]);
    }
    console.log(cartItemsArray)
  };

  const removeFromCart = (id: string) => {
    setCartItemsArray(cartItemsArray.filter((item) => item.id !== id));
  };

  const cartContextValue: CartContextType = {
    cartItemsArray,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

export default App;