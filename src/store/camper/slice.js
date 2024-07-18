import { createSlice } from '@reduxjs/toolkit';
import { getCampers, getFavorites, getFilters } from './operations.js';

const initialState = {
  campers: [],
  filters: {},
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

    builder.addCase(getFavorites.pending, handlePending);
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          item => item !== action.payload
        );
      } else {
        state.favorites.push(action.payload);
      }
    });
    builder.addCase(getFavorites.rejected, handleRejected);

    builder.addCase(getFilters.pending, handlePending);
    builder.addCase(getFilters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.filters = {
        ...state.filters,
        [action.payload.name]: action.payload.value,
      };
    });
    builder.addCase(getFilters.rejected, handleRejected);
  },
});

export const { clearError } = camperSlice.actions;

const camperReducer = camperSlice.reducer;

export default camperReducer;
