import { combineReducers, createStore } from "redux";
import flightReducer from "../reducers/flightReducer";

const rootReducer = combineReducers({flight:flightReducer})
const store = createStore(rootReducer)
export default store