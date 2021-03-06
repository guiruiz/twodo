import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87bb7d',
  },
  brand: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff'
  }
});

export default class Main extends React.Component {

  componentDidMount(){
    this.redirectDelay = setTimeout(
      () => Actions.app(),
      1000
    );
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.brand}>
          IIDO
        </Text>
      </View>
    )
  }
}
