/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View , Button ,Text } from 'react-native';
import LikeButton from './LikeButton' ;
export default class LinkPage extends Component {

constructor(props){
    super(props)
    this.state ={ count: 0 }
    
    
}

sum = () => { //แบบ2
    
  this.setState((prevState) =>{
        return{
          count: prevState.count+1
        }
    })
}


  render() {
    return (
    <View style={styles.DemoText}>
    <Text>{this.state.count}</Text>
    <LikeButton sumClick={this.sum}></LikeButton>
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
