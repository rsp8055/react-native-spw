import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ImageUrl, ParentComp } from '../common';
import { JobButton } from '.';

class WelcomeComp extends Component {

    render() {

        const {
            logoStyle,
            textStyle1,
            textStyle2,
            textStyle3,
            textStyle4,
            subContainer,
            mainContainer,
            menuIconStyle,
            menuIconContainer,
        } = styles;

        return (

            <ParentComp>

                <TouchableOpacity
                    style={menuIconContainer}
                    onPress={() => Actions.drawerOpen()} >
                    <Image source={ImageUrl.menuUri} style={menuIconStyle} />
                </TouchableOpacity>

                <View style={[mainContainer, { marginTop: 50 }]}>

                    <Text style={textStyle1}>Welcome to</Text>
                    <Text style={textStyle2}> Small Paid Work</Text>
                    <Image source={ImageUrl.logoUri} style={logoStyle} resizeMode={'contain'} />
                    <Text style={textStyle3}>You are here for...</Text>

                    <View style={subContainer}>

                        <JobButton
                            onPress={() => Actions.postJobComp()}
                            buttonLabel={'To Post a JOB'} />

                        <Text style={textStyle4}>OR</Text>

                        <JobButton
                            onPress={() => Actions.requestJobComp()}
                            buttonLabel={'To Request a JOB'} />

                    </View>

                </View>

            </ParentComp>
        );

    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    menuIconContainer: {
        top: 30,
        left: 30,
        height: 50,
        position: 'absolute',
        backgroundColor: 'transparent',
    },
    menuIconStyle: {
        width: 25,
        height: 25,
    },
    textStyle1: {
        fontSize: 25,
        marginTop: 30,
        color: 'white',
        textAlign: 'center',
    },
    textStyle2: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Exo-Black',
    },
    textStyle3: {
        fontSize: 20,
        fontFamily: 'bppu',
        marginHorizontal: 20,
    },
    textStyle4: {
        fontSize: 15,
        fontFamily: 'bppu',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
    },
    logoStyle: {
        margin: 18,
        width: 200,
        height: 100,
        alignSelf: 'center',
    },
    subContainer: {
        marginTop: 50,
        marginHorizontal: 80,
    }
});

export { WelcomeComp };