import React from 'react';
import { Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { Constants } from 'expo';

class CounterButton extends React.Component {
  static defaultProps = {
    counter: -1,
  };

  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter,
    };
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Text>{this.state.counter}</Text>
        <Button title={'click me!'} onPress={this.clickHandler}/>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.text}>Apple</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Banana</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Cherries</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Damson plum</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>...</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },

  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: 'orange',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});