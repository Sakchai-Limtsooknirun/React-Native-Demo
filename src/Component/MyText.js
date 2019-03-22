import React, { Component } from 'react';
import { StyleSheet, Text, View, Button ,ImageBackground } from 'react-native';

export default class MyText extends Component {
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
  
    clicked () {
      this.props.act()
    }
    
    render() {
      let display = this.state.isVisible ? this.props.message : " ";
      return (
        <View style={styles.container}>
          
          <Text style={styles.TextStyle}>
            {display}
          </Text>
          <Button title="START" onPress={this.clicked.bind(this)}></Button>
          
        </View>
      );

      
    }
    
}
const styles = StyleSheet.create({

  TextStyle: {
    width: 300,
    color: '#0250a3',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null,
   height: null,
  }
});


