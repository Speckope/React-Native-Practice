import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/meal';
import { setFilters, toggleFavorite } from '../actions/mealsActions';

type State = {
  readonly meals: Meal[];
  readonly filteredMeals: Meal[];
  readonly favoriteMeals: Meal[];
};

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

type Actions =
  | ReturnType<typeof toggleFavorite>
  | ReturnType<typeof setFilters>;

const mealsReducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload.id
      );
      // If meal is in favorites
      if (existingIndex >= 0) {
        // Create copy of an array to not modify the original
        const updatedFavMeals = [...state.favoriteMeals];
        // Cut thje favorite meal
        updatedFavMeals.splice(existingIndex, 1);

        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.payload.id);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal as Meal),
        };
      }

    case 'SET_FILTERS':
      // Check applied filters
      const appliedFilters = action.payload.filterSettings;
      // Return new array with applied filters
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
