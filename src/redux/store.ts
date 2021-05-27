import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({ counter: counterReducer })

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

store.subscribe(() => {
localStorage.setItem('state', JSON.stringify(store.getState()))
})