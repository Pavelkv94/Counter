import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { HeadTitle } from './components/HeadTitle/HeadTitle';
import { Setting } from './components/Setting/Setting';
import { incCounterValueAC, maxValueAC, resetCounterValueAC, startValueAC } from './redux/counterReducer';
import { AppStateType, store } from './redux/store';



function App() {
  let state = store.getState();
  let value = useSelector<AppStateType, number>(state => state.counter.displayValue);
  let dispatch = useDispatch();

  function addInc() {
    dispatch(incCounterValueAC())
  }
  function reset() {
    dispatch(resetCounterValueAC())
  }
  function changeValueMax(incValue: number) {
    dispatch(maxValueAC(incValue))
  }
  function changeValueStart(incValue: number) {
    console.log(incValue)
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
