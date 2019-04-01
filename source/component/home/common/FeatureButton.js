import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, } from 'react-native';

const FeatureButton = (props) => {

    const {
        featureButtonContainer,
        featureButtonText,
    } = styles;

    return (

        <TouchableOpacity
            activeOpacity={.5}
            style={featureButtonContainer}
            onPress={props.onPress}>

            <Text style={featureButtonText}>
                {props.featureLabel}
            </Text>

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({
    featureButtonContainer: {
        width: 140,
        height: 140,
        opacity: .9,
        elevation: 1,
        alignItems: 'center',
        borderRadius: 140 / 2,
        justifyContent: 'center',
        backgroundColor: '#3A888D',
    },
    featureButtonText: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: 'Exo-Italic',
    },
});

export { FeatureButton };