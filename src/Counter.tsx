import React from 'react';
import './App.css';

type CounerType = {
    value: number
    addInc: (value: number) => void
    reset: (value: number) => void
}

export function Counter(props: CounerType) {

let addIncrement = () => props.addInc(props.value)
let reset = () => props.reset(0)
let disabledOne =props.value < 5 ? false : true
let disabledTwo = props.value === 0 ? true : false

    return (
        <div className="countContainer">
            <div className={`display ${props.value===5? "limit" : ""}`}>
                {props.value}
            </div>
            <div>
                <button
                    className={`btn ${props.value===5? "disable":""}`}
                    onClick={addIncrement}
                    disabled={disabledOne}
                >incr
            </button>
                <button
                    className={`btn ${props.value===0? "disable":""}`}
                    onClick={reset}
                    disabled={disabledTwo}
                >reset
            </button>
            </div>
        </div>
    )
}