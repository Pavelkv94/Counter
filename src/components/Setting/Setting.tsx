import '../../App.css';
import { AppStateType } from '../../redux/store';
import { Button } from '../common/Button';
import { SpanSetting } from '../common/SpanSetting';

type SettingType = {
    state: AppStateType
    changeValueMax: (initValue: number) => void
    changeValueStart: (initValue: number) => void
}

export const Setting:React.FC<SettingType> = ({state, changeValueMax, changeValueStart}) => {
    
    return (
        <div className="countContainer" >
            <div className="setDisplay">
                <SpanSetting title={"Max value:"} value={state.counter.maxValue} changeValue={changeValueMax} />
                <SpanSetting title={"Start value:"} value={state.counter.startValue} changeValue={changeValueStart} />
            </div>
            <div className="controlContainer">
                <Button title={("Count")} disabled={true} onClick={() => { }} class={`btn`} />
            </div>
        </div>
    )
}