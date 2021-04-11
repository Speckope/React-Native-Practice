import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

// type RootStackParamList = {
//     Profile: undefined,
//     CategoryMeals: undefined,
//     MealDetail: undefined
// };

// Abyt=
// This takes at least one argument which is screens we want to navigate to
const MealsNavigator = createStackNavigator({
  // We use any identifier we want as a key, value is a screen we want to point at!
  // Top level component mapped to navigator gets a special prop - navigation (an object) that lets us navigate to it.
  Categories: CategoriesScreen,
  // We also can do a longer form, we wil then be able to set additional properies
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen,
});

// We use return react component (createAppContainer)
export default createAppContainer(MealsNavigator);
