import React, { ChangeEvent, useEffect, useState } from 'react';
import '../../App.css';

type SpanSettingType = {
    title: string
    value: number
    changeValue: (initValue: number) => void
}

export function SpanSetting(props: SpanSettingType) {


    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        let initValue = JSON.parse(e.currentTarget.value)
        props.changeValue(initValue)
    }
    return (
        <span className="span">
            <div>{props.title}</div>
            <input type="number" className="input" value={props.value} onChange={onChangeInput} max="99" min="-99"/>
        </span>
    )
}