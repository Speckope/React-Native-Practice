import React from 'react';
import { Text, View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '../constants/colors';

interface NumberContainerProps {}

const NumberContainer: React.FC<NumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  number: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    borderWidth: 2,
    borderColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: colors.accent,
    fontSize: 22,
  },
});

export default NumberContainer;
