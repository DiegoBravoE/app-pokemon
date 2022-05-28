import React from 'react';
import{useState,useEffect} from 'react'
import{useNavigate}from 'react-router-dom'
import axios from 'axios';
import PokemonCard from './PokemonCard'

const Home = () => {

const [pokemons,setPokemons]=useState("")
const [pokeSearch,setPokeSearch]=useState("")
const [types,setTypes]=useState([])

const navigate=useNavigate()


    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons}`)
             .then((res) => setPokemons(res.data.name));

             axios.get(`https://pokeapi.co/api/v2/type`)
             .then((res) => setTypes(res.data.results));
         },[])
    
    
      const search = () => {

    navigate(`/Pokemons/${pokeSearch}`)

      }

        const filterCharacters=(e)=>{
        
            axios.get(e.target.value)
            .then((res) => setPokemons(res.data.results));
        }
        
    return (
    <div>
        <div className="input-select">
                    <div className="input-group mb-3">
                        <select className="form-select"  onChange={filterCharacters} id="inputGroupSelect02">
                            <option></option>
                            {
                           types.map((type) => ( <option value={type.url}>{type.name}</option> ))
                        }
                        
                        
                         </select>
                    </div>              
         </div>
         <div className="input-search">
                <div  className="d-flex" role="search">
                    <input  onChange={e=>setPokeSearch(e.target.value)} value={pokeSearch}  className="form-control me-2" type="search" placeholder="Search Pokemon" aria-label="Search"/>
                    <button  onClick={search} className="btn btn-outline-success" type="submit">Search</button>
                </div>

            

              </div>

    </div>
    
    );
};

export default Home;