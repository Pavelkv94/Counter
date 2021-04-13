import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { HeadTitle } from './components/HeadTitle/HeadTitle';
import { Setting } from './components/Setting/Setting';

export type StateType = {
  displayValue: number
  maxValue: number
  startValue: number
  isDisabled: boolean
}
function App() {
  let [state, setState] = useState<StateType>({
    displayValue: 0,
    maxValue: 0,
    startValue: 0,
    isDisabled: true,
  })
  //let [value, setValue] = useState<number>(startValue);
  //if (maxValue < startValue) { value = NaN }
  function addInc(value: number) {
    let newValue = value + 1;
    setState({ ...state, displayValue: newValue })
  }
  function reset(value: number) {
    setState({ ...state, displayValue: value })
  }
  function changeValueMax(incValue: number) {
    setState({ ...state, maxValue: incValue })
  }
  function changeValueStart(incValue: number) {
    setState({ ...state, startValue: incValue })
  }
  return (
    <BrowserRouter>
      <div className="App" >
        <HeadTitle />
        <Route render={() => <Counter state={state} addInc={addInc} reset={reset} />} path="/counter" />
        <Route render={() => <Setting state={state} changeValueMax={changeValueMax} changeValueStart={changeValueStart}/>} path="/setting" />
      </div>
    </BrowserRouter>
  );
}

export default App;
