import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Video from 'react-native-video';
import MediaPicker from './MediaPicker';
export default class PredictPage extends Component {

  constructor(props) {
    super(props)
  
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('/Users/Sakchai/Desktop/React-Native-Demo/src/bg.jpg')}
          style={styles.BG}>
          <MediaPicker></MediaPicker>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: "column",
  },
  
  BG: {
    flex: 1
  },
  
  TextStyle: {
    width: 500,
    color: '#fff',
    textAlign: 'center',
    fontSize: 40,
    marginTop: 10,
  }
});
