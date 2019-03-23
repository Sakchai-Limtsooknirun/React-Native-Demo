import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class sun extends Component {

  render() {
    return (
      <ScrollView style={styles.DemoText}>
        <ImageBackground
          source={require('/Users/Sakchai/Desktop/React-Native-Demo/src/bg.jpg')}
          style={styles.BG}>
          <Card title='Predicting from your video'
            image={{ uri: 'https://cdnssl.ubergizmo.com/wp-content/uploads/2016/11/lip-reading-640x369.jpg' }}>

            <Text style={{ fontSize: 30 }}> HOW TO Predict</Text>
            <Text></Text>
            <Text>- click 'Start Predict'.</Text>
            <Text>- select you video or take you video.</Text>
            <Text>- click 'ok' and wait result.</Text>
            <Text></Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='Start Predict'
              onPress={this.goLike.bind(this)} />

          </Card>

          <Card title='DEMO'
            image={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsg3J4nQ3J4Nc_vE-seU8hSZ3Yr30BCfqMXhyQuEjUX5EvGYM' }}>
            <Text style={{ fontSize: 30 }}>DEMO</Text>
            <Text></Text>

            <Text></Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='DEMO'
            // onPress={this.goLike.bind(this)}
            />

          </Card>

          <Card title='DEMO'
            image={{ uri: 'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/148576_510666942306801_1928555017_n.jpg?_nc_cat=109&_nc_eui2=AeEqsQ-NdSoQyLyYDtSbXmPllaag7A1LU2KyFn60ZLc6s3XiJZvsCv7E17AlVQj-A7l2xP8EIofIHgIBFXG13Dn-BAVlUQuJ2L6qfd8swI0ANQ&_nc_ht=scontent.fbkk7-2.fna&oh=420701ac68963f6a9475cc1e0ceff0cf&oe=5D102D17' }}>

            <Text style={{ fontSize: 30 }}>DEMO</Text>
            <Text></Text>

            <Text></Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='DEMO'
            // onPress={this.goLike.bind(this)}
            />

          </Card>

        </ImageBackground>
      </ScrollView>
    );
  }

  goLike = () => {
    Actions.Predict()
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


  },
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  BG: {
    flex: 1
  }
});
