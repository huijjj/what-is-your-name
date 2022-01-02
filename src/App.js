import React, {useState} from 'react';

import './App.css';

import Header from './component/Header.js' 
import Quiz from './Quiz.js';
import Quiz2 from './component/Quiz2';

function App() {

  const [state, setState] = useState(1)

  const onClickChange = (idx) => {
    setState(idx)
  }

  let content;

  if(state === 1){
    content = <Quiz/>
  }
  else if(state === 2){
    content = <Quiz2/>
  }

  return (
    <>
      <Header onChangePage={onClickChange} />
      <div className="App">
        {content}
      </div>
    </>
  );
}

export default App;
