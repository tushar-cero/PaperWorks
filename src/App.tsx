import React, { FC, useState, createContext, useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from './utils/routes';
import { CartItems, CartContextType } from './types';

export const CartContext = createContext<CartContextType | null>({
  cartItemsArray: [],
  addToCart: () => {},
  removeFromCart: () => {},
  handleQuantity: () => {},
  getQuantityById: () => 0
});

const App: FC = () => {
  const [cartItemsArray, setCartItemsArray] = useState<CartItems[]>([]);

  // Load cart state from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItemsArray(JSON.parse(storedCartItems));
    }
  }, []);
  // Save cart state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItemsArray));
  }, [cartItemsArray]);

  // Function to add an item to the cart or increment its quantity
  const addToCart = (id: string) => {
    const existingItem = cartItemsArray.find((item) => item.id === id);
    if (existingItem) {
      setCartItemsArray(
        cartItemsArray.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItemsArray([...cartItemsArray, { id, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart completely
  const removeFromCart = (id: string) => {
    setCartItemsArray(cartItemsArray.filter((item) => item.id !== id));
  };

  // Function to decrease the quantity of an item but not below 0
  const handleQuantity = (id: string) => {
    const existingItem = cartItemsArray.find((item) => item.id === id);
    if (existingItem && existingItem.quantity > 1) {
      setCartItemsArray(
        cartItemsArray.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      // If quantity is 1 and we try to decrease, remove the item from the cart
      removeFromCart(id);
    }
  };
  const getQuantityById = (id: string): number => {
    const item = cartItemsArray.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };


  const cartContextValue: CartContextType = {
    cartItemsArray,
    addToCart,
    removeFromCart,
    handleQuantity,
    getQuantityById
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

export default App;