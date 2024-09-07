import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteInitialStateInterface } from '../types';

const initialfavoriteState: FavoriteInitialStateInterface = {
  favoriteItemsArray: [],
  favoriteItemCount: 0
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialfavoriteState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<{ id: string }>) => {
      const existingItem = state.favoriteItemsArray.find(item => item === action.payload.id);
      if (!existingItem) {
        state.favoriteItemsArray.push(action.payload.id);
        state.favoriteItemCount += 1;
      }
    },
    removeFromFavorite: (state, action: PayloadAction<{ id: string }>) => {
      const itemIndex = state.favoriteItemsArray.findIndex(item => item === action.payload.id);
      if (itemIndex !== -1) {
        state.favoriteItemsArray.splice(itemIndex, 1);
        state.favoriteItemCount -= 1;
      }
    }
  }
});

export default favoriteSlice.reducer;
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;