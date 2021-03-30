import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface BodyTextProps {
  style?: TextStyle;
}

const BodyText: React.FC<BodyTextProps> = ({ children, style }) => {
  return <Text style={{ ...styles.body, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans-regular',
  },
});

export default BodyText;
