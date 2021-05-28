import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { HeadTitle } from './components/HeadTitle/HeadTitle';
import { Setting } from './components/Setting/Setting';
import { incCounterValueAC, maxValueAC, resetCounterValueAC, setValueAC, startValueAC } from './redux/counterReducer';
import { AppStateType } from './redux/store';



function App() {
  //ЮзСелектор следит за изменением стейта
  let state = useSelector<AppStateType, AppStateType>(state => state);
  //Достаем диспатч из стора
  let dispatch = useDispatch();
  //функция инкремента
  function addInc() {
    dispatch(incCounterValueAC())
  }
  //функция сброса значения
  function reset() {
    dispatch(resetCounterValueAC())
  }
  //функция изменения максимального значения нстройки
  function changeValueMax(value: number) {
    dispatch(maxValueAC(value))
  }
  //функция изменения стартового значения нстройки
  function changeValueStart(value: number) {
    console.log(value)
    dispatch(startValueAC(value))
  }
  //функция присваивания стартового значения нфтройки отображаемому
  function setValue() {
    dispatch(setValueAC())
  }

  return (
    <BrowserRouter>
      <div className="App" >
        <HeadTitle />
        <Route render={() => <Counter state={state} addInc={addInc} reset={reset} />} path="/Counter" />
        <Route render={() => <Setting state={state} changeValueMax={changeValueMax} changeValueStart={changeValueStart} setValue={setValue} />} path="/setting" />
      </div>
    </BrowserRouter>
  );
}

export default App;
