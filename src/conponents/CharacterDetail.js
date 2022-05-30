import React from "react";
import { useParams } from "react-router-dom";
import{useState,useEffect} from 'react'
import axios from "axios";

const CharacterDetail = () => {
  const {id}=useParams()

  const[pokemon,setPokemon]=useState("")

   useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=>setPokemon(res.data))

   },[id])
   
  return (
   
     
       
        <div   className="img-detail">
             <img  src={pokemon.sprites?.other.dream_world.front_default}alt="" />
        <h1 className="title-detail">{pokemon.name}</h1>
        <div className="sub-card-detail">
               <h4  className="skill"  >   Skills:{pokemon.abilities?.[0].ability.name}  </h4>
                    <div className="item-card-detail">
                        <p>Type: {pokemon.types?.[0].type.name}</p>
                        <p>Hp: {pokemon.stats?.[0].base_stat}</p>
                        <p> Attack: {pokemon.stats?.[1].base_stat}  </p>
                        <p>Speed: {pokemon.stats?.[5].base_stat}</p>
                        
                    </div>
             </div> 
             <div>


             </div>
       
        </div>

     
      
  
     
 
    
  );
};

export default CharacterDetail;
