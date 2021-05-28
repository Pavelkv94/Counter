import React from 'react';
import { NavLink } from 'react-router-dom';

type ButtonType = {
    title: string
    disabled: boolean
    onClick: () => void
    class: string

}

export function Button(props: ButtonType) {
    return (<>{
        props.disabled === true
            ? <button
                className={props.class}
                onClick={props.onClick}
                disabled={props.disabled}
            > <NavLink to={props.title === "count"? "/setting": "/count"}>
                    <div style={{ width: '25 %', height: '50px' }}>{props.title}</div>
                </NavLink>

            </button>
            : <button
                className={props.class}
                onClick={props.onClick}
                disabled={props.disabled}
            > <NavLink to={props.title === "set" ? "/setting" : "/count"}>
                    <div style={{ width: '25 %', height: '50px' }}>{props.title}</div>
                </NavLink>

            </button>

    }</>)
    // return (
    //     <button
    //         className={props.class}
    //         onClick={props.onClick}
    //         disabled={props.disabled}
    //     > <NavLink to={props.title === "set" ? "/setting" : "/count"}>
    //             <div style={{ width: '25 %', height: '50px' }}>{props.title}</div>
    //         </NavLink>

    //     </button>
    // )
}