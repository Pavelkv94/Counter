
type ActionType = IncCounterValueType

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
                displayValue: state.displayValue+1

            }
        default: return state
    }
}

export function incCounterValueAC() {
    return {
        type: "INC-COUNTER-VALUE"
    }
}
type IncCounterValueType = ReturnType<typeof incCounterValueAC>
