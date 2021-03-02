import React, { useState } from 'react';
import './App.css';
import { Counter } from './Counter';

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
    <div className="App" >
      <Counter
        value={value}
        addInc={addInc}
        reset={reset}
      />
    </div>
  );
}

export default App;
