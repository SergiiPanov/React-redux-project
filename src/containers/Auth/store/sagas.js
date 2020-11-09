import { call, put, takeLatest } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import { Api } from "../../../entries/ApiTransport";
import { push } from "connected-react-router";
import {RoutePath} from "../../../router/constants"

const api = Api.getInstance();

function* fetchAllUsers({ callback }) {
  try {
    const { data } = yield call(() => api.get("/auth"));
    yield put(actions.A_FetchAllUsersSuccess(Object.values(data)));
  } catch (err) {
    yield put(actions.A_FetchAllUsersFailure(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}

function* signUp({ payload, callback }) {
  try {
    yield call(() => api.post("/auth", payload));
    yield put(actions.A_SignUpSuccess(payload));
  } catch (err) {
    yield put(actions.A_SignUpFailure(err));
    console.log(err);
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}

function* signIn({ payload, callback }) {
  try {
    const { data } = yield call(() => api.get("/auth"));
    const registeredUser = data.filter(item => item["email"] === payload.email);
    if (registeredUser) {
      const [password] = registeredUser;
      console.log(password, registeredUser)
      if (password["password"] === payload.password) {
        yield put(actions.A_SignInSuccess(registeredUser));
        yield put(push(RoutePath.ARTICLES))
      }
    }
  } catch (err) {
    yield put(actions.A_SignInFailure(err));
  } finally {
    callback & (typeof callback === "function") && callback();
  }
}

export default function*() {
  yield takeLatest(constants.FETCH_ALL_USERS_REQUEST, fetchAllUsers);
  yield takeLatest(constants.SIGN_UP_REQUEST, signUp);
  yield takeLatest(constants.SIGN_IN_REQUEST, signIn);
}
