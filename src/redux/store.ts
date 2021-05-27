import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({ counter: counterReducer })

export type AppStateType = ReturnType<typeof rootReducer>

let preloadedState;
const persistedTodoString = localStorage.getItem('state');
if (persistedTodoString) {
    preloadedState = JSON.parse(persistedTodoString)
}



export const store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})