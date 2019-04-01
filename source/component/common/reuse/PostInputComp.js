import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
} from 'react-native';

const PostInputComp = (props) => {

    const {
        inputStyle,
    } = styles;

    return (

        <TextInput
            multiline={props.multiline}
            style={props.customInputStyle || inputStyle}
            placeholder={props.placeholderLabel}
            placeholderTextColor={'#FFFFFF'}
            underlineColorAndroid={'#F6ACB0'} />

    );

}

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 16,
        color: '#000000',
        marginHorizontal: 30,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
});

export { PostInputComp };