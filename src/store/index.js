import {createStore} from "redux";
//import initialState from "./initialState";
import rootReducer from "../reducers"
import history from "../history"

const store = createStore(rootReducer(history));

export default store