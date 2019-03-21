/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Component2 extends Component {

  render() {
    return (
      <View style={styles.DemoText}>
        <MyText message="Welcome to LipU" interval={500}></MyText>
        
      </View>
    );
  }

}
class MyText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true
    }
    setInterval(() => {

      this.setState(oldState => {
        return {
          isVisible: !oldState.isVisible

        }
      })
    }, this.props.interval);
  }

  clicked = () =>{
    alert("thank")
  }

  render() {
    let display = this.state.isVisible ? this.props.message : "                               ";
    return (
      <View>
        <Text style={{ fontSize: 50, textAlign: 'center', color: "#F5FCFF" }}>
          {display}
        </Text>
        <Button title="START" onPress={() => this.clicked()}></Button>
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
