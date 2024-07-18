import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.camper.campers;

export const selectFilters = state => state.camper.filters;

export const selectFavorites = state => state.camper.favorites;

export const selectIsLoading = state => state.camper.isLoading;

export const selectIsError = state => state.camper.isError;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    if (Object.keys(filters).length !== 0) {
      return campers.filter(item => {
        return filterCamper(item, filters);
      });
    } else {
      return campers;
    }
  }
);

function filterCamper(item, filters) {
  let matchLocation = false;
  let matchType = false;
  let matchEquipment = false;
  for (var key in filters) {
    if (
      key === 'location' &&
      item[key].toLowerCase().includes(filters[key].toLowerCase())
    ) {
      matchLocation = true;
      console.log(item._id, ' : ', item[key], filters[key], matchLocation);
    }
    if (key === 'form' && item[key] === filters[key]) {
      matchType = true;
      console.log(item._id, ' : ', item[key], filters[key], matchType);
    }
  }
  if (matchLocation === true && matchType === true) {
    console.log('match to filters');
  }
  return matchLocation === true && matchType === true ? true : false;
}
