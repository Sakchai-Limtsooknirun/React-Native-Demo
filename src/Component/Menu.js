/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity ,StyleSheet, View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class sun extends Component {
  
  render() {
    return (
      <View style={styles.DemoText}>
       
       <Text style={styles.pickerTextStyle}>MENU</Text>
       
      </View>
    );
  }
  clicked = () =>{
    alert("thank2")
  }
  goLike = () => {
    Actions.body()
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
    
    
  },
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
});
