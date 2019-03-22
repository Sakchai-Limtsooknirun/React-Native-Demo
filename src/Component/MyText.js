import React, { Component } from 'react';
import { StyleSheet, Text, View ,ImageBackground , Image} from 'react-native';
import { Button ,Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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
          <Header
          leftComponent={{ text: 'LIP U', style: { fontSize: 30,color: '#fff' } }}
          />
          <ImageBackground
          source={require('/Users/Sakchai/Desktop/React-Native-Demo/src/bg.jpg')}
          style={styles.BG}>
          <Image source={{uri:'https://www.askideas.com/media/13/Fuck-U-Lettering-Tattoo-On-Inner-Lip.jpg'}} style={styles.Logo}></Image>
          <Text style={styles.TextStyle}>
            {display}
          </Text>
          <Button  type="outline" title="START" onPress={this.clicked.bind(this)}></Button>
          
         </ImageBackground>
        </View>
      );

      
    }
    
}
const styles = StyleSheet.create({

  TextStyle: {
    width: 500,
    color: '#fff',
    textAlign: 'center',
    fontSize: 50,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  BG:{
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: 500,
  },
  Logo:{
    alignSelf: 'center',
    width: 200, 
    height: 200,
    borderWidth: 1,
    borderRadius: 50
  }
  
});


