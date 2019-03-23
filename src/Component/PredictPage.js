import React, { Component } from 'react';
import { StyleSheet, View  ,Text,ImageBackground } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Video from 'react-native-video';
import TestVideo from '/Users/Sakchai/Desktop/React-Native-Demo/src/5810451063.mp4';
export default class PredictPage extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 1
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    if (selectedIndex==0) {
      alert("Open Camera");
    }else if (selectedIndex==2) {
      alert("select in your device");

    }else if (selectedIndex==1) {
      alert("OK");
    }
  }
  
  render () {
    const buttons = ['Camera','OK','Select Video']
    const { selectedIndex } = this.state
  
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('/Users/Sakchai/Desktop/React-Native-Demo/src/bg.jpg')}
          style={styles.BG}>
      {/* <Video style={styles.backgroundVideo} source={{uri:'https://www.youtube.com/watch?v=-fKrdi4kzCM&list=PL5EZrhJbkDFzJ_CvBwFZ8NXW6pexoTqWa&index=5'}} resizeMode="cover">
       </Video> */}

      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 50}}

      />
      </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: "column",
  },
  backgroundVideo: {
    position: 'absolute',
    flex: 1,
  },
  BG: {
    flex: 1
  }
});
