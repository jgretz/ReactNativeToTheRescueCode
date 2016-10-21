import React, { PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    borderRadius: 22.5,
    width: 220,
    height: 45,
    marginBottom: 12,
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
  },
});

export const Button = props =>
  <TouchableHighlight style={styles.button} onPress={props.onPress}>
    <View style={styles.contentView}>
      <Text style={styles.buttonText}>
        {props.children}
      </Text>
    </View>
  </TouchableHighlight>;

Button.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
};
