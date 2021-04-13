import React, { useEffect } from 'react';
import { StateType } from '../../App';
import '../../App.css';
import { Button } from '../common/Button';
import { SpanSetting } from '../common/SpanSetting';

type SettingType = {
    state: StateType
    changeValueMax: (initValue: number) => void
    changeValueStart: (initValue: number) => void
}

export function Setting(props: SettingType) {
    return (
        <div className="countContainer" >
            <div className="setDisplay">
                <SpanSetting title={"Max value:"} value={props.state.maxValue} changeValue={props.changeValueMax} />
                {props.state.maxValue<props.state.startValue? <div className="setError">Max value can't be more than Start value.</div>:""}
                <SpanSetting title={"Start value:"} value={props.state.startValue}  changeValue={props.changeValueStart} />
            </div>
            <div className="controlContainer">
                <Button title={("Count")} disabled={props.state.isDisabled} onClick={() => { }} class={`btn`}/>
            </div>
        </div>
    )
}