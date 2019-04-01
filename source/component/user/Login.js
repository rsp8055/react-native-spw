import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    View,
    Alert,
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
    onChangeLEmail,
    onChangeLPassword,
    onPressLogin,
    onPressLoginAlert,
} from '../../action';
import { HeadTitle, } from './common';
import { Actions } from 'react-native-router-flux';

class LoginComp1 extends Component {

    bigbuttonPressed = () => {

        const {

            LemailValue,
            LemailStatus,
            LpasswordValue,
            LpasswordStatus,
        } = this.props;

        if (LemailStatus && LpasswordStatus) {
            this.props.onPressLogin({
                LemailValue,
                LpasswordValue,
            });
        } else {

            Alert.alert(

                // This is Alert Dialog Title
                '',

                // This is Alert Dialog Message. 
                'Please fill valid credentials',
                [

                    // OK Button in Alert Dialog
                    { text: 'OK', onPress: () => { this.onPressOk() } },

                ]

            )

        }
    }

    onPressOk() {
        // console.log("ok pressed to dismiss alert...")
        this.props.onPressLoginAlert();
    }

    render() {

        const {
            forgotText,
            dontAccText,
            loginInputArea,
            loginSignupText,
            loginMainContainer,
            loginFooterContainer,
        } = styles;

        if (this.props.loggingStatus === false && this.props.errorStatus) {
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
            return <SpinnerComp />
        }

        return (

            <ParentComp
                backSource={ImageUrl.back1Uri}>

                <BackHeader />

                <View style={loginMainContainer}>

                    <HeadTitle
                        subLabel={'Login for'} />

                    <View style={loginInputArea} >

                        <InputComp
                            keyboardType={"email-address"}
                            placeholderLabel={'Enter Email Id'}
                            onChangeText={(text) => this.props.onChangeLEmail(text)} />

                        <Text style={this.props.LemailStatus ? { display: 'none' } : { color: '#FFFFFF', fontSize: 15, textAlign: 'right', marginRight: 30 }}>
                            {this.props.LemailError}
                        </Text>

                        <InputComp
                            maxLength={15}
                            secureTextEntry={true}
                            keyboardType={"default"}
                            placeholderLabel={'Enter Password'}
                            onChangeText={(text) => this.props.onChangeLPassword(text)} />

                        <Text style={this.props.LpasswordStatus ? { display: 'none' } : { color: '#FFFFFF', fontSize: 15, textAlign: 'right', marginRight: 30 }}>
                            {this.props.LpasswordError}
                        </Text>

                        <BigButton
                            bigButtonLabel={'Login'}
                            onPress={this.bigbuttonPressed} />

                        <Text style={forgotText}>Forgot Password ?</Text>

                    </View>

                    <View style={loginFooterContainer} >

                        <Text style={dontAccText}>Don't have account ?</Text>

                        <Text
                            style={loginSignupText}
                            onPress={() => Actions.registerComp()} >
                            {'\ '}SignUp
                        </Text>

                    </View>

                </View>

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


const mapStateToProps = ({ login }) => {

    // console.log("logging Data : ", login)

    const {
        LemailValue,
        LemailError,
        LemailStatus,

        LpasswordValue,
        LpasswordError,
        LpasswordStatus,

        LpasswordVisible,

        isLoading,

        loggingStatus,
        successMsg,

        errorStatus,
        errorMsg,

    } = login;

    return {
        LemailValue,
        LemailError,
        LemailStatus,

        LpasswordValue,
        LpasswordError,
        LpasswordStatus,

        LpasswordVisible,

        isLoading,

        loggingStatus,
        successMsg,

        errorStatus,
        errorMsg,
    };

};

const LoginComp = connect(mapStateToProps, {
    onChangeLEmail,
    onChangeLPassword,
    onPressLogin,
    onPressLoginAlert,

})(LoginComp1);

export { LoginComp };