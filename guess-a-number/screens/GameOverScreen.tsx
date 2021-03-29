import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

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
      <TitleText>Game Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          resizeMode='cover'
          style={styles.image}
          // source={require('../assets/success.png')}

          // There is also a fade in effect while loading it! We can control it with fadeDuration
          // fadeDuration={500}

          source={{
            // URI images, we always have to set width & height in styles, bc RN doesn't know it's size beforehand
            uri:
              'https://image.freepik.com/free-vector/space-shuttle-taking-off-with-planet-mountain-space-cartoon-icon-illustration_138676-2883.jpg',
          }}
        />
      </View>
      <BodyText>Rounds: {roundsNumber}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
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
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: 'hidden',
    marginVertical: 30,
  },
});

export default GameOverScreen;
