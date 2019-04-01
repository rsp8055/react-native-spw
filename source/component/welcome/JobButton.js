import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';

const JobButton = (props) => {

    const {
        jobButtonContainer,
        jobButtonText,
    } = styles;

    return (

        <TouchableOpacity
            activeOpacity={.5}
            onPress={props.onPress}
            style={jobButtonContainer} >

            <Text style={jobButtonText}>
                {props.buttonLabel}
            </Text>

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({
    jobButtonContainer: {
        elevation: 1,
        paddingVertical: 7,
        paddingHorizontal: 15,
        backgroundColor: 'green',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    jobButtonText: {
        fontSize: 22,
        color: '#D80E55',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export { JobButton };