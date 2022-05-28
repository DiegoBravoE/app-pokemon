import axios from 'axios';
import React, { useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import Home from './Home';
const Pokedex = () => {

    const user = useSelector ((state) => state.user)
    const [characters,setCharacters]=useState([])

    useEffect(()=>{

            axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=12`)
            .then(res=>setCharacters(res.data.results))

    },[])
    
   

    return (
        <div>
            <h1>Pokedex</h1>
            <h2>Bienvenido {user}</h2>
           
                    {
                      <Home/>  
                    }
            <div className="button">
               <button class="btn btn-primary" >Previus</button>
               <button class="btn btn-primary">Next</button>
            </div>
            
                <div className="container">
                        {
                        characters.map((character)=>(
                            <PokemonCard characterUrl={character.url} key={character.id} />
                            ))
                        }
                 </div>
                   
              
        </div>
    );
};

export default Pokedex;