import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    margin: 20,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
  },
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

export default class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { title: 'Talk at techfest' },
        { title: 'Learn some stuff' },
      ],
    };
  }

  renderItems() {
    return this.state.items.map((item, index) =>
      <Text key={index}>
        {item.title}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <TouchableHighlight style={styles.button}>
          <View style={styles.contentView}>
            <Text style={styles.buttonText}>
              Add
            </Text>
          </View>
        </TouchableHighlight>
        {this.renderItems()}
      </View>
    );
  }
}
