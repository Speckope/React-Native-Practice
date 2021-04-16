import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  ImageBackground,
  TextStyle,
} from 'react-native';

interface MealItemProps {
  onSelectMeal: () => void;
  title: string;
  duration: number;
  complexity: string;
  affordability: string;
  image: string;
}

const MealItem: React.FC<MealItemProps> = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            {/* We wrap what we want above the image inside ImageBackgroud */}
            <ImageBackground source={{ uri: props.image }} style={styles.bgImg}>
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

interface Styles {
  mealRow: ViewStyle;
  mealItem: ViewStyle;
  mealHeader: ViewStyle;
  mealDetail: ViewStyle;
  bgImg: ViewStyle;
  title: TextStyle;
  titleContainer: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  mealRow: {
    flexDirection: 'row',
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  mealHeader: {
    height: '90%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bgImg: {
    // We have to set width & height bc it's an image from the web
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',

    textAlign: 'center',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});

export default MealItem;
