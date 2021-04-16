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
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

interface CategoryMealsScreenProps {}

const CategoryMealsScreen: NavigationComponent<
  StackNavigationOptions,
  StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
> = ({ navigation }: { navigation: NavigationStackProp }) => {
  // renderItem function
  const renderMealItem: ListRenderItem<Meal> = (data) => {
    return (
      <MealItem
        duration={data.item.duration}
        title={data.item.title}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: 'MealDetail',
            // We forward the parameter so we will be able to move to selected meal
            params: {
              mealId: data.item.id,
            },
          });
        }}
        complexity={data.item.complexity}
        affordability={data.item.affordability}
        image={data.item.imageUrl}
      />
    );
  };

  // We extract parameters!
  const catId = navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: '90%' }}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

interface Styles {
  screen: ViewStyle;
}

// So we get acceess here to navigationData as well. This is same navigation prop we get on our screen
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  // We select category we are currently on
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory?.title,
  };
};

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealsScreen;
