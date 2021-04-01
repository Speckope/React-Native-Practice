import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
// import DefaultStyles from '../constants/default-styles';
import { Ionicons } from '@expo/vector-icons';
import BodyText from '../components/BodyText';

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

// We have to change, so we can use renderItem in FlatList. It expects itemData
const renderListItem = (
  listLength: number,
  // This is the shape of data that will be passed through renderItem
  itemData: { index: number; item: number }
) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

interface GameScreenProps {
  userChoice: number;
  onGameOver: (arg0: number) => void;
}

// COMPONENT
const GameScreen: React.FC<GameScreenProps> = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);

  // We make initial call. Exclude number chosen.
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [pastGuesses, setPastGuesses] = useState<number[]>([initialGuess]);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
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
      // This will make it so there are no two same guesses
      currentLow.current = currentGuess + 1;
    }

    // Computer's guess
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // Increment Rounds
    // setRounds((curRounds) => curRounds + 1);
    // using currentGuess wouldn't workm bc React haven't updated the state and re-built the component yet.
    setPastGuesses((curPastGuesses) => [nextNumber, ...curPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name='md-remove' size={24} color='white' />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler('greater')}>
          <Ionicons name='md-add' size={24} color='white' />
        </MainButton>
        {/* For FlatList and ScrollView we style it with contentContainerStyle */}
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          // We have to convernt, bc key has to be a string
          keyExtractor={(item) => item.toString()}
          data={pastGuesses}
          // We bind argument to it, bc renderItem passes only one argument when rendering
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
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
    width: 400,
    maxWidth: '90%',
  },
  listContainer: {
    flex: 1,
    width: '60%',
  },
  list: {
    // Says the container to grow as much as possible, but keeps contaienr behaviour the same. It's more flexible than flex: 1
    // This will make our scroll view work corectly.
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  listItem: {
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default GameScreen;
