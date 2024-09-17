import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialCartState = {
  searchTerm: <string>'',
  productItemsArray: <string[]>[]
};

const productSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { setSearchTerm } = productSlice.actions;
export default productSlice.reducer;