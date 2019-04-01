import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { ImageUrl } from './ImageUrl';
import { Actions } from 'react-native-router-flux';

const BackHeader = (props) => {

    const {
        backHeaderContainer,
        backHeaderEmpty,
        backArrowStyle,
        backHeaderText,
    } = styles;

    return (

        <View style={backHeaderContainer}>

            <TouchableOpacity
                activeOpacity={.5}
                style={{ left: 25, }}
                onPress={() => Actions.pop()}>

                <Image source={ImageUrl.backArrowUri} style={backArrowStyle} />

            </TouchableOpacity>

            {
                props.headerTitle ?
                    <View>
                        <Text style={backHeaderText}>
                            {props.headerTitle}
                        </Text>
                    </View>
                    : null
            }


            <View style={backHeaderEmpty} />

        </View>

    );

}

const styles = StyleSheet.create({
    backHeaderContainer: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#3A888D',
        justifyContent: 'space-between',
    },
    backArrowStyle: {
        width: 25,
        height: 20,
    },
    backHeaderText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '800',
        textAlign: 'center',
    },
    backHeaderEmpty: {
        width: 10,
        height: 10,
    },
});

export { BackHeader };