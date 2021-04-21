import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

interface CustomHeaderButtonProps {}

const CustomHeaderButton: React.FC<CustomHeaderButtonProps> = (props) => {
  return (
    <HeaderButton
      {...props}
      title='icon'
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButton;
