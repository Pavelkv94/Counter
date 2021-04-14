import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { HeadTitle } from './components/HeadTitle/HeadTitle';
import { Setting } from './components/Setting/Setting';
import { AppStateType } from './redux/store';

export type StateType = {
  displayValue: number
  maxValue: number
  startValue: number
  isDisabled: boolean
}
function App() {
const displayValue = useSelector<AppStateType, number>(state=>state.counter.displayValue);
const dispatch = useDispatch();

  let [state, setState] = useState<StateType>({
    displayValue: 0,
    maxValue: 5,
    startValue: 0,
    isDisabled: true,
  })
  useEffect(() => {
    localStorage.setItem("Display Value", JSON.stringify(state.displayValue))
  }, [state.displayValue])
  useEffect(() => {
    localStorage.setItem("Max Value", JSON.stringify(state.maxValue))
  }, [state.maxValue])
  useEffect(() => {
    localStorage.setItem("Start Value", JSON.stringify(state.startValue))
  }, [state.startValue])

  useEffect(() => {
    let localValue = localStorage.getItem("Display Value");
    if (localValue) {
      let newValue = JSON.parse(localValue)
      setState({ ...state, displayValue: newValue })
    }
  }, [])
  useEffect(() => {
    let localValue = localStorage.getItem("Start Value");
    if (localValue) {
      let newValue = JSON.parse(localValue)
      setState({ ...state, startValue: newValue })
    }
  }, [])
  useEffect(() => {
    let localValue = localStorage.getItem("Max Value");
    if (localValue) {
      let newValue = JSON.parse(localValue)
      setState({ ...state, maxValue: newValue })
    }
  }, [])
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
        <Route render={() => <Setting state={state} changeValueMax={changeValueMax} changeValueStart={changeValueStart} />} path="/setting" />
      </div>
    </BrowserRouter>
  );
}

export default App;
