import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.camper.campers;

export const selectFilters = state => state.camper.filters;

export const selectFavorites = state => state.camper.favorites;

export const selectIsLoading = state => state.camper.isLoading;

export const selectIsError = state => state.camper.isError;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    if (filters.length > 0) {
      return campers.map(item => {
        return item.item;
      });
    } else {
      return campers;
    }
  }
);
