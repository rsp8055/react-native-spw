import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ShowError = (props) => {

    const {
        errorStyle
    } = styles;

    return (

        <View style={{}}>
            <Text style={errorStyle}>
                * are mandatory
            </Text>
        </View>

    );

}

const styles = StyleSheet.create({
    errorStyle: {
        color: '#F6ACB0',
        textAlign: 'right',
        borderBottomColor: '#0A2E80',
    }
});

export { ShowError };
