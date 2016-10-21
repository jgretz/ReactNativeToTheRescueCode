import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, ItemList } from './controls';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { title: 'Talk at DevUp' },
        { title: 'Learn some stuff' },
      ],
      inputText: '',
    };
  }

  onInputChangeText = (inputText) => {
    this.setState({ inputText });
  }

  onButtonPress = () => {
    this.setState({
      items: [
        ...this.state.items,
        { title: this.state.inputText },
      ],
      inputText: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Input text={this.state.inputText} onChangeText={this.onInputChangeText} />
        <Button onPress={this.onButtonPress}>Add</Button>
        <ItemList items={this.state.items} />
      </View>
    );
  }
}
