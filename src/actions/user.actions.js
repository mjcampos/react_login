import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

var login = (username, password) => dispatch => {
    // return the promise using fetch which adds to localstorage on resolve

    userService.login(username, password)
        .then((user) => dispatch({
                            type: userConstants.LOGIN_SUCCESS,
                            user
                        }))
        .catch(error => dispatch({
            type: userConstants.LOGIN_FAILURE,
            error
        }));

    // function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
}

function logout() {
    userService.logout();

    return {
        type: userConstants.LOGOUT
    }
}

var register = user => dispatch => {
    // return the promise using fetch which dispatches appropriately 

    userService.register(user)
        .then(() => dispatch({
                    type: userConstants.REGISTER_SUCCESS,
                    user
                }))
        .then(() => {
            dispatch(alertActions.success("You've successfully created a new account!"));
        })
        .catch(error => {
            dispatch({
                type: userConstants.REGISTER_FAILURE,
                error
            })

            throw error;
        })
        .catch(errorMessage => dispatch(alertActions.error(errorMessage)));


    // function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
}

export const userActions = {
    login,
    logout,
    register
};