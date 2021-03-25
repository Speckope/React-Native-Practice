import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Modal } from 'react-native';

interface GoalInputProps {
  onAddGoal: (goalTitle: string) => void;
  visible: boolean;
  onCancel: () => void;
}

const GoalInput: React.FC<GoalInputProps> = ({
  onAddGoal,
  visible,
  onCancel,
}) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (text: string) => {
    setEnteredGoal(text);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoal}
          placeholder='Input'
          style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title='ADD' />
          </View>
        </View>
        {/* 2nd way of doing this. We bind this to this(meaning this in GoalInput function) and pass argument */}
        {/* <Button onPress={onAddGoal.bind(this, enteredGoal)} title='ADD' /> */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // It will take as much place as is avilable. Default View behaviour is that is takes its children space.
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
