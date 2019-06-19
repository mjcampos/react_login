import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

function login(username, password) {
    // return the promise using fetch which adds to localstorage on resolve

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    // complete this function
}

var register = user => dispatch => {
    // return the promise using fetch which dispatches appropriately 

    userService.register(user)
        .then(user => dispatch({
                    type: userConstants.REGISTER_SUCCESS,
                    user
                }))
        .catch(error => dispatch({
                    type: userConstants.REGISTER_FAILURE,
                    error
                }));


    // function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
}

export const userActions = {
    login,
    logout,
    register
};