import React, { Component } from 'react';
import { Text } from 'react-native';

const PostInstructions = (props) => {

    return (

        <Text
            style={props.labelStyle}
            onPress={props.onPress}>
            {'\   '}{props.labelText}
        </Text>

    );

}

export { PostInstructions };