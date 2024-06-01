
import './App.css';

import Sidebar from './components/Sidebar';
import Dashmain from './components/Dashmain';
import Inputpop from './components/inputpop';
import Mytask from './components/Mytask';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { DataProvider } from './components/Datacontext';

import Taskcards from './components/Taskcards';


function App() {
  return (<Router>
    <DataProvider>
    <Routes>
      <Route exact path='/' Component={Dashmain}/>
      <Route path='/mytask' Component={Mytask}/>
      <Route path='/taskcards' Component={Taskcards}/>
    </Routes>
    </DataProvider>
  </Router>

  );
}


export default App;
