import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import DefaultStyles from '../constants/default-styles';

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
  onGameOver: (arg0: number) => void;
}

// COMPONENT
const GameScreen: React.FC<GameScreenProps> = ({ userChoice, onGameOver }) => {
  // We make initial call. Exclude number chosen.
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  const [rounds, setRounds] = useState(0);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  // These calues will survive rerender
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction: 'lower' | 'greater') => {
    // When compuner guessed number smaller than our choice and we choose direction lower.
    // It means lower is a wrong hint. Or opposite. So we check for incorrect hint.
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert('Untrue hint.', 'Please choose correct hint.', [
        { text: 'Okay', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      // We save number we guessed as current high. So we don't generate higher number
      // Refs have current value that is an actual value we store.
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    // Computer's guess
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // Increment Rounds
    setRounds((curRounds) => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          Lower
        </MainButton>
        <MainButton onPress={() => nextGuessHandler('greater')}>
          Greater
        </MainButton>
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
