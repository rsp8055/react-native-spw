import {
    CHANGE_SIGNUP_FULLNAME,
    CHANGE_SIGNUP_MOBILE_NUMBER,
    CHANGE_SIGNUP_EMAIL,
    CHANGE_SIGNUP_PASSWORD,
    SIGNING_UP,
    SIGNING_UP_FAIL,
    SIGNING_UP_SUCCESS,
    RESET_SIGNUP_DATA,
} from '../types';

import baseurl from '../baseurl';

import { Actions } from 'react-native-router-flux';

export const onPressRegister = ({
    SfullnameValue,
    SmobilenumberValue,
    SemailValue,
    SpasswordValue,
}) => {
    console.log(" Signup button is pressed.... ",
        SfullnameValue,
        SmobilenumberValue,
        SemailValue,
        SpasswordValue,
    );
    return (dispatch) => {

        console.log("Going to signup fetch TRUE..");

        dispatch({
            type: SIGNING_UP,
            isLoading: true,
        })

        fetch(baseurl.USER_REGISTRATION, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                fullname: SfullnameValue,

                mobile: SmobilenumberValue,

                email: SemailValue,

                password: SpasswordValue,

            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // Showing response message coming from server after inserting records.
                // console.log(" SIGNING_UP responseJson is : ", responseJson);

                if (responseJson[0].responseCode === 201) {
                    dispatch({
                        type: SIGNING_UP_SUCCESS,
                        isLoading: false,
                        signingStatus: true,
                        successMsg: responseJson[0].responseMsg,
                    })

                    Actions.homeComp();

                } else if (responseJson[0].responseCode === 400 || responseJson[0].responseCode === 401 || responseJson[0].responseCode === 4011) {
                    dispatch({
                        type: SIGNING_UP_FAIL,
                        isLoading: false,
                        signingStatus: false,
                        errorStatus: true,
                        errorMsg: responseJson[0].responseMsg,
                    })
                }

            }).catch((error) => {
                console.log("SIGNING_UP_FAIL error : ", error);

                dispatch({
                    type: SIGNING_UP_FAIL,
                    isLoading: false,
                    signingStatus: false,
                    errorStatus: true,
                    errorMsg: 'Contact to administrator',
                })

            });

    };
};

export const onChangeSFullName = (text) => {
    // console.log("FName: ", text);
    let FName = text;
    let condition = FName.length;
    if (condition >= 1) {
        return {
            type: CHANGE_SIGNUP_FULLNAME,
            SfullnameValue: text,
            SfullnameStatus: true,
            SfullnameError: '',
        };
    } else {
        return {
            type: CHANGE_SIGNUP_FULLNAME,
            SfullnameValue: '',
            SfullnameStatus: false,
            SfullnameError: 'Full name should not blank',
        };
    }
};

export const onChangeSMobileNumber = (text) => {
    // console.log("Mobile: ", text);
    let Mobile = text;
    let condition = Mobile.length;
    if (condition == 10) {
        return {
            type: CHANGE_SIGNUP_MOBILE_NUMBER,
            SmobilenumberValue: text,
            SmobilenumberStatus: true,
            SmobilenumberError: '',
        };
    } else {
        return {
            type: CHANGE_SIGNUP_MOBILE_NUMBER,
            SmobilenumberValue: '',
            SmobilenumberStatus: false,
            SmobilenumberError: 'Mobile number must be valid',
        };
    }
};

export const onChangeSEmail = (text) => {
    // console.log("Signup Email: ", text)
    let email = text;
    let condition = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailStatus = condition.test(email);

    if (emailStatus == true) {
        return {
            type: CHANGE_SIGNUP_EMAIL,
            SemailValue: text,
            SemailStatus: true,
            SemailError: '',
        };
    } else {
        return {
            type: CHANGE_SIGNUP_EMAIL,
            SemailValue: '',
            SemailStatus: false,
            SemailError: 'E-mail Id should contain ( . ), ( & ), ( @ )',
        };
    }
};

export const onChangeSPassword = (text) => {
    // console.log("Signup Passwd: ", text);
    let password = text;
    let condition = password.length;
    if (condition >= 8) {
        return {
            type: CHANGE_SIGNUP_PASSWORD,
            SpasswordValue: text,
            SpasswordStatus: true,
            SpasswordError: '',
        };
    } else {
        return {
            type: CHANGE_SIGNUP_PASSWORD,
            SpasswordValue: '',
            SpasswordStatus: false,
            SpasswordError: 'Password minimum length should be 8',
        };
    }
};

export const onPressRegisterAlert = () => {
    // console.log("ok pressed from Register alert in actions...")
    return { type: RESET_SIGNUP_DATA };
}