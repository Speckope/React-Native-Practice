import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  // Apifor interacting with a keyboard!
  Keyboard,
  Alert,
} from 'react-native';
import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';

import Colors from '../constants/colors';

interface StartGameScreenProps {
  onStartGame: (arg0: number) => void;
}

const StartGameScreen: React.FC<StartGameScreenProps> = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number>();

  const numberInputHandler = (inputText: string) => {
    // We replace any non-number value with empry string
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // We show an alert! We have 3 predetermined styled of an alert button.
      Alert.alert('Invalid number!', 'Pick a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      // Return will finish function execution and not execute setStates below
      return;
    }

    setConfirmed(true);
    setEnteredValue('');
    // We can use entered Value, beacouse state will be changed only after a re-render cycle!
    // Though all these states will be updated in one re-render cycle(they will be batched together)
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => onStartGame(selectedNumber as number)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>PikuPiku</Text>
        <Card style={styles.inputContainer}>
          <BodyText> Select a Number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='RESET'
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='CONFIRM'
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'opan-sans',
  },
});

export default StartGameScreen;
