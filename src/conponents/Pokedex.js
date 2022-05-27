import axios from 'axios';
import React, { useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from './PokemonCard';
import InputName from './InputName';
const Pokedex = () => {

    const user = useSelector ((state) => state.user)
    const [characters,setCharacters]=useState([])

    useEffect(()=>{

            axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)
            .then(res=>setCharacters(res.data.results))

    },[])
    
   

    return (
        <div>
            <h1>Pokedex</h1>
            <h2>Bienvenido {user}</h2>
                    {
                      <InputName/>  
                    }
            
               
              <button>Previus</button>
              <button>Next</button>
                <div className="container">
                        {
                        characters.map((character)=>(
                            <CharacterCard characterUrl={character.url} />
                            ))
                        }
                 </div>
                   
              <button>Previus</button>
              <button>Next</button>
        </div>
    );
};

export default Pokedex;