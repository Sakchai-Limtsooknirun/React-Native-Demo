import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Video from 'react-native-video';
var ImagePicker = require('react-native-image-picker');
import { ButtonGroup } from 'react-native-elements';

export default class MediaPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      selectedIndex: null,
    };
    this.updateIndex = this.updateIndex.bind(this)
  }

  launchLibrary = () => {
    var options = {
      mediaType: 'video',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled video picker');

      } else if (response.error) {
        console.log('VideoPicker Error: ', response.error);

      } else {
        let source = response;
        this.setState({
          filePath: source,
        });
      }
    });
  };

  launchCamera = () => {
    var options = {
      mediaType: 'video',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled video picker');

      } else if (response.error) {
        console.log('VideoPicker Error: ', response.error);

      } else {
        let source = response;
        this.setState({
          filePath: source,
        });
      }
    });
  };

  updateIndex(selectedIndex) {
    this.setState({
      selectedIndex
    });
    if (selectedIndex == 0) {
      this.launchCamera()
    } else if (selectedIndex == 1) {
      this.launchLibrary()
    }
  }

  renderVideo() {
    return (
      <Video
        source={require('../Image/5810451063.mp4')}
        style={styles.videoComponent}
        muted={true}
        repeat={true}
        resizeMode={"cover"}
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
      />
    )
  }
  render() {
    const buttons = ['CAMERA', 'CHOOSE YOUR VIDEO']
    const { selectedIndex } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.container}>
        <Text></Text>
          {/* <Video
        source={require('/storage/emulated/0/DCIM/Camera/VID_20190324_015352')}
        style={{ width: 250, height: 250 }}
        muted={true}
        repeat={true}
        resizeMode={"cover"}
        volume={1.0}
        rate={1.0}
        ignoreSilentSwitch={"obey"}
        /> */}
          
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={styles.videoComponent}
          />
          <Text style={styles.TextStyle}>VIDEO TO PREDICTING</Text>
          <Text></Text>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 50 }}

          />
          <Text style={{
            alignItems: 'center', justifyContent: "center",
            alignSelf: 'center'
          }}>URI = {this.state.filePath.uri}</Text>
          <Text></Text>
          <Text style={{
            justifyContent: "center",
            alignItems: 'center',
            alignSelf: 'center'
          }}>PATH = {this.state.filePath.path}</Text>


        </View>
      </View>
    );
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
  },
  videoComponent: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center'
  },
  TextStyle: {
    width: 500,
    color: '#fff',
    textAlign: 'center',
    fontSize: 40,
    marginTop: 10,
  }
});