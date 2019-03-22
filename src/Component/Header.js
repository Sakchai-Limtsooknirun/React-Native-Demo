// Import libraries for making a component
import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
// Make a component
 
// style
const headerStyle =  StyleSheet.create({
    viewStyle:{
        backgroundColor: '#00B01E',
        height:60,
        paddingTop:15,
        shadowColor:'#000000',
        shadowOffset:{width:0 ,height:2},
        shadowOpacity:0.2,
        position:'relative'
    },
    textStyle :{
        marginLeft: 40,
        
        fontSize : 30
        
    }
});
 
// init component
const Header = ({TextHeader}) =>{
    const { viewStyle,textStyle } = headerStyle;
    return(
        <View style={viewStyle}> 
            <Text style={textStyle}>{TextHeader}</Text>
        </View>
        );
    };
 
// export to render
export default Header;