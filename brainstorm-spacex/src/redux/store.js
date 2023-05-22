import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { appReducer } from "./appRedux/reducer";
import { authReducer } from "./authRedux/reducer";
import thunk from 'redux-thunk'
const combineReducer = combineReducers(appReducer,authReducer)
export const store = legacy_createStore(combineReducer,applyMiddleware(thunk))