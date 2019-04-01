import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
} from 'react-native';

const DrawerSection = (props) => {

    const {
        welmenuSection,
        welmenuText,
    } = styles;

    return (

        <TouchableOpacity
            // activeOpacity={.5}
            style={welmenuSection}
            onPress={props.onPress}>

            <Text style={welmenuText}>
                {props.menuLabel}
            </Text>

            {props.children}

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({
    welmenuSection: {
        margin: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },
    welmenuText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
});
export { DrawerSection };