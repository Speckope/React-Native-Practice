import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
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
import { useAppSelector } from '../App';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';

// interface CategoryMealsScreenProps {}

const CategoryMealsScreen: NavigationComponent<
  StackNavigationOptions,
  StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
> = ({ navigation }: { navigation: NavigationStackProp }) => {
  const avilableMeals = useAppSelector((state) => state.meals.filteredMeals);

  // Extract category param..
  const catId = navigation.getParam('categoryId');
  // Select Meals we want to display from category
  const displayedMeals = avilableMeals.filter(
    // Get the meals that have selected category id in its category array
    (meal) => meal.categoryIds.includes(catId)
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No Meals Found</DefaultText>
      </View>
    );
  }

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

interface Styles {
  content: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  content: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
