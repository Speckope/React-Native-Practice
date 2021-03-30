import React from 'react';
import {
  ButtonProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../constants/colors';

interface MainButtonProps {
  onPress: (...args: any[]) => any;
}

const MainButton: React.FC<MainButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans-regular',
    fontSize: 18,
  },
});

export default MainButton;
