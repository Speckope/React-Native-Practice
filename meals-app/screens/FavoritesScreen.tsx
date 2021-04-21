import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import {
  NavigationComponent,
  NavigationParams,
  NavigationRoute,
} from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackProp } from 'react-navigation-stack';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { useAppSelector } from '../App';
import DefaultText from '../components/DefaultText';
import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

// interface FavoritesScreenProps {}

const FavoritesScreen: NavigationComponent<
  StackNavigationOptions,
  StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
> = ({ navigation }: { navigation: NavigationStackProp }) => {
  const favMeals = useAppSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No Favorite Meals</DefaultText>
      </View>
    );
  }

  return <MealList navigation={navigation} listData={favMeals} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() =>
            navData.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
      </HeaderButtons>
    ),
  };
};

interface Styles {
  content: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
