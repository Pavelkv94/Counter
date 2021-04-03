import React from 'react';
import '../App.css';

type SpanSettingType = {
    title:string
    value:number
}


export function SpanSetting(props: SpanSettingType) {
    return (
        <span className="span">
            <div>{props.title}</div>
            <input type="number" className="input" value={props.value}/>
        </span>
    )
}