import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({ counter: counterReducer })

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;