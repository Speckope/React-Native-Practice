import React from 'react';
import { StyleSheet, TextInput, TextInputProps, TextStyle } from 'react-native';

interface InputProps extends TextInputProps {
  // To know style, you can hovel over TextInput style. There you will see what it wants!
  style?: TextStyle;
}

const Input: React.FC<InputProps> = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

// Now on input only relevant styles will be accepted!
interface Styles {
  input: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
