import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const PrivacyComp = (props) => {

    const {
        privacyContainer,
        loginSignupText,
        dontAccText
    } = styles;

    return (

        <View style={privacyContainer} >

            <Text style={[dontAccText, { textAlign: 'center' }]}>

                By singing up with you agree to our

                <Text style={[loginSignupText, { textDecorationLine: 'underline' }]}>
                    {'\ '}Terms of Services
                </Text>

                <Text style={dontAccText}>
                    {'\ '}and
                </Text>

                <Text style={[loginSignupText, { textDecorationLine: 'underline' }]}>
                    {'\ '}Privacy Policy
                </Text>

            </Text>

        </View>

    );

}

const styles = StyleSheet.create({
    privacyContainer: {
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    dontAccText: {
        fontSize: 15,
        color: '#000000',
    },
    loginSignupText: {
        fontSize: 17,
        color: '#F6ACB0',
        fontFamily: 'Exo-Italic',
    },
});

export { PrivacyComp };