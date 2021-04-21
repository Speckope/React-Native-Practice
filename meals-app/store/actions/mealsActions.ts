import { filterSettings } from '../../types';

// export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
// export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = (id: string) => {
  return { type: 'TOGGLE_FAVORITE', payload: { id } } as const;
};

export const setFilters = (filterSettings: filterSettings) => {
  return { type: 'SET_FILTERS', payload: { filterSettings } } as const;
};
