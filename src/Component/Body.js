/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity ,StyleSheet, View, Text ,Image} from 'react-native';
import MyText from './MyText' ;

import {Actions} from 'react-native-router-flux';

export default class TitlePage extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        
        <MyText act={goLike} message="Welcome to LipU" interval={500}></MyText>
        
      </View>
    );
  }
  clicked = () =>{
    alert("thank2")
  }
  

}
const goLike = () => {
  Actions.Menu()
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
  
});
