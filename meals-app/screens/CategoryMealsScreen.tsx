import React from 'react';
import { Button, StyleSheet, Text, View, ViewStyle } from 'react-native';
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
import { CATEGORIES } from '../data/dummy-data';

interface CategoryMealsScreenProps {}

const CategoryMealsScreen: NavigationComponent<
  StackNavigationOptions,
  StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
> = ({ navigation }: { navigation: NavigationStackProp }) => {
  // We extract parameters!
  const catId = navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Text>{selectedCategory?.title}</Text>
      <Button
        title='Go to meals'
        onPress={() => {
          // This is main method we use to navigate
          // We can also do it like this: navigation.navigate('SomeIdentifier');
          // Also navigation.puish('MealDetail). With push we can go to the page we are already on!
          // We may use it when there is same screen with diffretn content. We may load the same screen with diffrent content, like
          // it would be used in dropbox when we load same screen with different folder/
          navigation.navigate({ routeName: 'MealDetail' });
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          // navigation.pop() pops of upmost screen no the stack (so the one we are on). This will make us go
          navigation.pop();
        }}
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
