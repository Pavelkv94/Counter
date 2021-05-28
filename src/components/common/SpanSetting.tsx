import { ChangeEvent } from 'react';
import '../../App.css';

type SpanSettingType = {
    title: string
    value: number
    changeValue: (initValue: number) => void
}
//общий инпут
export function SpanSetting(props: SpanSettingType) {
    //достаем значение из инпута
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(+e.currentTarget.value)
    }
    return (
        <span className="span">
            <div>{props.title}</div>
            <input type="number" className="input" value={props.value} onChange={onChangeInput} max="99" min="-99" />
        </span>
    )
}