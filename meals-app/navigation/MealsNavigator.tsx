import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';
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
const MealsNavigator = createStackNavigator(
  {
    // We use any identifier we want as a key, value is a screen we want to point at!
    // Top level component mapped to navigator gets a special prop - navigation (an object) that lets us navigate to it.
    Categories: {
      screen: CategoriesScreen,
    },
    // We also can do a longer form, we wil then be able to set additional properies
    CategoryMeals: {
      screen: CategoryMealsScreen,
      // We can add styles here
      // navigationOptions: {
      //   headerStyle: {
      //     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      //   },
      //   headerTintColor:
      //     Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      // },
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
    // With this scrrens will slide from below
    // mode: 'modal'

    // This will make it so we will start on MealDetail (It will be our initial screen)
    // initialRouteName: 'MealDetails',
  }
);

// We use return react component (createAppContainer)
export default createAppContainer(MealsNavigator);
