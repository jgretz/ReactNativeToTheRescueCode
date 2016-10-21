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
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Input />
        <Button>Add</Button>
        <ItemList items={this.state.items} />
      </View>
    );
  }
}
