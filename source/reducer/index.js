import { combineReducers } from 'redux';

import register from './user/Register';
import login from './user/Login';

export default combineReducers({

    register,
    login,

});