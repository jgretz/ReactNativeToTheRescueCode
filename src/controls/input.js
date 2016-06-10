import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export const Input = () =>
  <TextInput style={styles.input} />;
