import React from 'react';
import {
  ButtonProps,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../constants/colors';

interface MainButtonProps {
  onPress: (...args: any[]) => any;
}

const MainButton: React.FC<MainButtonProps> = ({ children, onPress }) => {
  let ButtonComponent: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    // We add button countainer so a ripple effect on android works correctly
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </ButtonComponent>
    </View>
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
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default MainButton;
