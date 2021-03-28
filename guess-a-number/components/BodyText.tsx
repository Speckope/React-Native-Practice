import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface BodyTextProps {}

const BodyText: React.FC<BodyTextProps> = ({ children }) => {
  return <Text style={styles.body}>{children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans-regular',
  },
});

export default BodyText;
