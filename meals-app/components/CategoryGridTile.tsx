import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';

interface CategoryGridTileProps {
  title: string;
  color: string;
  onSelect: () => void;
}

const CategoryGridTile: React.FC<CategoryGridTileProps> = (props) => {
  // let TouchableCmp:
  //   | typeof TouchableNativeFeedback
  //   | typeof TouchableOpacity = TouchableOpacity;
  let TouchableCmp: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        style={{
          flex: 1,
        }}
        onPress={props.onSelect}
      >
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

interface Styles {
  gridItem: ViewStyle;
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    // Shadow propeties only affect iOS
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    // elevation is for setting shadow on android
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    // on Android Light & Lovely was on the right, bc it was broken into 2 lines.
    // This assures it will be on the right
    textAlign: 'right',
  },
});

export default CategoryGridTile;
