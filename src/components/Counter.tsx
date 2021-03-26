import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';

type CounerType = {
    value: number
    addInc: (value: number) => void
    reset: (value: number) => void
}

export function Counter(props: CounerType) {

    let addIncrement = () => props.addInc(props.value)
    let reset = () => props.reset(0)
    let disabledOne = props.value < 5 ? false : true
    let disabledTwo = props.value === 0 ? true : false

    return (
        <div className="countContainer">
            <div className={`display ${props.value === 5 ? "limit" : ""}`}>
                {props.value}
            </div>
            <div className={"controlContainer"}>
                <Button title={"incr"} disabled={disabledOne} onClick={addIncrement} class={`btn ${props.value === 5 ? "disable" : ""}`} />
                <Button title={"reset"} disabled={disabledTwo} onClick={reset} class={`btn ${props.value === 0 ? "disable" : ""}`} />
                <NavLink to='/setting'> <Button title={"set"} disabled={true} onClick={reset} class={`btn`} /></NavLink>
            </div>
        </div>
    )
} //<div className={classes.item} ><NavLink to="/profile" activeClassName={classes.active}> Profile</NavLink></div>