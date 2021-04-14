import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
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
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';

interface CategoriesScreenProps {
  // navigation: NavigationStackProp;
}

// This is strange solution. Idk else. It's v4 anyway...
const CategoriesScreen: NavigationComponent<
  StackNavigationOptions,
  StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
> = ({ navigation }: { navigation: NavigationStackProp }) => {
  const renderGridItem: (itemData: {
    item: Category;
  }) => React.ReactElement | null = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate({
            routeName: 'CategoryMeals',
            // We are forwarding id to new scren we load. We will then use this id.
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      // We don't need keyExtractor here, it accepts key as id as well.
      // keyExtractor={(item) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
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
