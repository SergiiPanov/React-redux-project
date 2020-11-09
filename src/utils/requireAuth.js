import React, { useEffect } from "react";
import { push } from "connected-react-router";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../containers/Auth/store/selectors";
import moment from "moment";
import { RoutePath } from "../router/constants";
import { actions } from "../containers/Auth/store";

export default ComposedComponent => {
  return props => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(getAuth());
    useEffect(() => {
      if (!isAuthenticated) {
        // const token = localStorage.getItem("jwtToken");
        //
        // if (token) {
        //     const decode = jwtDecode(token);
        //     const date = moment(new Date()).valueOf();
        //
        //     if (decode.exp < date) {
        //         localStorage.removeItem("jwtToken");
        //         dispatch(push(RoutePath.SIGN_IN));
        //     } else {
        //         dispatch(actions.FETCH_USER.SUCCESS(decode.user));
        //
        //         dispatch(actions.A_SignInSuccess(token));
        //         localStorage.setItem("jwtToken", token);
        //     }
        // } else {
        //     dispatch(push(RoutePath.SIGN_IN));
        // }
        dispatch(push(RoutePath.SIGN_IN));
      }
    }, [isAuthenticated, dispatch]);

    return isAuthenticated ? <ComposedComponent {...props} /> : null;
  };
};
