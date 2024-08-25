import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../types';

const initialCartState = {
  cartItemsArray: <CartItem[]>[],
  cartItemCount: 0,
  cartTotalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.cartItemsArray.find(item => item.id === action.payload.id);
      if (cartItem) {
        cartItem.quantity += action.payload;
      } else {
        state.cartItemsArray.push({
          id: action.payload.id,
          quantity: 1
        });
        state.cartItemCount += 1;
      }
      state.cartTotalQuantity += 1;
    },
    removeFromCart: (state, action) => {
      state.cartItemsArray = state.cartItemsArray.filter(item => item.id !== action.payload.id);
      state.cartItemCount -= 1;
    },
    reduceQuantityFromCart: (state, action) => {
      const cartItem = state.cartItemsArray.find(item => item.id === action.payload.id);
      (cartItem) ? cartItem.quantity -= 1 : 0;
    },
    clearCart: (state) => {
      state = initialCartState;
    }
  }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, reduceQuantityFromCart, clearCart } = cartSlice.actions;