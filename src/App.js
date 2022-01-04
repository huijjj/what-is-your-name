import React, {useState} from 'react';

import './App.css';

import Header from './component/Header.js' 
import Quiz1 from './component/Quiz1.js';
import Quiz2 from './component/Quiz2.js';
import LevelSelector from './component/LevelSelector.js'

function App() {

  const [state, setState] = useState(1)

  const onClickChange = (idx) => {
    setState(idx)
  }

  let content;

  if(state === 0) {
    content = <LevelSelector />
  }
  else if(state === 1){
    content = <Quiz1 />
  }
  else if(state === 2){
    content = <Quiz2 />
  }

  return (
    <div className="App">
      <Header />
      
    </div>
  );
}

export default App;
