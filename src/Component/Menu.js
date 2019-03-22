import React, { Component } from 'react';
import {  StyleSheet, View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Button ,Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class sun extends Component {
  
  render() {
    return (
  <View style={styles.DemoText}>
    <Card title='Predicting from your video'
      image={{uri:'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.0-9/148576_510666942306801_1928555017_n.jpg?_nc_cat=109&_nc_eui2=AeEqsQ-NdSoQyLyYDtSbXmPllaag7A1LU2KyFn60ZLc6s3XiJZvsCv7E17AlVQj-A7l2xP8EIofIHgIBFXG13Dn-BAVlUQuJ2L6qfd8swI0ANQ&_nc_ht=scontent.fbkk7-2.fna&oh=420701ac68963f6a9475cc1e0ceff0cf&oe=5D102D17'}}>
      <Text style={{marginBottom: 10}}>
      Click Start Predict to select you video or take you video
      </Text>
    <Button
      icon={<Icon name='code' color='#ffffff' />}
      backgroundColor='#03A9F4'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='Start Predict' 
      onPress={this.goLike.bind(this)}/>
      
    </Card>


    <Card title='.......'
      image={{uri:'https://www.askideas.com/media/13/Fuck-U-Lettering-Tattoo-On-Inner-Lip.jpg'}}>
        <Text style={{marginBottom: 10}}>
          The Lip U is .......
        </Text>
      <Button
        icon={<Icon name='code' color='#ffffff' />}
        backgroundColor='#03A9F4'
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />
      
    </Card>
  </View>
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
  }
});
