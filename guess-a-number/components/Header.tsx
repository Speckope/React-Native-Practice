import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  // We can select things with this method based on what platform we use.
  // Here it would be selecting different style!
  // Platform.select({
  //   ios: styles.headerIOS
  //   android: styles.headerAndroid
  // })

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
  },
});

export default Header;
