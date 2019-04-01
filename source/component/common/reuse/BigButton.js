import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';

const BigButton = (props) => {

    const {
        bigButtonContainer,
        bigButtonText,
    } = styles;

    return (

        <TouchableOpacity
            activeOpacity={.5}
            onPress={props.onPress}
            style={bigButtonContainer}>

            {
                props.bigButtonLabel ?
                    <Text style={bigButtonText}>
                        {props.bigButtonLabel}
                    </Text>
                    : null
            }

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({
    bigButtonContainer: {
        padding: 8,
        marginVertical: 15,
        justifyContent: 'center',
        backgroundColor: '#3A888D',
    },
    bigButtonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
});

export { BigButton };