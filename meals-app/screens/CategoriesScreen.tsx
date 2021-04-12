import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';

interface CategoriesScreenProps {
  navigation: NavigationStackProp;
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ navigation }) => {
  const renderGridItem: (itemData: {
    item: Category;
  }) => React.ReactElement | null = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          console.log('UwU');
          navigation.navigate({ routeName: 'CategoryMeals' });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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

interface Styles {
  screen: ViewStyle;
  gridItem: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
