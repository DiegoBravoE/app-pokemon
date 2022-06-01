import { HashRouter, Routes, Route } from "react-router-dom";
import CharacterDetail from "./conponents/CharacterDetail";
import UserImput from "./conponents/UserInput";
import Pokedex from "./conponents/Pokedex";
import ProtectedRoutes from "./conponents/ProtectecRoutes";
import esfera from './img/esfera.svg'
import elipse from './img/elipse.svg'
import banner from "./img/pokemon.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <div className="red"><img className="banner" src={banner} alt="" /></div>
          <div className="esfera"> <img src={esfera} alt="" /> <img  className="elipse" src={elipse} alt="" /></div>
          <div className="black"></div>
        </div>
        <Routes>
          <Route path="/" element={<UserImput />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/Pokedex" element={<Pokedex />} />
            <Route path="/Pokemons/:id" element={<CharacterDetail />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
