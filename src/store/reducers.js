import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {articlesReducer} from "../containers/Articles/store/"

export default (history) =>
  combineReducers({
    router: connectRouter(history),
      articlesReducer,
  });
