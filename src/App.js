import { HashRouter,Routes,Route } from 'react-router-dom';
import CharacterDetail from './conponents/CharacterDetail'
import UserImput from './conponents/UserInput'
import Pokedex from './conponents/Pokedex'
import ProtectedRoutes from './conponents/ProtectecRoutes'
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        
        <Routes>
        <Route path="/" element={<UserImput/>}/>
          <Route element={<ProtectedRoutes/>}> 
        <Route path="/Pokedex" element={<Pokedex/>}/>
        <Route path="/Pokedex:id" element={<CharacterDetail/>}/>
          </Route>
        </Routes>
        <div className="red"></div>
        <div className="img-footer"><img src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png" alt="" /></div>
        <div className="black"></div>
      </HashRouter>
    </div>
  );
}

export default App;
