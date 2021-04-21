import Meal from './models/meal';

export type filterSettings = {
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
};

export type AppState = {
  meals: {
    meals: Meal[];
    filteredMeals: Meal[];
    favoriteMeals: Meal[];
  };
};
