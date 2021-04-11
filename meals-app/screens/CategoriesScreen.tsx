import React from 'react';
import { StyleSheet, View, Text, ViewStyle, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface CategoriesScreenProps {
  navigation: NavigationStackProp;
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title='Go to meals'
        onPress={() => {
          // This is main method we use to navigate
          // We can also do it like this: navigation.navigate('SomeIdentifier');
          navigation.navigate({ routeName: 'CategoryMeals' });
          // navigation.replace('CategoryMeals'); // replace will replace current stack screen with another
          // replace won't push another screen on top, but replace current!
          // There is also no animation and no back button, beacouse stack is empty.
          // Use it e.g. on login
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

export default CategoriesScreen;
