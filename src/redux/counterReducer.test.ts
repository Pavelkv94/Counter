import { counterReducer, incCounterValueAC, InitialStateType, maxValueAC, resetCounterValueAC, setValueAC, startValueAC } from "./counterReducer";

let state: InitialStateType;

beforeEach(() => {
    state = {
        displayValue: 2,
        maxValue: 5,
        startValue: 0,
        isDisabled: true,
    }
})

test('value of counter should be incremented ', () => {
    let action = incCounterValueAC();
    let newValue = counterReducer(state, action)
    expect(newValue.displayValue).toBe(3);
});

test('value of counter should be reset ', () => {
    let action = resetCounterValueAC();
    let newValue = counterReducer(state, action)
    expect(newValue.displayValue).toBe(0);
});

test('max value of counter should be setted', () => {
    let action = maxValueAC(8);
    let newValue = counterReducer(state, action)
    expect(newValue.maxValue).toBe(8);
});

test('start value of counter should be setted', () => {
    let action = startValueAC(1);
    let newValue = counterReducer(state, action)
    expect(newValue.startValue).toBe(1);
});

test('display value should be setted from startValue', () => {
    let action = setValueAC();
    let newValue = counterReducer(state, action)
    expect(newValue.displayValue).toBe(newValue.startValue);
});


