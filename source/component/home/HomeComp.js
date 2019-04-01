import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    Text,
    View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { HighlightComp, FeatureButton } from './common';
import { ImageUrl, ParentComp } from '../common';
import { HeadTitle } from '../user/common';

class HomeComp extends Component {

    componentWillMount() {
        Actions.drawerClose();
    }

    render() {

        const {
            logoStyle,
            wantsText,
            menuIconStyle,
            featureContainer,
            menuIconContainer,
            featureSubContainer,
        } = styles;

        const highlightData = [
            "Recently 10 peoples got job done",
            "Recently new jobs added",
            "Job requesters list is increasing more than job posters",
            "Job requesters are getting good response ",
        ]

        return (

            <ParentComp>

                <ScrollView>

                    <TouchableOpacity
                        activeOpacity={.5}
                        style={menuIconContainer}
                        onPress={() => Actions.drawerOpen()} >
                        <Image source={ImageUrl.menuUri} style={menuIconStyle} />
                    </TouchableOpacity>


                    <View style={{ marginTop: 50 }}>

                        <HeadTitle />

                        <Image source={ImageUrl.logoUri} style={logoStyle} resizeMode={'contain'} />

                    </View>

                    <View style={featureContainer}>

                        <Text style={wantsText}>Do You Want's To</Text>

                        <View style={featureSubContainer}>

                            <FeatureButton
                                featureLabel={'Post a JOB'}
                                onPress={() => Actions.postNewJob()} />

                            <FeatureButton
                                featureLabel={'Request a JOB'}
                                onPress={() => Actions.requestNewJob()} />

                        </View>

                    </View>

                    <HighlightComp
                        highlightData={highlightData} />

                </ScrollView>

            </ParentComp>
        );

    }

}

const styles = StyleSheet.create({
    menuIconContainer: {
        top: 30,
        left: 30,
        height: 50,
        position: 'absolute',
    },
    menuIconStyle: {
        width: 25,
        height: 25,
    },
    logoStyle: {
        margin: 18,
        width: 200,
        height: 100,
        alignSelf: 'center',
    },
    featureContainer: {
        margin: 20,
        marginTop: -10,
    },
    wantsText: {
        fontSize: 15,
        color: '#F6ACB0',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily: 'Filson_Soft_W03_Book',
    },
    featureSubContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export { HomeComp };