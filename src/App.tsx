import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { HeadTitle } from './components/HeadTitle/HeadTitle';
import { Setting } from './components/Setting/Setting';
import { changeMaxCounterValueAC, incCounterValueAC, incValueTC, resetCounterValueAC } from './redux/counterReducer';
import { AppRootStateType, store } from './redux/store';


function App() {
  let state = store.getState();

  const value = useSelector<AppRootStateType, number>(state => state.counter.displayValue)
  const dispatch = useDispatch();

  const addInc = () => {
    dispatch(incValueTC(value+1))
  }

  const reset = () => {
    dispatch(resetCounterValueAC())
  }
  const changeValueMax = (value: number) => {
    dispatch(changeMaxCounterValueAC(value))
  }
  const changeValueStart = (incValue: number) => {
  }

  // useEffect(() => {
  //   let localValue = localStorage.getItem("Display Value");
  //   if (localValue) {
  //     let newValue = JSON.parse(localValue)
  //     setState({ ...state, displayValue: newValue })
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("Display Value", JSON.stringify(state.displayValue))
  // }, [state.displayValue])


  // useEffect(() => {
  //   let localValue = localStorage.getItem("Start Value");
  //   if (localValue) {
  //     let newValue = JSON.parse(localValue)
  //     setState({ ...state, startValue: newValue })
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("Start Value", JSON.stringify(state.startValue))
  // }, [state.startValue])


  // useEffect(() => {
  //   let localValue = localStorage.getItem("Max Value");
  //   if (localValue) {
  //     let newValue = JSON.parse(localValue)
  //     setState({ ...state, maxValue: newValue })
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("Max Value", JSON.stringify(state.maxValue))
  // }, [state.maxValue])


  // const addInc = (value: number) => {
  //   let newValue = value + 1;
  //   setState({ ...state, displayValue: newValue })
  // }
  // const reset = (value: number) => {
  //   setState({ ...state, displayValue: value })
  // }
  // const changeValueMax = (incValue: number) => {
  //   setState({ ...state, maxValue: incValue })
  // }
  // const changeValueStart = (incValue: number) => {
  //   setState({ ...state, startValue: incValue })
  // }

  return (
    <BrowserRouter>
      <div className="App" >
        <HeadTitle />
        <Route render={() => <Counter
          state={state}
          addInc={addInc}
          reset={reset}
        />} path="/count" />
        <Route render={() => <Setting 
        state={state} 
        changeValueMax={changeValueMax}
         changeValueStart={changeValueStart}
          />} path="/setting" />
      </div>
    </BrowserRouter>
  );
}

export default App;
