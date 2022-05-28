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
          <Route path="/Pokemons/:id" element={<CharacterDetail/>}/>
            </Route>
          </Routes>
        </HashRouter>
        </div>
  );
}
export default App;

