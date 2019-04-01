import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const Pyramid = (props) => {

    const {
        pyramidContainer,
        pyramidLevelStyle,
    } = styles;

    return (

        <View style={pyramidContainer}>

            <View style={[pyramidLevelStyle, { width: 200, }]} />

            <View style={[pyramidLevelStyle, { width: 150, }]} />

            <View style={[pyramidLevelStyle, { width: 100, }]} />

            <View style={[pyramidLevelStyle, { width: 50, }]} />

            <View style={[pyramidLevelStyle, { width: 10, }]} />

            <View style={[pyramidLevelStyle, { width: 2, }]} />

        </View>

    );

}

const styles = StyleSheet.create({
    pyramidContainer: {
        // flex: 1,
        marginTop: 20,
        alignItems: 'center',
    },
    pyramidLevelStyle: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#3A888D',
    },
});

export { Pyramid };