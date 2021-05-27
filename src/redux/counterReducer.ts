import { Dispatch } from "redux"

type IncCounterValueType = ReturnType<typeof incCounterValueAC>
type ResetCounterValueType = ReturnType<typeof resetCounterValueAC>
type ChangeMaxCounterValueACType = ReturnType<typeof changeMaxCounterValueAC>
type SetCounterValueACType = ReturnType<typeof setCounterValueAC>

export type ActionType =
    SetCounterValueACType
    | IncCounterValueType
    | ChangeMaxCounterValueACType
    | ResetCounterValueType

// | ChangeStartCounterValueACType

const initialState = {
    displayValue: 0,
    maxValue: 5,
    startValue: 0,
    isDisabled: true,
}
type InitialStateType = typeof initialState;
export function counterReducer(state: InitialStateType = initialState, action: ActionType): InitialStateType {
    switch (action.type) {
        case "INC-COUNTER-VALUE":
            return {
                ...state,
                displayValue: state.displayValue + 1
            }
        case "SET-COUNTER-VALUE":
            return {
                ...state,
                //@ts-ignore
                displayValue: action.value
            }
        case "RESET-COUNTER-VALUE":
            return {
                ...state,
                displayValue: state.startValue
            }
        case "CHANGE-MAX-COUNTER-VALUE":
            return {
                ...state,
                //@ts-ignore
                maxValue: action.value
            }
        // case "CHANGE-START-COUNTER-VALUE":
        //     return {
        //         ...state,
        //         startValue: action.value
        //     }
        default: return state
    }
}

export function incCounterValueAC() {
    return {
        type: "INC-COUNTER-VALUE",
    }
}
export function setCounterValueAC(value: number) {
    return {
        type: "SET-COUNTER-VALUE",
        value,
    }
}
export function resetCounterValueAC() {
    return {
        type: "RESET-COUNTER-VALUE"
    }
}

export function changeMaxCounterValueAC(value: number) {
    return {
        type: "CHANGE-MAX-COUNTER-VALUE",
        value,
    }
}

// export function changeStartCounterValueAC(value: number) {
//     return {
//         type: "CHANGE-START-COUNTER-VALUE",
//         value,
//     }
// }
// type ChangeStartCounterValueACType = ReturnType<typeof changeStartCounterValueAC>



//todo THUNK

export const incValueTC = (value: number) => (dispatch: Dispatch) => {
    localStorage.setItem('displayValue', JSON.stringify(value))
    dispatch(incCounterValueAC())
}