import React from 'react';
import { StyleSheet, View, Text, ViewStyle, Button } from 'react-native';
import {
  NavigationComponent,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackProp } from 'react-navigation-stack';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

interface MealDetailScreenProps {
  navigation: NavigationStackProp;
}

const MealDetailScreen: NavigationComponent<
  StackNavigationOptions,
  StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
> = ({ navigation }: { navigation: NavigationStackProp }) => {
  const mealId = navigation.getParam('mealId');

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
      <Button
        title='Go Back to Categories'
        onPress={() => {
          navigation.popToTop(); // poToTop takes to the root screen. Pops off top screens.
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal?.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => {
            console.log('Favorite!!!');
          }}
        />
      </HeaderButtons>
    ),
  };
};

interface Styles {
  screen: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealDetailScreen;
