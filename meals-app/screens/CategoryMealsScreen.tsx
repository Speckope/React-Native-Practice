import React from 'react';
import { ListRenderItem } from 'react-native';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  FlatList,
} from 'react-native';
import {
  NavigationComponent,
  NavigationParams,
  NavigationRoute,
} from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

interface CategoryMealsScreenProps {}

const CategoryMealsScreen: NavigationComponent<
  StackNavigationOptions,
  StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
> = ({ navigation }: { navigation: NavigationStackProp }) => {
  // Extract category param..
  const catId = navigation.getParam('categoryId');
  // Get the category.
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  // Select Meals we want to display from category
  const displayedMeals = MEALS.filter(
    // Get the meals that have selected category id in its category array
    (meal) => meal.categoryIds.includes(catId)
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

// So we get acceess here to navigationData as well. This is same navigation prop we get on our screen
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  // We select category we are currently on
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory?.title,
  };
};

export default CategoryMealsScreen;
