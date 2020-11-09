import { createSelector } from "reselect";

const selectUsersState = state => state.authReducer;

export const getAllUsers = () => createSelector(selectUsersState, state => state.users);

export const getAuth = () => createSelector(selectUsersState, state => state.isLogin);
