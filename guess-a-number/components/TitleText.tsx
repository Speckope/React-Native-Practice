import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface TitleTextProps {}

const TitleText: React.FC<TitleTextProps> = ({ children }) => {
  return <Text style={styles.body}>{children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans-bold',
  },
});

export default TitleText;
