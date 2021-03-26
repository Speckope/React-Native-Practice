import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onRestart: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({
  roundsNumber,
  userNumber,
  onRestart,
}) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Rounds: {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title='New Game' onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
