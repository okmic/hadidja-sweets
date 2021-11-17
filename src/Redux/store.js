import { combineReducers, createStore } from "redux";
import hadidjaReducer from "./hadidjaReducer";

let redusers = combineReducers(
    {
        hadidjaReducer
    }
)
const store = createStore(redusers)


export default store;