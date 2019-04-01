import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
} from 'react-native';
import { ImageUrl } from '../../common';

const GoButton = (props) => {

    const {
        goButtonContainer,
        goButtonText,
        goIconStyle,
    } = styles;

    return (

        <TouchableOpacity
            activeOpacity={.5}
            style={goButtonContainer}
            onPress={props.onPress}>

            <Text style={goButtonText}>
                GO
            </Text>

            <Image source={ImageUrl.rightArrowUri} style={goIconStyle} />

        </TouchableOpacity>

    );

}

const styles = StyleSheet.create({
    goButtonContainer: {
        width: '15%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3A888D',
    },
    goButtonText: {
        // top: 10,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    goIconStyle: {
        height: 10,
        width: 25,
    },
});

export { GoButton };