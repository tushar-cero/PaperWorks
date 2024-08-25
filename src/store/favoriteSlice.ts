import { createSlice } from '@reduxjs/toolkit';
import { FavoriteItem } from '../types';

const initialfavoriteState = {
  favoriteItemsArray: <FavoriteItem[]>[]
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialfavoriteState,
  reducers: {
    addTofavorite: (state, action) => {
      state.favoriteItemsArray.push(action.payload.id);
    },
    removeFromfavorite: (state, action) => {
      state.favoriteItemsArray = state.favoriteItemsArray.filter(item => item.id !== action.payload.id);
    }
  }
});

export default favoriteSlice.reducer;
export const { addTofavorite, removeFromfavorite } = favoriteSlice.actions;