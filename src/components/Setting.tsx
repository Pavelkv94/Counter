import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';


export function Setting(props:any) {
    return (
        <div className="countContainer" >
            <NavLink to='/Counter'> <Button title={"set"} disabled={true} onClick={()=>{}} class={`btn`} /></NavLink>
        </div>
    )
}