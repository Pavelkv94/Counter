import '../../App.css';
import { AppStateType } from '../../redux/store';
import { Button } from '../common/Button';
import { SpanSetting } from '../common/SpanSetting';

type SettingType = {
    state: AppStateType
    changeValueMax: (initValue: number) => void
    changeValueStart: (initValue: number) => void
}

export function Setting(props: SettingType) {
    
    return (
        <div className="countContainer" >
            <div className="setDisplay">
                <SpanSetting title={"Max value:"} value={props.state.counter.maxValue} changeValue={props.changeValueMax} />
                <SpanSetting title={"Start value:"} value={props.state.counter.startValue} changeValue={props.changeValueStart} />
            </div>
            <div className="controlContainer">
                <Button title={("Count")} disabled={true} onClick={() => { }} class={`btn`} />
            </div>
        </div>
    )
}