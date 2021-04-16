import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

// type RootStackParamList = {
//     Profile: undefined,
//     CategoryMeals: undefined,
//     MealDetail: undefined
// };

// This takes at least one argument which is screens we want to navigate to
// createStackNavigator return React Component
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

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    // We can return navigator, bc it's a React Component.
    // It will go to this stack. It also keeps its state when we switch navigators!
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        // This is straightforward method for adding an icon to navigation tab!
        // We dynamically retrieve tintColor!
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name='ios-restaurant'
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        // This is straightforward method for adding an icon to navigation tab!
        tabBarIcon: (tabInfo) => {
          return (
            // We dynamically retrieve tintColor!
            <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarLabel: 'Favorites!',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

// We use return react component (createAppContainer)
// We return MealsFavTabNavigator beacouse MealsNavigator is nested inside it.
// This is how we can combine navigators
export default createAppContainer(MealsFavTabNavigator);
