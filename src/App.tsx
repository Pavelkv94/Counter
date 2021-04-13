import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter';
import { HeadTitle } from './components/HeadTitle/HeadTitle';
import { Setting } from './components/Setting';

function App() {
  let [value, setValue] = useState<number>(0)

  function addInc(value: number) {
    let newValue = value + 1;
    setValue(newValue)
  }
  function reset(value: number) {
    setValue(value)
  }

  return (
    <BrowserRouter>
      <div className="App" >
        <HeadTitle/>
        <Route render={() => <Counter value={value} addInc={addInc} reset={reset} />} path="/Counter" />
        <Route render={() => <Setting />} path="/setting" />
      </div>
    </BrowserRouter>
  );
}

export default App;
