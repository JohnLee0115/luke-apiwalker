import { Route, Routes } from 'react-router-dom';
import './App.css';

import SearchSw from './components/SearchSw';
import PeopleOne from './components/PeopleOne';
import PlanetOne from './components/PlanetOne';


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <SearchSw/>
      <Routes>
        <Route path='/people/:personid' element={<PeopleOne />} />
        <Route path='/planet/:planetid' element={<PlanetOne/>} />
      </Routes>
    </div>
  );
}

export default App;
