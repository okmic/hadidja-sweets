
import { applyMiddleware, combineReducers, createStore } from "redux";
import hadidjaReducer from "./hadidjaReducer";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers(
    {
        hadidjaReducer
    }
)

const store = createStore(redusers, applyMiddleware(thunkMiddleware))

export default store;