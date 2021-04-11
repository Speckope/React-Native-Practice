import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';

interface FiltersScreenProps {}

const FiltersScreen: React.FC<FiltersScreenProps> = ({}) => {
  return (
    <View>
      <Text>Filters Screen</Text>
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

export default FiltersScreen;
