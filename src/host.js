import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Platform } from 'react-native';

export default class ToDo extends Component {
  renderGetStartedText() {
    switch (Platform.OS) {
      case "ios":
        return "IOS";

      case "android":
        return "Android";

      default:
        return "Who are you?"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          {this.renderGetStartedText()}
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
