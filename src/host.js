import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

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
    color: '#fff',
    marginBottom: 5,
  },
});

export default class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: ['#ff0000', '#00ff00', '#0000ff'],
      bgColorIndex: 0,
    };

    setInterval(() => {
      let newIndex = this.state.bgColorIndex + 1;
      if (newIndex >= this.state.colors.length) {
        newIndex = 0;
      }

      this.setState({ bgColorIndex: newIndex });
    }, 5000);
  }

  renderGetStartedText() {
    switch (Platform.OS) {
      case 'ios':
        return 'IOS is cool';

      case 'android':
        return 'Android is cool';

      default:
        return 'Who are you?';
    }
  }

  render() {
    const bgColor = { backgroundColor: this.state.colors[this.state.bgColorIndex] };

    return (
      <View style={[styles.container, bgColor]}>
        <Text style={styles.instructions}>
          {this.renderGetStartedText()}
        </Text>
      </View>
    );
  }
}
