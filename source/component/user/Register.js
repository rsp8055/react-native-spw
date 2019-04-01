import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    ScrollView,
    StyleSheet,
} from 'react-native';
import {
    ImageUrl,
    BigButton,
    ParentComp,
    BackHeader,
    InputComp,
    SpinnerComp,
} from '../common/reuse';
import {
    HeadTitle,
    PrivacyComp,
} from './common';

import {
    onChangeSFullName,
    onChangeSMobileNumber,
    onChangeSEmail,
    onChangeSPassword,

    onPressRegister,
    onPressRegisterAlert,
} from '../../action';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class RegisterComp1 extends Component {

    bigbuttonPressed = () => {

        console.log("Register pressed....")

        const {
            SfullnameValue,
            SfullnameStatus,
            SmobilenumberValue,
            SmobilenumberStatus,
            SemailValue,
            SemailStatus,
            SpasswordValue,
            SpasswordStatus,
        } = this.props;

        if (SfullnameStatus && SmobilenumberStatus && SemailStatus && SpasswordStatus) {
            this.props.onPressRegister({
                SfullnameValue,
                SmobilenumberValue,
                SemailValue,
                SpasswordValue,
            });

        } else {

            Alert.alert(

                // This is Alert Dialog Title
                '',

                // This is Alert Dialog Message. 
                'Please fill the details properly',
                [

                    // OK Button in Alert Dialog
                    { text: 'OK', onPress: () => { this.onPressOk() } },

                ]

            )

        }
    }

    onPressOk() {
        // console.log("ok pressed to dismiss alert...")
        this.props.onPressRegisterAlert();
    }


    render() {

        const {
            dontAccText,
            loginInputArea,
            loginSignupText,
            loginMainContainer,
            loginFooterContainer,
        } = styles;

        if (this.props.signingStatus === false && this.props.errorStatus) {
            Alert.alert(

                // This is Alert Dialog Title
                '',

                // This is Alert Dialog Message. 
                `${this.props.errorMsg}`,
                [

                    // OK Button in Alert Dialog
                    { text: 'OK', onPress: () => { this.onPressOk() } },

                ]

            )

        }

        if (this.props.isLoading) {
            return <SpinnerComp />;
        }

        return (

            <ParentComp
                backSource={ImageUrl.back1Uri}>

                <BackHeader />

                <ScrollView>

                    <View style={loginMainContainer}>

                        <HeadTitle
                            subLabel={'Registeration to'} />

                        <View style={loginInputArea} >

                            <InputComp
                                placeholderLabel={'Enter Full Name'}
                                onChangeText={(text) => this.props.onChangeSFullName(text)} />

                            <InputComp
                                keyboardType={'email-address'}
                                placeholderLabel={'Enter Email Id'}
                                onChangeText={(text) => this.props.onChangeSEmail(text)} />

                            <InputComp
                                maxLength={10}
                                keyboardType={'phone-pad'}
                                placeholderLabel={'Enter Mobile Number'}
                                onChangeText={(text) => this.props.onChangeSMobileNumber(text)} />

                            <InputComp
                                maxLength={15}
                                secureTextEntry={true}
                                keyboardType={'default'}
                                placeholderLabel={'Enter Password'}
                                onChangeText={(text) => this.props.onChangeSPassword(text)} />

                            <BigButton
                                bigButtonLabel={'Register'}
                                onPress={this.bigbuttonPressed} />

                        </View>

                        <PrivacyComp />

                        <View style={loginFooterContainer} >

                            <Text style={dontAccText}>Already have account ?</Text>

                            <Text
                                style={loginSignupText}
                                onPress={() => Actions.loginComp()} >
                                {'\ '}Login
                        </Text>

                        </View>


                    </View>

                </ScrollView>

            </ParentComp>

        );

    }

}

const styles = StyleSheet.create({
    loginMainContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    loginInputArea: {
        margin: 30,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    forgotText: {
        fontSize: 17,
        color: '#000000',
        textAlign: 'right',
        fontFamily: 'Exo-Italic',
    },
    loginFooterContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    dontAccText: {
        fontSize: 15,
        color: '#000000',
    },
    loginSignupText: {
        fontSize: 17,
        color: '#F6ACB0',
        fontFamily: 'Exo-Italic',
    },
});


const mapStateToProps = ({ register }) => {

    console.log("Register Data : ", register)

    const {

        SfullnameValue,
        SfullnameStatus,
        SfullnameError,

        SmobilenumberValue,
        SmobilenumberStatus,
        SmobilenumberError,

        SemailValue,
        SemailStatus,
        SemailError,

        SpasswordValue,
        SpasswordStatus,
        SpasswordError,

        isLoading,

        signingStatus,
        successMsg,

        errorStatus,
        errorMsg,

    } = register;

    return {

        SfullnameValue,
        SfullnameStatus,
        SfullnameError,

        SmobilenumberValue,
        SmobilenumberStatus,
        SmobilenumberError,

        SemailValue,
        SemailStatus,
        SemailError,

        SpasswordValue,
        SpasswordStatus,
        SpasswordError,

        isLoading,

        signingStatus,
        successMsg,

        errorStatus,
        errorMsg,

    };

};



const RegisterComp = connect(mapStateToProps, {
    onChangeSFullName,
    onChangeSMobileNumber,
    onChangeSEmail,
    onChangeSPassword,

    onPressRegister,
    onPressRegisterAlert,
})(RegisterComp1);

export { RegisterComp };