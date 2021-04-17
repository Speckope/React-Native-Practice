import React from 'react';
import { ListRenderItem } from 'react-native';
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
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackProp } from 'react-navigation-stack';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from 'react-navigation-stack/lib/typescript/src/vendor/types';
import CategoryGridTile from '../components/CategoryGridTile';
import CustomHeaderButton from '../components/HeaderButton';
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
  // renderItem function
  const renderGridItem: ListRenderItem<Category> = (data) => {
    return (
      <CategoryGridTile
        title={data.item.title}
        color={data.item.color}
        onSelect={() => {
          navigation.navigate({
            routeName: 'CategoryMeals',
            // We are forwarding id to new scren we load. We will then use this id.
            params: {
              categoryId: data.item.id,
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

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
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

// import React from 'react';
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   ViewStyle,
// } from 'react-native';
// import {
//   NavigationComponent,
//   NavigationParams,
//   NavigationRoute,
// } from 'react-navigation';
// import { NavigationStackProp } from 'react-navigation-stack';
// import {
//   StackNavigationOptions,
//   StackNavigationProp,
// } from 'react-navigation-stack/lib/typescript/src/vendor/types';
// import CategoryGridTile from '../components/CategoryGridTile';
// import { CATEGORIES } from '../data/dummy-data';
// import Category from '../models/category';

// interface CategoriesScreenProps {
//   // navigation: NavigationStackProp;
// }

// // This is strange solution. Idk else. It's v4 anyway...
// const CategoriesScreen: NavigationComponent<
//   StackNavigationOptions,
//   StackNavigationProp<NavigationRoute<NavigationParams>, NavigationParams>
// > = ({ navigation }: { navigation: NavigationStackProp }) => {
//   // renderItem function
//   const renderGridItem: (itemData: {
//     item: Category;
//   }) => React.ReactElement | null = (itemData) => {
//     return (
//       <CategoryGridTile
//         title={itemData.item.title}
//         color={itemData.item.color}
//         onSelect={() => {
//           navigation.navigate({
//             routeName: 'CategoryMeals',
//             // We are forwarding id to new scren we load. We will then use this id.
//             params: {
//               categoryId: itemData.item.id,
//             },
//           });
//         }}
//       />
//     );
//   };

//   return (
//     <FlatList
//       // We don't need keyExtractor here, it accepts key as id as well.
//       // keyExtractor={(item) => item.id}
//       numColumns={2}
//       data={CATEGORIES}
//       renderItem={renderGridItem}
//     />
//   );
// };

// CategoriesScreen.navigationOptions = {
//   headerTitle: 'Meal Categories',
// };

// interface Styles {
//   screen: ViewStyle;
// }

// const styles = StyleSheet.create<Styles>({
//   screen: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default CategoriesScreen;
