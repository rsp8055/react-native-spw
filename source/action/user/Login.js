import {
    CHANGE_LOGIN_EMAIL,
    CHANGE_LOGIN_PASSWORD,
    PASSWORD_VISIBILITY,

    LOGGING_IN,
    LOGGING_IN_FAIL,
    LOGGING_IN_SUCCESS,

    RESET_LOGIN_DATA,

    FORGETTING_PASSWORD,
    FORGETTING_PASSWORD_FAIL,
    FORGETTING_PASSWORD_SUCCESS,

} from '../types';

import baseurl from '../baseurl';

import { Actions } from 'react-native-router-flux';

export const onPressLogin = ({
    LemailValue,
    LpasswordValue,
}) => {
    // console.log(" Login button is pressed.... ", LemailValue, LpasswordValue);
    return (dispatch) => {

        // console.log("Going to login fetch TRUE..");

        dispatch({
            type: LOGGING_IN,
            isLoading: true,
        })

        fetch(baseurl.USER_LOGIN, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                email: LemailValue,

                password: LpasswordValue,

            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // Showing response message coming from server after inserting records.
                // console.log("LOGGING_IN responseJson is : ", responseJson);

                if (responseJson[0].responseCode === 202) {
                    dispatch({
                        type: LOGGING_IN_SUCCESS,
                        loggingStatus: true,
                        isLoading: false,
                        successMsg: responseJson[0].responseMsg,
                    })
                    
                    Actions.homeComp();

                } else if (responseJson[0].responseCode === 400 || responseJson[0].responseCode === 402) {
                    dispatch({
                        type: LOGGING_IN_FAIL,
                        loggingStatus: false,
                        isLoading: false,
                        errorStatus: true,
                        errorMsg: 'Invalid email or password, please try again'
                    })
                }

            }).catch((error) => {
                console.log(" LOGGING_IN error : ", error);

                dispatch({
                    type: LOGGING_IN_FAIL,
                    loggingStatus: false,
                    isLoading: false,
                    errorStatus: true,
                    errorMsg: 'Contact to administrator',
                })

            });

    }

};

export const onForgotPress = ({
    LemailValue,
}) => {
    // console.log(" Forgot button is pressed.... ");
    return (dispatch) => {

        // console.log("Going to Forgot fetch TRUE..");

        dispatch({
            type: FORGETTING_PASSWORD,
            isLoading: true,
        })

        fetch(baseurl.FORGOT_PASSWORD, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                email: LemailValue,

            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // Showing response message coming from server after inserting records.
                // console.log("FORGET responseJson is : ", responseJson);

                if (responseJson[0].responseCode === 201) {
                    dispatch({
                        type: FORGETTING_PASSWORD_SUCCESS,
                        forgetStatus: true,
                        isLoading: false,
                        successMsg: responseJson[0].responseMsg,
                    })
                    Actions.userLogin();
                } else if (responseJson[0].responseCode === 403) {
                    dispatch({
                        type: FORGETTING_PASSWORD_FAIL,
                        forgetStatus: false,
                        isLoading: false,
                        errorStatus: true,
                        errorMsg: 'Email not found'
                    })
                }

            }).catch((error) => {
                console.log(" FORGETTING_PASSWORD_FAIL error : ", error);

                dispatch({
                    type: FORGETTING_PASSWORD_FAIL,
                    forgetStatus: false,
                    isLoading: false,
                    errorStatus: true,
                    errorMsg: 'Contact to administrator',
                })

            });

    }

};

export const onPressLoginAlert = () => {
    // console.log("ok pressed from Login alert in actions...")
    return { type: RESET_LOGIN_DATA };
}

export const onChangeLEmail = (text) => {
    // console.log("Email: ", text)
    let email = text;
    let condition = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let LemailStatus = condition.test(email);

    if (LemailStatus == true) {
        return {
            type: CHANGE_LOGIN_EMAIL,
            LemailValue: text,
            LemailStatus: true,
            LemailError: '',
            errorMessage: '',
        };
    } else {
        return {
            type: CHANGE_LOGIN_EMAIL,
            LemailValue: '',
            LemailStatus: false,
            LemailError: 'E-mail id should contain ( . ), ( & ), ( @ )',
            errorMessage: '',
        };
    }
};

export const onChangeLPassword = (text) => {
    // console.log("Passwd: ", text);
    let password = text;
    let condition = password.length;
    if (condition >= 8) {
        return {
            type: CHANGE_LOGIN_PASSWORD,
            LpasswordValue: text,
            LpasswordStatus: true,
            LpasswordError: '',
            errorMessage: '',
        };
    } else {
        return {
            type: CHANGE_LOGIN_PASSWORD,
            LpasswordValue: '',
            LpasswordStatus: false,
            LpasswordError: 'Password minimum length should be 8',
            errorMessage: '',
        };
    }
};

export const passwordVisiblity = ({ passwordVisible }) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_VISIBILITY,
            passwordVisible: !passwordVisible
        })
    }
};

export const onForgotPassword = () => {
    console.log(" onForgotPassword ");
    return (dispatch) => {
        // Actions.firstPage();
    };
};

export const onTermsCondition = () => {
    console.log(" onTermsCondition ");
    return (dispatch) => {
        // Actions.firstPage();
    };
};