import '../../App.css';
import { AppRootStateType } from '../../redux/store';
import { Button } from '../common/Button';
import { SpanSetting } from '../common/SpanSetting';

type SettingType = {
    state: AppRootStateType
    changeValueMax: (initValue: number) => void
    changeValueStart: (initValue: number) => void
}

export function Setting(props: SettingType) {
    console.log(props.state)
    let disableSetBtn = props.state.counter.maxValue < props.state.counter.startValue ? true : false;
    return (
        <div className="countContainer" >
            <div className="setDisplay">
                <SpanSetting title={"Max value:"} value={props.state.counter.maxValue} changeValue={props.changeValueMax} />
                {props.state.counter.maxValue < props.state.counter.startValue ? <div className="setError">Max value can't be more than Start value.</div> : ""}
                <SpanSetting title={"Start value:"} value={props.state.counter.startValue} changeValue={props.changeValueStart} />
            </div>
            <div className="controlContainer">
                <Button title={("Count")} disabled={disableSetBtn} onClick={() => { }} class={`btn`} />
            </div>
        </div>
    )
}