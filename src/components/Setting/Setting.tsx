import '../../App.css';
import { AppStateType } from '../../redux/store';
import { Button } from '../common/Button';
import { SpanSetting } from '../common/SpanSetting';

type SettingType = {
    state: AppStateType
    changeValueMax: (initValue: number) => void
    changeValueStart: (initValue: number) => void
    setValue: () => void
}

export const Setting: React.FC<SettingType> = ({ state, changeValueMax, changeValueStart, setValue }) => {
    let disabledBtn = state.counter.maxValue <= state.counter.startValue ? true : false;
    const setDisplayValue = () => setValue();
    return (
        <div className="countContainer" >
            <div className="setDisplay">
                <SpanSetting title={"Max value:"} value={state.counter.maxValue} changeValue={changeValueMax} />
                {state.counter.maxValue <= state.counter.startValue ? <div className="setError">Max value can't be more than Start value.</div> : ""}
                <SpanSetting title={"Start value:"} value={state.counter.startValue} changeValue={changeValueStart} />
            </div>
            <div className="controlContainer">
                <Button title={"Count"}
                    disabled={disabledBtn}
                    onClick={setDisplayValue}
                    class={`btn ${state.counter.maxValue <= state.counter.startValue ? "disable" : ""}`}
                />
            </div>
        </div>
    )
}