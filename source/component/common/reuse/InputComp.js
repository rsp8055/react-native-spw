import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';

const InputComp = (props) => {

    const {
        inputTextStyle
    } = styles;

    return (

        <TextInput
            style={inputTextStyle}
            maxLength={props.maxLength}
            placeholderTextColor={'#FFFFFF'}
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
            underlineColorAndroid={'#F6ACB0'}
            placeholder={props.placeholderLabel}
            secureTextEntry={props.secureTextEntry} />

    );

}

const styles = StyleSheet.create({
    inputTextStyle: {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
    },
});

export { InputComp };