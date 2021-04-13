import { start } from 'node:repl';
import React from 'react';
import '../../App.css';
import { Button } from '../common/Button';
import { StateType } from '../../App'

type CounerType = {
    state: StateType
    addInc: (value: number) => void
    reset: (value: number) => void
}

export function Counter(props: CounerType) {

    let addIncrement = () => props.addInc(props.state.displayValue)
    let reset = () => props.reset(props.state.startValue)
    let disabledOne = props.state.displayValue < props.state.maxValue ? false : true
    let disabledTwo = props.state.displayValue === props.state.startValue ? true : false
    console.log(props.state.displayValue)
    console.log(props.state.startValue)
    console.log(disabledTwo)
    return (
        <div className="countContainer">
            <div className={`display ${props.state.displayValue === props.state.maxValue ? "limit" : ""}`}>
                {props.state.displayValue}
            </div>
            <div className="controlContainer">
                <Button title={"incr"} disabled={disabledOne} onClick={addIncrement} class={`btn ${props.state.displayValue === props.state.maxValue ? "disable" : ""}`} />
                <Button title={"reset"} disabled={disabledTwo} onClick={reset} class={`btn ${props.state.displayValue === props.state.startValue ? "disable" : ""}`} />
                <Button title={"set"} disabled={true} onClick={reset} class={'btn'} />
            </div>
        </div>
    )
}