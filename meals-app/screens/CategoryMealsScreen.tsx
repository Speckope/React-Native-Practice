import React from 'react';
import { StyleSheet, View, Text, ViewStyle, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface CategoryMealsScreenProps {
  navigation: NavigationStackProp;
}

const CategoryMealsScreen: React.FC<CategoryMealsScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
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

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealsScreen;
