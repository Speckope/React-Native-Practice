import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [guessRounds, setGuessRounds] = useState(0);

  const newGameHandler = () => {
    // Setting these parameters will take us back to StartGameScreen
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds: number) => {
    setGuessRounds(numOfRounds);
  };

  // Render selected screen
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen onGameOver={gameOverHandler} userChoice={userNumber} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber as number}
        onRestart={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title='PonPon a Pon' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // COLUMN IS DEFAULT VALUE IN RN
    flexDirection: 'column',
  },
});
