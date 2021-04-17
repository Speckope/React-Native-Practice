import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import {
  NavigationComponent,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';

interface FiltersScreenProps {}

const FiltersScreen: NavigationComponent<
  StackNavigationOptions,
  StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
> = ({ navigation }: { navigation: NavigationStackProp }) => {
  return (
    <View>
      <Text>Filters Screen</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = {
  headerTitle: 'Filter Meals',
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

export default FiltersScreen;
