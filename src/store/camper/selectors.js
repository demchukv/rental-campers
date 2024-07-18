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
  let matchLocation = true;
  let matchType = true;
  let matchEquipment = true;
  let noEquipment = true;
  for (var key in filters) {
    if (key === 'location' && filters[key].length > 2) {
      matchLocation = item.location
        .toLowerCase()
        .includes(filters.location.toLowerCase())
        ? true
        : false;
    }

    if (key === 'form' && filters[key] !== '') {
      matchType = item[key] === filters[key] ? true : false;
    }

    if (typeof filters[key] === 'boolean' && filters[key] === true) {
      if (key === 'kitchen') {
        matchEquipment = item.details[key] > 0 ? true : false;
      }
      if (key === 'airConditioner' && matchEquipment) {
        matchEquipment = item.details[key] > 0 ? true : false;
      }
      if (key === 'TV' && matchEquipment) {
        matchEquipment = item.details[key] > 0 ? true : false;
      }
      if (key === 'shower' && matchEquipment) {
        matchEquipment =
          item.details[key] > 0 && item.details.toilet > 0 ? true : false;
      }
      if (key === 'transmission' && matchEquipment) {
        matchEquipment = item[key] === 'automatic' ? true : false;
      }
      noEquipment = false;
    }
  }
  return matchLocation && matchType && (noEquipment || matchEquipment)
    ? true
    : false;
}
