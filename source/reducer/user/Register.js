import {
    SIGNING_UP,
    SIGNING_UP_FAIL,
    RESET_SIGNUP_DATA,
    SIGNING_UP_SUCCESS,
    CHANGE_SIGNUP_EMAIL,
    CHANGE_SIGNUP_FULLNAME,
    CHANGE_SIGNUP_PASSWORD,
    CHANGE_SIGNUP_MOBILE_NUMBER,
} from '../../action/types';

const INITIAL_STATE = {
    SfullnameValue: '',
    SfullnameStatus: null,
    SfullnameError: '',

    SmobilenumberValue: '',
    SmobilenumberStatus: null,
    SmobilenumberError: '',

    SemailValue: '',
    SemailStatus: null,
    SemailError: '',

    SpasswordValue: '',
    SpasswordStatus: null,
    SpasswordError: '',

    isLoading: false,
    signingStatus: false,
    successMsg: '',

    errorStatus: false,
    errorMsg: '',

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_SIGNUP_FULLNAME:
            return {
                ...state,
                SfullnameValue: action.SfullnameValue,
                SfullnameStatus: action.SfullnameStatus,
                SfullnameError: action.SfullnameError,
                isLoading: false,
            };

        case CHANGE_SIGNUP_MOBILE_NUMBER:
            return {
                ...state,
                SmobilenumberValue: action.SmobilenumberValue,
                SmobilenumberStatus: action.SmobilenumberStatus,
                SmobilenumberError: action.SmobilenumberError,
                isLoading: false,
            };

        case CHANGE_SIGNUP_EMAIL:
            return {
                ...state,
                SemailValue: action.SemailValue,
                SemailStatus: action.SemailStatus,
                SemailError: action.SemailError,
                isLoading: false,
            };

        case CHANGE_SIGNUP_PASSWORD:
            return {
                ...state,
                SpasswordValue: action.SpasswordValue,
                SpasswordStatus: action.SpasswordStatus,
                SpasswordError: action.SpasswordError,
                isLoading: false,
            };

        case SIGNING_UP:
            return {
                ...state,
                isLoading: action.isLoading,
            };

        case SIGNING_UP_FAIL:
            return {
                ...state,
                signingStatus: action.signingStatus,
                isLoading: action.isLoading,
                errorStatus: action.errorStatus,
                errorMsg: action.errorMsg,
            };

        case SIGNING_UP_SUCCESS:
            return {
                ...state,
                signingStatus: action.signingStatus,
                isLoading: action.isLoading,
                successMsg: action.successMsg,
            };

        case RESET_SIGNUP_DATA:
            return {
                ...state,
                signingStatus: false,
                errorStatus: false,
                isLoading: false,
            };

        default:
            return state;
    }
}