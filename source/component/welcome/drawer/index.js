import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';
import { ImageUrl } from '../../common';
import { DrawerSection } from './DrawerSection';
import { Actions } from 'react-native-router-flux';

class WelcomeDrawerComp extends Component {

    render() {

        const {
            wellogoStyle,
            welmenuFooter,
            weldraContainer,
            welmenuContainer,
            wellogoContainer,
            welmenuFooterText,
        } = styles;

        return (

            <View style={weldraContainer}>

                <View style={wellogoContainer}>

                    <Image source={ImageUrl.logoUri} style={wellogoStyle} />

                </View>

                <View style={welmenuContainer}>

                    <DrawerSection
                        menuLabel={'Home'}
                        onPress={() => Actions.drawerClose()} />

                    <DrawerSection
                        menuLabel={'Login'}
                        onPress={() => Actions.loginComp()} />

                    <DrawerSection
                        menuLabel={'Register'}
                        onPress={() => Actions.registerComp()} />

                    <DrawerSection
                        menuLabel={'Contact Us'} />

                    <DrawerSection
                        menuLabel={'About Us'} />

                </View>

                <View style={welmenuFooter}>
                    <Text style={welmenuFooterText}> Version 1.0</Text>
                </View>

            </View>

        );

    }

}

const styles = StyleSheet.create({
    weldraContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    wellogoContainer: {
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 2,
        justifyContent: 'center',
        borderBottomColor: '#FFFFFF',
    },
    wellogoStyle: {
        height: 80,
        width: 120,
    },
    welmenuContainer: {
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 50,
        justifyContent: 'center',
    },
    welmenuFooter: {
        borderTopWidth: 1,
        paddingVertical: 10,
    },
    welmenuFooterText: {
        fontSize: 12,
        color: '#000000',
        textAlign: 'center',
    },
});

export { WelcomeDrawerComp };