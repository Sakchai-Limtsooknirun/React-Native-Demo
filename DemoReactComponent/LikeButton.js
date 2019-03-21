import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default class LikeButton extends Component {


    render() {
        return (
            <Button onClick={this.sum} title="Like"></Button>
        )
    }

    sum = () => {
        console.log(this.props);
        this.props.sumClick()
    }

}