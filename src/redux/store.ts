import { combineReducers, createStore } from "redux";
import { loadState, saveState } from "../utils/localstorage";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({ counter: counterReducer })

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export type AppStateType = ReturnType<typeof rootReducer>