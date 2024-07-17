import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './operations.js';

const initialState = {
  campers: [],
  filters: [],
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
    builder.addCase(getCampers.pending, handlePending);
    builder.addCase(getCampers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.campers = action.payload;
    });
    builder.addCase(getCampers.rejected, handleRejected);
  },
});

export const { clearError } = camperSlice.actions;

const camperReducer = camperSlice.reducer;

export default camperReducer;
