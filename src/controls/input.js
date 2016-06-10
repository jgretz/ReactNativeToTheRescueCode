import React, { PropTypes } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

export const Input = props =>
  <TextInput style={styles.input} value={props.text} onChangeText={props.onChangeText} />;

Input.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};
