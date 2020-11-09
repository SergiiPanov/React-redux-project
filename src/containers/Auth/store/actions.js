import * as constants from "./constants";

export const A_SignUpRequest = user => ({ type: constants.SIGN_UP_REQUEST, payload: user });
export const A_SignUpSuccess = user => ({ type: constants.SIGN_UP_SUCCESS, payload: user });
export const A_SignUpFailure = err => ({ type: constants.SIGN_UP_FAILURE, payload: err });
export const A_SignUpClear = () => ({ type: constants.SIGN_UP_CLEAR });

export const A_SignInRequest = user => ({ type: constants.SIGN_IN_REQUEST, payload: user });
export const A_SignInSuccess = user => ({ type: constants.SIGN_IN_SUCCESS, payload: user });
export const A_SignInFailure = err => ({ type: constants.SIGN_IN_FAILURE, payload: err });
export const A_SignInClear = () => ({ type: constants.SIGN_IN_CLEAR });

export const A_FetchAllUsersRequest = () => ({ type: constants.FETCH_ALL_USERS_REQUEST });
export const A_FetchAllUsersSuccess = user => ({ type: constants.FETCH_ALL_USERS_SUCCESS, payload: user });
export const A_FetchAllUsersFailure = err => ({ type: constants.FETCH_ALL_USERS_FAILURE, payload: err });
export const A_FetchAllUsersClear = () => ({ type: constants.FETCH_ALL_USERS_CLEAR });

export const A_ForgotPasswordRequest = email => ({ type: constants.FORGOT_PASSWORD_REQUEST, payload: email });
export const A_ForgotPasswordSuccess = user => ({ type: constants.FORGOT_PASSWORD_SUCCESS, payload: user });
export const A_ForgotPasswordFailure = err => ({ type: constants.FORGOT_PASSWORD_FAILURE, payload: err });
export const A_ForgotPasswordClear = () => ({ type: constants.FORGOT_PASSWORD_CLEAR });
