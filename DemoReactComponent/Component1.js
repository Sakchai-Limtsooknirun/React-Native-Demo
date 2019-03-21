/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class Component1 extends Component {
  
  render(){
    return(
      <View style={styles.demotext}> 
      <MyText name="jay" message="123"></MyText>
      </View>
    );
  }

}
class MyText extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Text style={{ textAlign: 'center' , color: "#F5FCFF"}}>KUY ali 
      {this.props.name} + {this.props.message}</Text>
      //<Text style={{ textAlign: 'center' }}>a lai wa</Text>
      
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
  demotext:{ 
    flex:1,flexDirection: "column",
    backgroundColor: "#FF0000",
    alignItems: "center",
    justifyContent: 'center' 
  }
});
