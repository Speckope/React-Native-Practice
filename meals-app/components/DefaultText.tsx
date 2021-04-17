import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface DefaultTextProps {}

const DefaultText: React.FC<DefaultTextProps> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

interface Styles {
  text: TextStyle;
}
const styles = StyleSheet.create<Styles>({
  text: {
    fontFamily: 'open-sans-regular',
  },
});

export default DefaultText;
