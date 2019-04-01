import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { PostInstructions } from '.';
import { BackHeader, Pyramid } from '../common';
import { Actions } from 'react-native-router-flux';

class RequestJob extends Component {

    render() {

        const {
            jobOrText,
            jobStepText,
            jobLoginText,
            mainContainer,
            jobStepsHeader,
            jobRegisterText,
        } = styles;

        return (

            <View style={mainContainer}>

                <BackHeader />

                <View style={{ marginVertical: 30, }}>

                    <Text style={jobStepsHeader}> Steps to finish the Request Job </Text>

                    <View style={{ marginHorizontal: 80, }}>

                        <View style={{ flexDirection: 'row', }} >

                            <PostInstructions
                                labelStyle={[jobStepText, jobLoginText]}
                                labelText={'1. Login'}
                                onPress={() => Actions.loginComp()} />

                            <PostInstructions
                                labelStyle={[jobStepText, jobOrText]}
                                labelText={'or'} />

                            <PostInstructions
                                labelStyle={[jobStepText, jobRegisterText]}
                                labelText={'Register '}
                                onPress={() => Actions.registerComp()} />

                        </View>

                        <PostInstructions
                            labelStyle={jobStepText}
                            labelText={'2. Get Job List'} />

                        <PostInstructions
                            labelStyle={jobStepText}
                            labelText={'3. View Job Description'} />

                        <PostInstructions
                            labelStyle={jobStepText}
                            labelText={'4. Apply or Call'} />

                        <PostInstructions
                            labelStyle={jobStepText}
                            labelText={'5. Get Job Done'} />

                        <PostInstructions
                            labelStyle={jobStepText}
                            labelText={'6. Submit Your Review'} />

                    </View>

                </View>

                <Pyramid />

            </View>

        );

    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    jobStepsHeader: {
        fontSize: 22,
        color: '#3A888D',
        marginVertical: 20,
        textAlign: 'center',
        fontFamily: 'Exo-Black',
    },
    jobStepText: {
        margin: 10,
        fontSize: 18,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        fontFamily: 'Exo-Italic',
        borderLeftColor: '#3A888D',
        borderRightColor: '#3A888D',
    },
    jobLoginText: {
        color: '#0A2E80',
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#0A2E80',
    },
    jobOrText: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    jobRegisterText: {
        color: '#0A2E80',
        borderLeftWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#0A2E80',
    },
});

export { RequestJob };