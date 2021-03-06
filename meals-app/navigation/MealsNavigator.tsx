import React from 'react';
import { Platform, Text } from 'react-native';
import {
  createAppContainer,
  CreateNavigatorConfig,
  NavigationParams,
  NavigationRoute,
  NavigationRouteConfigMap,
  NavigationStackRouterConfig,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  NavigationBottomTabOptions,
  NavigationTabProp,
} from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
  StackNavigationConfig,
  StackNavigationOptions,
  StackNavigationProp,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';

// Config
const defaultStackNavOptions: CreateNavigatorConfig<
  StackNavigationConfig,
  NavigationStackRouterConfig,
  StackNavigationOptions,
  StackNavigationProp
> = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    // Targets title (screen name)
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
    // Targets screen to go back to
    headerBackTitleStyle: {
      fontFamily: 'open-sans',
    },
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

// Configuration fot BottonTab
// Got it right!! :D we extract it so we can use it in MaterialTab
const tabConfig: NavigationRouteConfigMap<
  NavigationBottomTabOptions,
  NavigationTabProp<NavigationRoute<NavigationParams>, any>,
  unknown
> = {
  // We can return navigator, bc it's a React Component.
  // It will go to this stack. It also keeps its state when we switch navigators!
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      // This is straightforward method for adding an icon to navigation tab!
      // We dynamically retrieve tintColor!

      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        );
      },
      // We can return compoennet as a label!
      tabBarLabel: (
        <Text
          style={{
            fontFamily: 'open-sans-regular',
          }}
        >
          Meals
        </Text>
      ),
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      // This is straightforward method for adding an icon to navigation tab!
      tabBarIcon: (tabInfo) => {
        return (
          // We dynamically retrieve tintColor!
          <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarLabel: (
        <Text
          style={{
            fontFamily: 'open-sans-regular',
          }}
        >
          Favorites
        </Text>
      ),
    },
  },
};

// We use material design tab navigator for android!
const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans-regular',
          },
          activeTintColor: Colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  defaultStackNavOptions
);

// We start with drawer navigator
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerLabel: 'Filters',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
  }
);

export default createAppContainer(MainNavigator);
