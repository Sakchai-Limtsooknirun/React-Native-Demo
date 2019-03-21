/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Button
}from 'react-native';


export class Component4 extends Component {
  constructor(props){
    super(props)
    this.state={text : " "};
  }

  clicked(){
    alert("thank")
  }
  render(){
    return(
      <View style={styles.demotext}> 
      <MyText name="jay" message="123"></MyText>
      <Button title="Press" onPress={()=>this.clicked}>
      
      </Button>
      
      
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
  },
  TextInput:{
    height:40,

  }
});
