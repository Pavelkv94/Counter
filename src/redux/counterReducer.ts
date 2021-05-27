type IncCounterValueType = ReturnType<typeof incCounterValueAC>
type ResetCounterValueType = ReturnType<typeof resetCounterValueAC>
type MaxValueType = ReturnType<typeof maxValueAC>

type StartValueType = ReturnType<typeof startValueAC>

type ActionType =
    IncCounterValueType
    | ResetCounterValueType
    | MaxValueType
    | StartValueType

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
        case "MAX-COUNTER-VALUE":
            return {
                ...state,
                maxValue: action.value

            }
        case "START-COUNTER-VALUE":
            return {
                ...state,
                startValue: action.value

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
export function maxValueAC(value: number) {
    return {
        type: "MAX-COUNTER-VALUE",
        value,
    } as const
}
export function startValueAC(value: number) {
    return {
        type: "START-COUNTER-VALUE",
        value,
    } as const
}
