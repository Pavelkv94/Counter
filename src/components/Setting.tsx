import React from 'react';
import '../App.css';
import { Button } from './Button';


export function Setting(props: any) {
    return (
        <div className="countContainer" >
            <Button title={("Count")} disabled={true} onClick={() => { }} class={`btn`} />
        </div>
    )
}