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
} from '../../action/types';

const INITIAL_STATE = {
    LemailValue: '',
    LemailStatus: null,
    LemailError: '',

    LpasswordValue: '',
    LpasswordStatus: null,
    LpasswordError: '',
    passwordVisible: false,

    isLoading: false,

    forgetStatus: false,

    loggingStatus: false,
    successMsg: '',

    errorStatus: false,
    errorMsg: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CHANGE_LOGIN_EMAIL:
            return {
                ...state,
                LemailValue: action.LemailValue,
                LemailStatus: action.LemailStatus,
                LemailError: action.LemailError,
                isLoading: false,
            };

        case CHANGE_LOGIN_PASSWORD:
            return {
                ...state,
                LpasswordValue: action.LpasswordValue,
                LpasswordStatus: action.LpasswordStatus,
                LpasswordError: action.LpasswordError,
                isLoading: false,
            };

        case LOGGING_IN:
            return {
                ...state,
                isLoading: action.isLoading,
            };

        case LOGGING_IN_FAIL:
            return {
                ...state,
                loggingStatus: action.loggingStatus,
                isLoading: action.isLoading,
                errorStatus: action.errorStatus,
                errorMsg: action.errorMsg,
            };

        case LOGGING_IN_SUCCESS:
            return {
                ...state,
                loggingStatus: action.loggingStatus,
                isLoading: action.isLoading,
                successMsg: action.successMsg,
            };

        case FORGETTING_PASSWORD:
            return {
                ...state,
                isLoading: action.isLoading,
            };

        case FORGETTING_PASSWORD_FAIL:
            return {
                ...state,
                forgetStatus: action.forgetStatus,
                isLoading: action.isLoading,
                errorStatus: action.errorStatus,
                errorMsg: action.errorMsg,
            };

        case FORGETTING_PASSWORD_SUCCESS:
            return {
                ...state,
                forgetStatus: action.forgetStatus,
                isLoading: action.isLoading,
                successMsg: action.successMsg,
            };

        case RESET_LOGIN_DATA:
            return {
                ...state,
                loggingStatus: false,
                errorStatus: false,
                isLoading: false,
            };

        default:
            return state;
    }
}