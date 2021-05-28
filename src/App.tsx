import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { HeadTitle } from './components/HeadTitle/HeadTitle';
import { Setting } from './components/Setting/Setting';
import { incCounterValueAC, maxValueAC, resetCounterValueAC, setValueAC, startValueAC } from './redux/counterReducer';
import { AppStateType } from './redux/store';



function App() {
  let state = useSelector<AppStateType, AppStateType>(state => state);
  let dispatch = useDispatch();

  function addInc() {
    dispatch(incCounterValueAC())
  }
  function reset() {
    dispatch(resetCounterValueAC())
  }
  function changeValueMax(value: number) {
    dispatch(maxValueAC(value))
  }
  function changeValueStart(value: number) {
    console.log(value)
    dispatch(startValueAC(value))
  }
  function setValue() {
    dispatch(setValueAC())
  }
  return (
    <BrowserRouter>
      <div className="App" >
        <HeadTitle />
        <Route render={() => <Counter state={state} addInc={addInc} reset={reset} />} path="/count" />
        <Route render={() => <Setting state={state} changeValueMax={changeValueMax} changeValueStart={changeValueStart} setValue={setValue}/>} path="/setting" />
      </div>
    </BrowserRouter>
  );
}

export default App;
