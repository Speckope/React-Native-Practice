import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';

interface FavoritesScreenProps {}

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({}) => {
  return (
    <View>
      <Text>Favorites Screen</Text>
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

export default FavoritesScreen;
