import './App.css';

import Header from './component/Header.js' 
import Quiz from './Quiz.js';

function App() {
  return (
    <>
      <Header/>
      <div className="App">
        <Quiz />
      </div>
    </>
  );
}

export default App;
