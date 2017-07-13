import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e47e31',
    paddingTop: 13,
    paddingLeft: 10,
    paddingRight: 10,
  },
  brand: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default class Header extends React.Component {
  render(){
    return (
      <View style={styles.header}>
        <Text style={styles.brand}>IIDO</Text>
        <Button color="white" title="Add" onPress={Actions.add}/>
      </View>
    )
  }
}
