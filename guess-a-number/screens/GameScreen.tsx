import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween: (
  min: number,
  max: number,
  exclude: number
) => number = (min, max, exclude) => {
  // integer is rounded up
  min = Math.ceil(min);
  // rounded down
  max = Math.floor(max);
  // Random number between min and max
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    // If our generated number is our excluded number, we return another number recursively
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

interface GameScreenProps {
  userChoice: number;
}

const GameScreen: React.FC<GameScreenProps> = ({ userChoice }) => {
  // We make initial call. Exclude number chosen.
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='Lower' onPress={() => {}} />
        <Button title='Greater' onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
