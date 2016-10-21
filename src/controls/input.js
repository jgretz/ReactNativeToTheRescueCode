import React, { PropTypes } from 'react';
import { StyleSheet, TextInput, Platform } from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,

    ...Platform.select({
      android: {
        width: 300,
      },
    }),
  },
});

export const Input = props =>
  <TextInput style={styles.input} value={props.text} onChangeText={props.onChangeText} />;

Input.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};
