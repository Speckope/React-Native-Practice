import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';

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
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          {/* We can nest Text components inside each another */}
          Rounds: <Text style={styles.highlight}>{roundsNumber}</Text>
        </BodyText>
        <BodyText style={styles.resultText2}>
          Number was: <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    overflow: 'hidden',
    // Sets to 5% ofscreen height
    marginVertical: Dimensions.get('window').height / 30,
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    width: '80%',
    height: 50,
    marginVertical: Dimensions.get('window').height / 60,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultText: {
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
  resultText2: {
    fontSize: 15,
  },
});

export default GameOverScreen;
