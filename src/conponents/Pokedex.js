import axios from 'axios';
import React, { useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import{useNavigate}from 'react-router-dom'
import banner from '../img/pokemon.svg'

const Pokedex = () => {

    const user = useSelector ((state) => state.user)
 
    const [pokemons,setPokemons]=useState([])
    const [pokeSearch,setPokeSearch]=useState("")
    const [types,setTypes]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1126&offset=0`)
        .then(res=>setPokemons(res.data.results))
        
        axios.get(`https://pokeapi.co/api/v2/type`)
        .then((res) => setTypes(res.data.results));
        
    },[])
    
    const[page,setPage]=useState(1)

    const pokeNumbers=50
    const lastIndex= pokeNumbers*page
    const firstIndex=lastIndex-pokeNumbers
    const pokemonPaginated=pokemons.slice(firstIndex,lastIndex)
    const lastPage=Math.ceil( pokemons.length / pokeNumbers ) 

   const numbers=[]
    for(let i=1; i <= lastPage; i++){
       

            numbers.push(i)
        

    }
console.log(numbers)
    const search = () => {
        
        navigate(`/Pokemons/${pokeSearch}`)
        
    }
    
    const filterCharacters=(e)=>{
        if(e.target.value ==="All Types"){
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1126&offset=0`)
            .then(res=>setPokemons(res.data.results))
        }else{
            axios.get(e.target.value)
            .then((res) => setPokemons(res.data.pokemon));

        }
    }
  
    
    return (
        <div >
          <img className="banner" src={banner} alt="" />

            <h2  className="name-trainer">Bienvenido {user}</h2>

            <div className="input-select">
                    <div className="input-group mb-3">
                        <select className="form-select"  onChange={filterCharacters} id="inputGroupSelect02">
                            <option>All Types</option>
                            {
                           types.map((type) => ( <option value={type.url} key={type.url}>{type.name}</option> ))
                            }
                         </select>
                    </div>              
         </div>
         <div className="input-search">
                <div  className="d-flex" role="search">
                    <input  onChange={e=>setPokeSearch(e.target.value)} value={pokeSearch}key={pokemons.pokemon} className="form-control me-2" type="search" placeholder="Search Pokemon" aria-label="Search"/>
                    <button  onClick={search} className="btn btn-outline-success" type="submit">Search</button>
                </div>

            
            <div className="button">
               <button onClick={()=>setPage(page-1)} 
              disabled={page===1}
               className="btn btn-primary" >Previus</button>
               {

               numbers.map(number=>(
                   <div className="pagination">

                       <button  onClick={()=>setPage(number)}className="btn btn-outline-primary" >{number}</button>
                   </div>

               ))
               }
               <button onClick={()=>setPage(page+1)}
               disabled={page===lastPage}
                className="btn btn-primary"  >Next</button>
            </div>

            
            
                <div className="container">
                        {
                        pokemonPaginated.map((pokemon)=>(
                            <PokemonCard characterUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} 
                            key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} />
                            ))
                        }
                       
                        
                 </div>
                </div>    
              
        </div>
    );
};

export default Pokedex;