type IncCounterValueType = ReturnType<typeof incCounterValueAC>
type ResetCounterValueType = ReturnType<typeof resetCounterValueAC>

type ActionType =
    IncCounterValueType
    | ResetCounterValueType

const initialState = {
    displayValue: 0,
    maxValue: 5,
    startValue: 0,
    isDisabled: true,
}
type InitialStateType = typeof initialState
export function counterReducer(state: InitialStateType = initialState, action: ActionType): InitialStateType {
    switch (action.type) {
        case "INC-COUNTER-VALUE":
            return {
                ...state,
                displayValue: state.displayValue + 1

            }
            case "RESET-COUNTER-VALUE":
                return {
                    ...state,
                    displayValue: state.startValue
    
                }
        default: return state
    }
}

export function incCounterValueAC() {
    return {
        type: "INC-COUNTER-VALUE"
    }
}

export function resetCounterValueAC() {
    return {
        type: "RESET-COUNTER-VALUE"
    }
}
