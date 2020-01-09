import { postUser, postSession, deleteSession } from "../util/session";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRETN_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (payload) => ({
    type: RECEIVE_CURRENT_USER,
    payload
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = payload => ({
    type: RECEIVE_SESSION_ERRORS,
    payload
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});

export const signUp = formUser => dispatch => postUser(formUser)
    .then(response => dispatch(receiveCurrentUser(response)),
        err => dispatch(receiveSessionErrors(err.responseJSON)));

export const login = formUser => dispatch => postSession(formUser)
    .then(response => dispatch(receiveCurrentUser(response)),
        err => dispatch(receiveSessionErrors(err.responseJSON)));

export const logout = () => dispatch => deleteSession()
    .then(response => dispatch(logoutCurrentUser(response)),
        err => dispatch(receiveSessionErrors(err.responseJSON)));

       

