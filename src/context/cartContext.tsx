import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, CartContextType } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const handleAddToCart = (id: string) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(item => item.id === id);
            if (itemExists) {
                return prevItems.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { id, quantity: 1 }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, handleAddToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
