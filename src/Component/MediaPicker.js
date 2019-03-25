import React from 'react';
import { StyleSheet, Text, View, Button, Image, Platform } from 'react-native';
import Video from 'react-native-video';
var ImagePicker = require('react-native-image-picker');
import { ButtonGroup } from 'react-native-elements';
import * as firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob'
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob
var config = {
  apiKey: "AIzaSyDt8bI_KguqGSwrCi_cXsUbZQ6Ia2fgRzE",
  authDomain: "test-564b4.firebaseapp.com",
  databaseURL: "https://test-564b4.firebaseio.com",
  projectId: "test-564b4",
  storageBucket: "test-564b4.appspot.com",
  messagingSenderId: "71233526004"
};
firebase.initializeApp(config);

export default class MediaPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      selectedIndex: null,
      loading: 'waiting'
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
//   chooseFile = () => {
//     const options = {
//       title: 'Video Picker', 
//       mediaType: 'video', 
//       storageOptions:{
//         skipBackup:true,
//         path:'images'
//       }
// };
//     ImagePicker.showImagePicker(options, response => {
//       console.log('Response = ', response);
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//         alert('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//         alert('ImagePicker Error: ' + response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//         alert(response.customButton);
//       } else {
//         let source = response;
//         this.setState({
//           filePath: source,
//         });
//       }
//     });
//   };

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

  upload(mime = 'application/octet-stream'){
    console.log(this.state.filePath.path);
    var uri = this.state.filePath.path;
    var fileName = uri.match(/\w+(?:\.\w+)*$/);
    console.log(fileName);
    fileName = fileName[0];
    
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    let uploadBlob = null

    const imageRef = firebase.storage().ref('videos').child(fileName)
    fs.readFile(uploadUri, 'base64')
         .then(data => {
          console.log("1")
            return Blob.build(data, { type: `${mime};BASE64` });
         })
         .then(blob => {
            uploadBlob = blob;
           console.log("2")
            console.log(blob);
            return imageRef.put(blob, { contentType: mime});
         })
         .then(() => {
          this.setState({
            loading: 'success' 
          });
            uploadBlob.close()
            return imageRef.getDownloadURL();
         })
         .then(url => {
            console.log(url);
         })
         .catch(error => {
            console.log(error)
         })
  }

  updateIndex(selectedIndex) {
    this.setState({
      selectedIndex
    });
    if (selectedIndex == 0) {
      this.launchCamera()
    } else if (selectedIndex == 1) {
      this.launchLibrary()
    }else if (selectedIndex == 2) {
      this.upload()
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
    const buttons = ['CAMERA', 'CHOOSE YOUR VIDEO','UPLOAD']
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
          <Text style={{
            justifyContent: "center",
            alignItems: 'center',
            alignSelf: 'center'
          }}>Loading : +{this.state.loading}</Text>

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