import React from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { NavigationParams, NavigationRoute } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';
import { useAppSelector } from '../App';
import Meal from '../models/meal';
import MealItem from './MealItem';

interface MealListProps {
  listData: Meal[];
  navigation: NavigationStackProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}

const MealList: React.FC<MealListProps> = ({ listData, navigation }) => {
  const favoriteMeals = useAppSelector((state) => state.meals.favoriteMeals);

  // renderItem function
  const renderMealItem: ListRenderItem<Meal> = (data) => {
    const isFavorite = favoriteMeals.some((meal) => meal.id === data.item.id);

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
              mealTitle: data.item.title,
              isFav: isFavorite,
            },
          });
        }}
        complexity={data.item.complexity}
        affordability={data.item.affordability}
        image={data.item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: '90%' }}
        data={listData}
        renderItem={renderMealItem}
      />
    </View>
  );
};

interface Styles {
  list: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealList;
