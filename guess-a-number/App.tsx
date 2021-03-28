import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// const fetchFonts = () => {
//   // This method loads fonts as an object with key as name of the font we want to use and value as a font
//   Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//   });
// };

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [guessRounds, setGuessRounds] = useState(0);
  // const [dataLoaded, setDataLoaded] = useState(false);

  let [fontsLoaded, err] = useFonts({
    'open-sans-regular': require('./assets/fonts/open-sans-regular.ttf'),
    'open-sans-bold': require('./assets/fonts/open-sans-bold.ttf'),
  });

  if (!fontsLoaded) {
    console.log('loading');
    return <AppLoading />;
  }

  if (err) {
    console.log(err);
  }

  // if (!dataLoaded) {
  //   // AppLoading component will load whatever we want! Here - fonts.
  //   // We have to pass a function that returns a promise into startAsync.
  //   // When promise resolves, it calls onFinish!
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log('Error loading:', err)}
  //     />
  //   );
  // }

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
