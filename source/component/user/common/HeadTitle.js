import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const HeadTitle = (props) => {

    const {
        welcomeText,
        spwMainText,
        spwText,
    } = styles;

    return (

        <View style={{ marginTop: 30 }}>

            <Text style={welcomeText}>{props.subLabel || 'Welcome to'}</Text>

            <Text style={[spwText, spwMainText]}> S
                <Text style={spwText}>mall</Text>
                <Text style={[spwText, spwMainText]}> P</Text>
                <Text style={spwText}>aid</Text>
                <Text style={[spwText, spwMainText]}> W</Text>
                <Text style={spwText}>ork</Text>
            </Text>

        </View>

    );

}

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },
    spwText: {
        fontSize: 35,
        color: '#3A888D',
        textAlign: 'center',
        fontFamily: 'Exo-Black'
    },
    spwMainText: {
        color: '#36040D',
        fontFamily: 'bppu',
    },
});

export { HeadTitle };