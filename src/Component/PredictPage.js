import React, { Component } from 'react';
import { StyleSheet, View  ,Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export default class PredictPage extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render () {
    const buttons = ['Camera', 'Select Video']
    const { selectedIndex } = this.state
  
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 100}}
      />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  DemoText: {
    flex: 1, flexDirection: "column",
    backgroundColor: "#00B01E",
    alignItems: "center",
    justifyContent: 'center'
  }
});
