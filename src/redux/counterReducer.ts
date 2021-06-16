type IncCounterValueType = ReturnType<typeof incCounterValueAC>
type ResetCounterValueType = ReturnType<typeof resetCounterValueAC>
type MaxValueType = ReturnType<typeof maxValueAC>
type StartValueType = ReturnType<typeof startValueAC>
type SetValueType = ReturnType<typeof setValueAC>

type ActionType =
    IncCounterValueType
    | ResetCounterValueType
    | MaxValueType
    | StartValueType
    | SetValueType

const initialState = {
    displayValue: 0,
    maxValue: 5,
    startValue: 0,
    isDisabled: true,
}
export type InitialStateType = typeof initialState
export function counterReducer(state: InitialStateType = initialState, action: ActionType): InitialStateType {
    console.log(action)
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
        case "MAX-COUNTER-VALUE":
            return {
                ...state,
                maxValue: action.maxValue
            }
        case "START-COUNTER-VALUE":
            return {
                ...state,
                startValue: action.startValue
            }
        case "SET-COUNTER-VALUE":
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
    } as const
}

export function resetCounterValueAC() {
    return {
        type: "RESET-COUNTER-VALUE"
    } as const
}
export function maxValueAC(maxValue: number) {
    return {
        type: "MAX-COUNTER-VALUE",
        maxValue,
    } as const
}
export function startValueAC(startValue: number) {
    return {
        type: "START-COUNTER-VALUE",
        startValue,
    } as const
}
export function setValueAC() {
    return {
        type: "SET-COUNTER-VALUE",
    } as const
}
