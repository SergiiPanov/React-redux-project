import * as constants from "./constants";

const initialState = {
  users: [
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      subscribe: false,
      id : "",
      created_at: "",
    },
  ],
  loading: false,
  error: false,
  activeUser: null,
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SIGN_UP_REQUEST:
    case constants.FETCH_ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.SIGN_UP_FAILURE:
    case constants.FETCH_ALL_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case constants.SIGN_UP_CLEAR:
    case constants.FETCH_ALL_USERS_CLEAR:
      return {
        ...state,
      };
    case constants.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: [...action.payload],
        loading: false,
        error: null,
      };
    case constants.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
        error: null,
      };

    case constants.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        activeUser: action.payload,
        error: null,
        isLogin: true,
      };

    default:
      return { ...state };
  }
};
