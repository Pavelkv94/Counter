import { start } from 'node:repl';
import React from 'react';
import '../../App.css';
import { Button } from '../common/Button';
import { AppStateType } from '../../redux/store';

type CounerType = {
    state: AppStateType
    addInc: () => void
    reset: (value: number) => void
}

export function Counter(props: CounerType) {

    let addIncrement = () => props.addInc()
    let reset = () => props.reset(props.state.counter.startValue)
    let disabledOne = props.state.counter.displayValue < props.state.counter.maxValue ? false : true
    let disabledTwo = props.state.counter.displayValue === props.state.counter.startValue ? true : false
    
    return (
        <div className="countContainer">
            <div className={`display ${props.state.counter.displayValue === props.state.counter.maxValue ? "limit" : ""}`}>
                {props.state.counter.displayValue}
            </div>
            <div className="controlContainer">
                <Button title={"incr"} disabled={disabledOne} onClick={addIncrement} class={`btn ${props.state.counter.displayValue === props.state.counter.maxValue ? "disable" : ""}`} />
                <Button title={"reset"} disabled={disabledTwo} onClick={reset} class={`btn ${props.state.counter.displayValue === props.state.counter.startValue ? "disable" : ""}`} />
                <Button title={"set"} disabled={true} onClick={reset} class={'btn'} />
            </div>
        </div>
    )
}