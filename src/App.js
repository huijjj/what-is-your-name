import React, {useState} from 'react';

import './App.css';

import Header from './component/Header.js' 
import Quiz1 from './component/Quiz1.js';
import Quiz2 from './component/Quiz2.js';
import LevelSelector from './component/LevelSelector.js'

function App() {

  const [state, setState] = useState(Number(0))
  const [score, setScore] = useState(Number(0))

  const onLevelSelect = (level) => {
    setState(Number(level));
    console.log(level);
  }

  const scoreFuntion = (diff) => {
    setScore(score + Number(diff));
  }

  let content;
  if(state === 0) {
    content = <LevelSelector onSelect={onLevelSelect} />
  }
  else if(state === 1){
    content = <Quiz1 score={score} setScore={scoreFuntion}/>
  }
  else if(state === 2){
    content = <Quiz2 score={score} setScore={scoreFuntion}/>
  }

  return (
    <div className="App">
      <Header score={score} showScore={state != 0} />
      <div className="content__wrapper">{
        content
      }</div>
    </div>
  );
}

export default App;
