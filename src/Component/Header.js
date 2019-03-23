// Import libraries for making a component
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// Make a component

// style
const headerStyle = StyleSheet.create({
    viewStyle: {

        height: 60,
        paddingBottom: 100,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        position: 'relative'
    },
    textStyle: {
        marginLeft: 40,
        fontSize: 30

    },
    MiniLogo: {
        alignSelf: 'center',
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 50,
        
    }
});

// init component
const Header = ({ TextHeader }) => {
    const { viewStyle, textStyle ,MiniLogo} = headerStyle;
    return (
        <View style={viewStyle}>
            <Text>
                <Image source={{ uri: 'https://vector.me/files/images/2/1/218959/scream_vector.png' }} style={MiniLogo}></Image>
                <Text>    </Text>
                <Text style={textStyle}>{TextHeader}</Text>
            </Text>


        </View>
    );
};

// export to render
export default Header;