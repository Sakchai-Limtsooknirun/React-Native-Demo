/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MyText from './MyText' ;
export default class TitlePage extends Component {

  render() {
    return (
      <View style={styles.DemoText}>
        <MyText message="Welcome to LipU" interval={500}></MyText>
        
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
  DemoText: {
    flex: 1, flexDirection: "column",
    backgroundColor: "#00B01E",
    alignItems: "center",
    justifyContent: 'center'
  }
});
