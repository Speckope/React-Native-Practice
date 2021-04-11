import React from 'react';
import { StyleSheet, View, Text, ViewStyle, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface MealDetailScreenProps {
  navigation: NavigationStackProp;
}

const MealDetailScreen: React.FC<MealDetailScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button
        title='Go Back to Categories'
        onPress={() => {
          navigation.popToTop(); // poToTop takes to the root screen. Pops off top screens.
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

export default MealDetailScreen;
