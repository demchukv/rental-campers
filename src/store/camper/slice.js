import { createSlice } from '@reduxjs/toolkit';
import { getCampers, getFavorites } from './operations.js';

const initialState = {
  campers: [],
  totalCampers: 0,
  favorites: [],
  isLoading: false,
  isError: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  reducers: {
    clearError: state => {
      state.isError = null;
    },
  },
  extraReducers: builder => {
    // set paginated and filtered list
    builder.addCase(getCampers.pending, handlePending);
    builder.addCase(getCampers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      if (action.meta.arg.page === 1) {
        state.campers = action.payload.data;
      } else {
        state.campers = [...state.campers, ...action.payload.data];
      }
      state.totalCampers = action.payload.total;
    });
    builder.addCase(getCampers.rejected, handleRejected);

    //set favorites
    builder.addCase(getFavorites.pending, handlePending);
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      const index = state.favorites.find(
        item => item._id === action.payload._id
      );
      if (index) {
        state.favorites = state.favorites.filter(
          item => item._id !== action.payload._id
        );
        console.log('remove from state');
      } else {
        state.favorites.push(action.payload);
        console.log('add to state');
      }
    });
    builder.addCase(getFavorites.rejected, handleRejected);
  },
});

export const { clearError } = camperSlice.actions;

const camperReducer = camperSlice.reducer;

export default camperReducer;
