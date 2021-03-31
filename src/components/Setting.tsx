import React from 'react';
import '../App.css';
import { Button } from './Button';


export function Setting(props: any) {
    return (
        <div className="countContainer" >
            <div className="setDisplay">
                <span className="span">
                    <div>Max value:</div>
                    <input type="number" />
                </span>
                <span className="span">Start value:</span>
            </div>
            <div className="controlContainer">
                <Button title={("Count")} disabled={true} onClick={() => { }} class={`btn`} />
            </div>
        </div>
    )
}