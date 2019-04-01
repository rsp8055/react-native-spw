import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Text, } from 'react-native';
import { ImageUrl } from '../../common';

const EditProfile = (props) => {

    const {
        editContainer,
        editIconStyle,
        welmenuText,
    } = styles;

    return (

        <View style={editContainer}>

            <Text style={[welmenuText, { marginTop: 15 }]}>
                {props.profileName}{'\n'}
                {props.profileEmail}
            </Text>

            <TouchableOpacity
                activeOpacity={.5}
                onPress={() => console.log("Enit prof")}>
                <Image source={ImageUrl.editUri} style={editIconStyle} />
            </TouchableOpacity>

        </View>

    );

}

const styles = StyleSheet.create({
    editContainer: {
        borderTopWidth: 1,
        paddingVertical: 0,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    editIconStyle: {
        width: 25,
        height: 20,
        marginTop: 25,
        marginRight: 10,
    },
    welmenuText: {
        fontSize: 18,
        color: '#FFFFFF',
    },
});

export { EditProfile };