import React from 'react';
import '../../App.css';
import { Button } from '../common/Button';
import { SpanSetting } from '../common/SpanSetting';

export function Setting(props: any) {


    return (
        <div className="countContainer" >
            <div className="setDisplay">
                <SpanSetting title={"Max value:"} value={1}/>
                <SpanSetting title={"Start value:"} value={2}/>
            </div>
            <div className="controlContainer">
                <Button title={("Count")} disabled={true} onClick={() => { }} class={`btn`} />
            </div>
        </div>
    )
}